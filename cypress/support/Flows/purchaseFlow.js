import { productsPage, ProductsPage } from "../Pages/productsPage.js";
import { cartPage, CartPage } from "../Pages/cartPage.js";
import { checkoutPage, CheckoutPage } from "../Pages/checkoutPage.js";
import { paymentFlow } from "./paymentFlow.js";

export function purchaseFlow(index,cardInformation) {

    productsPage.selectProducts(index)
    productsPage.viewCart()
    cartPage.procedToCheckout()
    checkoutPage.placeOrder()
    paymentFlow(cardInformation)

     
}