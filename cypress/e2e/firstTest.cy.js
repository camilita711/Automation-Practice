import { registerPage } from "../support/Pages/signUpPages.js"
import { registerAssertions } from "../support/Assertions/signUpAssertions.js"

beforeEach( () => {
    cy.visit('/login')
})

describe('test',() => {
    it('first test', () =>{
        cy.fixture('user').then(user =>{
            registerPage.fillFormInit(user)
            registerAssertions.validateSignUpUrl()
            registerPage.fillAccountInformation(user)
        })
        

    })
})