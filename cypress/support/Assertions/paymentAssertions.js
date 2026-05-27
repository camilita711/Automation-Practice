import { BaseAssertions } from './baseAssertions.js';

export class PaymentAssertions extends BaseAssertions {
  elements = {
    orderPlaced: '[data-qa="order-placed"]',
    messagePayConfirmation: '#success_message',
  };

  validateOrderPlaced() {
    this.elementContainText(this.elements.orderPlaced, 'Order Placed!');
  }

  validateInvalidCard() {
    this.elementContainText(this.elements.messagePayConfirmation, 'Invalid Card');
  }
}

export const paymentAssertions = new PaymentAssertions();
