import { BaseAssertions } from "./baseAssertions"

class RegisterAssertions extends BaseAssertions {
    elements = {

        baseUrl : "https://automationexercise.com",
        loginURL : "https://automationexercise.com/login",
        signUpUrl : "https://automationexercise.com/signup"

    }

    validateSignUpUrl() {
        this.urlEqual(this.elements.signUpUrl)
    }
  

}

export const registerAssertions = new RegisterAssertions()