import { productsPage, ProductsPage } from "../Pages/productsPage.js";
import { cartPage, CartPage } from "../Pages/cartPage.js";
import { checkoutPage, CheckoutPage } from "../Pages/checkoutPage.js";

export function purchasFlow(index) {

    productsPage.selectProducts(index)
    productsPage.viewCart()
    cartPage.procedToCheckout()
    checkoutPage.placeOrder()    
}