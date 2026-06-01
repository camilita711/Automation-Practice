import { BasePage } from './basePage.js';

export class CartPage extends BasePage {
  elements = {
    checkOutButton: '.btn.btn-default.check_out',
    cartButton: '#header a[href="/view_cart"]',
    delProductsButton: '#cart_info_table .cart_delete .cart_quantity_delete',
  };

  procedToCheckout() {
    this.click(this.elements.checkOutButton);
  }

  goToCart() {
    this.click(this.elements.cartButton);
  }

  deleteProducts() {
    this.click(this.elements.delProductsButton);
  }

  deleteAllProducts() {
    cy.get('body').then(($body) => {
      if ($body.find(this.elements.delProductsButton).length > 0) {
        cy.get(this.elements.delProductsButton).first().click();

        cy.wait(500);

        this.deleteAllProducts();
      }
    });
  }
  clearCart() {
    this.goToCart();
    this.deleteAllProducts();
  }
}

export const cartPage = new CartPage();
