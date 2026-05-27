import { BasePage } from './basePage.js';

export class CartPage extends BasePage {
  elements = {
    checkOutButton: '.btn.btn-default.check_out',
  };

  procedToCheckout() {
    this.click(this.elements.checkOutButton);
  }
}

export const cartPage = new CartPage();
