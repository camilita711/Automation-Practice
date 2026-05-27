import { productsPage, ProductsPage } from '../support/Pages/productsPage.js';
import { ProductsAssertions } from '../support/Assertions/productAssertions.js';
import { cartPage } from '../support/Pages/cartPage.js';
import { cartAssertions, CartAssertions } from '../support/Assertions/cartAssertions.js';
import { checkoutPage, CheckoutPage } from '../support/Pages/checkoutPage.js';
import { checkoutAssertions } from '../support/Assertions/checkoutAssertions.js';
import { paymentFlow } from '../support/Flows/paymentFlow.js';
import { paymentAssertions, PaymentAssertions } from '../support/Assertions/paymentAssertions.js';
// nota debo crear precondiciones que el carrito este vacio, con un condicional que cuando este vacio eliminar los productos del carrito
// tambien debo crear las assertions de error para que no pasen los Test Cases mergear y hacer mi ci cd
// ver mejores practicas para mejorar mi codigo
describe('Purchase FLow', () => {
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      cy.login(user.validUser);
    });
    cy.visit('/products');
  });
  describe('Happy Path', () => {
    it('Should  complete the purchase successfully', () => {
      cy.fixture('user').then((user) => {
        const validUser = user.validUser;

        cy.fixture('cards').then((cards) => {
          const validCard = cards.validCard;

          productsPage.addProduct(1);
          cartAssertions.validateCartUrl();
          cartAssertions.validateProductQuantity('1');
          cartPage.procedToCheckout();
          checkoutAssertions.validateInvoiceInformation(
            `${validUser.firstName} ${validUser.lastName}`,
            validUser.mobileNumber
          );
          checkoutPage.placeOrder();
          paymentFlow(validCard);
          paymentAssertions.validateOrderPlaced();
        });
      });
    });
  });

  describe('Payment Validations', () => {
    it('Should reject invalid card number', () => {
      cy.fixture('cards').then((cards) => {
        const invalidCard = cards.invalidCard;

        productsPage.addProduct(1);
        cartAssertions.validateCartUrl();
        cartAssertions.validateProductQuantity('1');
        cartPage.procedToCheckout();
        checkoutAssertions.validateInvoiceInformation(
          `${validUser.firstName} ${validUser.lastName}`,
          validUser.mobileNumber
        );
        checkoutPage.placeOrder();
        paymentFlow(invalidCard);
        //paymentAssertions.validateInvalidCard()
      });
    });

    it('Should reject expired card', () => {
      cy.fixture('cards').then((cards) => {
        const expiredCard = cards.expiredCard;

        productsPage.addProduct(1);
        cartPage.procedToCheckout();
        checkoutPage.placeOrder();
        paymentFlow(expiredCard);
        // paymentAssertions.validateExpiredCard()
      });
    });

    it('Should validate required payment fields', () => {
      cy.fixture('cards').then((cards) => {
        const emptyCard = cards.emptyCard;

        productsPage.addProduct(1);
        cartPage.procedToCheckout();
        checkoutPage.placeOrder();
        paymentFlow(emptyCard);
        //paymentAssertions.validateRequiredFields()
      });
    });

    it('Should reject invalid cvc', () => {
      cy.fixture('cards').then((cards) => {
        const invalidCvc = cards.invalidCardCvc;

        productsPage.addProduct(1);
        cartPage.procedToCheckout();
        checkoutPage.placeOrder();
        paymentFlow(invalidCvc);
        //paymentAssertions.validateInvalidCvc()
      });
    });
  });
});
