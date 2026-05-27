import { baseAssertions, BaseAssertions } from './baseAssertions.js';
import { routes } from '../Constants/routes.js';

export class CartAssertions extends BaseAssertions {
  elements = {
    cartQuantity: '.cart_quantity button',
  };

  validateCartUrl() {
    this.urlEqual(routes.cart);
  }

  validateProductQuantity(quantity) {
    this.elementHaveText(this.elements.cartQuantity, quantity);
  }
}

export const cartAssertions = new CartAssertions();
