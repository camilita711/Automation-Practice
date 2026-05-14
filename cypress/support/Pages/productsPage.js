
import { BasePage } from "./basePage.js";

export class ProductsPage extends BasePage {
    elements = {
        productCart : '.single-products',
        buttonAddCart : '.btn.btn-default.add-to-cart',
        popUpViewCart : '.text-center > a[href="/view_cart"]',
        btnViewCart : '[href="/view_cart"]',
        checkOutButton : '.btn.btn-default.check_out',
        placeOrderButton : '#cart_items > .container > div a.btn.btn-default.check_out'

    } 


    selectProducts(index) {
        this.mouseoverIndex(this.elements.productCart, index)
        this.clickIndex(this.elements.buttonAddCart, index)
    }

    viewCart() {
        this.click(this.elements.popUpViewCart)
    }

    procedToCheckout(){
        this.click(this.elements.checkOutButton)
    }

    placeOrder(){
        this.click(this.elements.placeOrderButton)
    }






}

export const productsPage = new ProductsPage()