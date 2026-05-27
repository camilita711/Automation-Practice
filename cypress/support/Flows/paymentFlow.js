import { paymentPage, PaymentPage } from '../Pages/paymentPage.js';

export function paymentFlow(card) {
  paymentPage.fillCardInformation(card);
  paymentPage.payOrder();
}
