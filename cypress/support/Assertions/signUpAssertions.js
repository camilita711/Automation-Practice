import { BaseAssertions } from "./baseAssertions"

class RegisterAssertions extends BaseAssertions {
    elements = {

        baseUrl : "https://automationexercise.com",
        loginURL : "https://automationexercise.com/login",
        signUpUrl : "https://automationexercise.com/signup",
        accountCreated: "https://automationexercise.com/account_created"

    }

    validateSignUpUrl() {
        this.urlEqual(this.elements.signUpUrl)
    }

    validateAccountCreatedUrl() {
        this.urlEqual(this.elements.accountCreated)
    }

  

}

export const registerAssertions = new RegisterAssertions()