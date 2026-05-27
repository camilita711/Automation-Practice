import { BaseAssertions } from './baseAssertions.js';

export class PaymentAssertions extends BaseAssertions {
  elements = {
    orderPlaced: '[data-qa="order-placed"]',
    messagePayConfirmation: '#success_message',
    nameCard: '[data-qa="name-on-card"]',
  };

  validateOrderPlaced() {
    this.elementContainText(this.elements.orderPlaced, 'Order Placed!');
  }

  validateInvalidCard() {
    this.elementContainText(this.elements.messagePayConfirmation, 'Invalid Card');
  }

  validateEmptyCard() {
    this.elementHaveProperty(this.elements.nameCard, 'validity', { valueMissing: true });
  }
}

export const paymentAssertions = new PaymentAssertions();
