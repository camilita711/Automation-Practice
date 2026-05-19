import { BasePage } from "./basePage.js";

export class PaymentPage extends BasePage {

    elements = {
        nameCard : '[data-qa="name-on-card"]',
        cardNumber: '[data-qa="card-number"]',
        cvc: '[data-qa="cvc"]',
        expiryMonth: '[data-qa="expiry-month"]',
        expiryYear: '[data-qa="expiry-year"]',
        payButton: '[data-qa="pay-button"]'
    }

    fillNameCard(user){
        this.type(this.elements.nameCard, user)
    }

    fillCardNumber(user){
        this.type(this.elements.cardNumber, user)
    }

    fillCvc(user){
        this.type(this.elements.cvc, user)
    }

    fillExpiryMonth(user){
        this.type(this.elements.expiryMonth, user)
    }

    fillExpiryYear(user){
        this.type(this.elements.expiryYear, user)
    }

    payOrder(){
        this.click(this.elements.payButton)
    }
}