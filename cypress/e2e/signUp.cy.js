import { registerPage } from "../support/Pages/signUpPages"

before( () => {
    cy.visit('/login')
})

describe('Sign Up suit',() => {
    it('Fill the signup form', () => {
        registerPage.typeName('Lila Ponce')
        registerPage.typeEmail('lila11ponce@gmail.com')
        registerPage.clickSignUpButton()
        registerPage.selectGender()
        registerPage.typePassword('Elcumple5')
        registerPage.selectDay('15')
        registerPage.selectMonth('3')
        registerPage.selectYear('2000')
        registerPage.selectNews()
        cy.get('[data-qa="first_name"]').type('Liliana')
        cy.get('[data-qa="last_name"]').type('Ponciana')
        cy.get('[data-qa="company"]').type('Omitividad')
        cy.get('[data-qa="address"]').type('Cruz Santa')
        cy.get('[data-qa="address2"]').type('sushi')
        cy.get('[data-qa="country"]').select('India')
        cy.get('[data-qa="state"]').type('RE')
        cy.get('[data-qa="city"]').type('indiana')
        cy.get('[data-qa="zipcode"]').type('1010')
        cy.get('[data-qa="mobile_number"]').type('62626262')
        cy.get('[data-qa="create-account"]').click()
        })


})