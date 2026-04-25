import { registerPage, RegisterPage } from "../support/Pages/signUpPages.js"

beforeEach( () => {
    cy.visit('/login')
})

describe('test',() => {
    it('first test', () =>{
        cy.fixture('user').then(user =>{
            registerPage.fillFormInit(user)
        })
        

    })
})