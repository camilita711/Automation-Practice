import { registerPage } from "../support/Pages/signUpPages"

beforeEach( () => {
    cy.visit('/login')
})

describe('test',() => {
    it('first test', () =>{
        cy.fixture('user').then(user =>{
            registerPage.fillFormInit(user)
            registerPage.fillAccountInformation(user)
        })
        

    })
})