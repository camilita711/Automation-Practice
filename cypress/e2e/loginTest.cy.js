import { loginPage, LoginPage } from "../support/Pages/loginPage.js";
import { registerAssertions } from "../support/Assertions/signUpAssertions.js";

beforeEach( () => {
    cy.visit('/login')
}) 

describe('Login test', () => {
    it('login test', () => {
        cy.fixture('user').then( user => {
            loginPage.fillLogin(user)
            registerAssertions.validateLoginUrl()
        })
    })
})