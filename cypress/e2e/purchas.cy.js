import { productsPage } from '../support/Pages/productsPage.js';
import { cartPage } from '../support/Pages/cartPage.js';
import { checkoutPage } from '../support/Pages/checkoutPage.js';

import { cartAssertions } from '../support/Assertions/cartAssertions.js';
import { checkoutAssertions } from '../support/Assertions/checkoutAssertions.js';
import { paymentAssertions } from '../support/Assertions/paymentAssertions.js';

import { paymentFlow } from '../support/Flows/paymentFlow.js';

describe('Purchase Flow', () => {
  function goToPaymentPage(nProducts, qProducts) {
    productsPage.addProduct(nProducts);
    cartAssertions.validateCartUrl();
    cartAssertions.validateProductQuantity(qProducts);
    cartPage.procedToCheckout();
    checkoutAssertions.validateCheckoutUrl();
    checkoutPage.placeOrder();
  }

  beforeEach(function () {
    cy.fixture('user').as('userData');

    cy.fixture('cards').as('cardData');

    cy.get('@userData').then((user) => {
      cy.login(user.validUser);
    });

    cy.visit('/products');
  });

  describe('Happy Path', () => {
    it('Should complete the purchase successfully', function () {
      const validUser = this.userData.validUser;

      const validCard = this.cardData.validCard;

      productsPage.addProduct(1);

      cartAssertions.validateCartUrl();

      cartAssertions.validateProductQuantity('1'); // same value that productsPage.addProduct(1)

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

  describe('Payment Validations', () => {
    it('Should reject invalid card', function () {
      goToPaymentPage(1, 1);

      paymentFlow(this.cardData.invalidCard);

      paymentAssertions.validateInvalidCard();
    });

    it('Should reject expired card', function () {
      goToPaymentPage(1, 1);

      paymentFlow(this.cardData.expiredCard);

      paymentAssertions.validateInvalidCard();
    });

    it('Should validate required payment fields', function () {
      goToPaymentPage(1, 1);

      paymentFlow(this.cardData.emptyCard);

      paymentAssertions.validateInvalidCard();
    });

    it('Should reject invalid cvc', function () {
      goToPaymentPage(1, 1);

      paymentFlow(this.cardData.invalidCardCvc);

      paymentAssertions.validateInvalidCard();
    });
  });
});
