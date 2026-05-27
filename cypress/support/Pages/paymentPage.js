import { BasePage } from './basePage.js';

export class PaymentPage extends BasePage {
  elements = {
    nameCard: '[data-qa="name-on-card"]',
    cardNumber: '[data-qa="card-number"]',
    cvc: '[data-qa="cvc"]',
    expiryMonth: '[data-qa="expiry-month"]',
    expiryYear: '[data-qa="expiry-year"]',
    payButton: '[data-qa="pay-button"]',
    pdContinueButton: '[data-qa="continue-button"]',
  };

  fillCardInformation(cards) {
    this.type(this.elements.nameCard, cards.nameCard);
    this.type(this.elements.cardNumber, cards.cardNumber);
    this.type(this.elements.cvc, cards.cvc);
    this.type(this.elements.expiryMonth, cards.expiryMonth);
    this.type(this.elements.expiryYear, cards.expiryYear);
  }

  payOrder() {
    this.click(this.elements.payButton);
  }

  pdContinue() {
    this.click(this.elements.pdContinueButton);
  }
}

export const paymentPage = new PaymentPage();
