
import { BasePage } from "./basePage.js";

export class ProductsPage extends basePage {
    elements = {
        buttonAddCar : '[data-product-id="3"]',
        clickViewCar : '[href="/view_cart"]',
        checkOutButton : '#do_action > .container > .row > .col-sm-6 > .btn.btn-default.check_out',
        placeOrderButton : '#cart_items > .container > div a.btn.btn-default.check_out'.eq(0)

    } 
    selectProducts(user) {
        this.click(this.elements.buttonAddCar)
        this.click(this.elements.clickViewCar)
        this.click(this.elements.checkOutButton)
        this.click(this.elements.placeOrderButton)
    }


}

export const productsPage = ProductsPage()