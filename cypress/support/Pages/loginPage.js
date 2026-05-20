import { BasePage } from "./basePage.js";

export class LoginPage extends BasePage {
    elements = {
        loginEmail : '[data-qa="login-email"]',
        loginPassword : '[data-qa= "login-password"]',
        loginButton : '[data-qa="login-button"]'

    }
    

    fillEmail(user) {
        this.type(this.elements.loginEmail, user.email)
    }

    fillPassword(user) {
        this.type(this.elements.loginPassword, user.password) 
    }

    clickLoginBtn(){
        this.click(this.elements.loginButton)
    }

    fillLogin(user){
        this.fillEmail(user)
        this.fillPassword(user)
        this.clickLoginBtn()
}
    

    
}
 export const loginPage = new LoginPage()

