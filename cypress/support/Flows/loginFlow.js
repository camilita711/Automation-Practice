import { loginPage } from "../Pages/loginPage.js";

export function loginFLow(user) {
    loginPage.fillEmail(user)
    loginPage.fillPassword(user)
    loginPage.clickLoginBtn()
}