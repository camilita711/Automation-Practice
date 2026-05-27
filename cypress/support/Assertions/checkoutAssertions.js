import { BaseAssertions } from './baseAssertions.js';
import { routes } from '../Constants/routes.js';

export class CheckoutASsertions extends BaseAssertions {
  elements = {
    //Delivery
    deliveryName: '#address_invoice .address_firstname',
    deliveryCityState: '#address_delivery .address_city.address_state_name.address_postcode',
    deliveryPhone: '#address_delivery .address_phone',

    // Invoice
    invoiceName: '#address_invoice .address_firstname',
    invoiceCityState: '#address_invoice .address_city.address_state_name.address_postcode',
    invoicePhone: '#address_invoice .address_phone',
  };

  validateCheckoutUrl() {
    this.urlEqual(routes.checkout);
  }

  validateInvoiceInformation(usern1, usern2) {
    this.elementContainText(this.elements.invoiceName, usern1);
    this.elementContainText(this.elements.invoicePhone, usern2);
  }
}

export const checkoutAssertions = new CheckoutASsertions();
