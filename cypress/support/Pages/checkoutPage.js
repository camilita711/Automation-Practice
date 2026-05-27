import { BasePage } from './basePage.js';

export class CheckoutPage extends BasePage {
  elements = {
    placeOrderButton: '#cart_items > .container > div a.btn.btn-default.check_out',
  };

  placeOrder() {
    this.click(this.elements.placeOrderButton);
  }
}

export const checkoutPage = new CheckoutPage();
