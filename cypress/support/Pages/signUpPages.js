export class RegisterPage {

    typeName(name) {
         cy.get('[data-qa="signup-name"]').type(name)
    }

    typeEmail(email) {
         cy.get('[data-qa="signup-email"]').type(email)
    }

    clickSignUpButton() {
        cy.get('[data-qa="signup-button"]').click()
    }
    
    selectGender() {
    cy.get('#id_gender1').click()
    }

    typePassword(password) {
    cy.get('[data-qa="password"]').type(password)
    }

    selectDay(day) {
    cy.get('[data-qa="days"]').select(day)
    }

    selectMonth(months) {
    cy.get('[data-qa="months"]').select(months)
    }

    selectYear(years) {
    cy.get('[data-qa="years"]').select(years)
    }

    selectNews() {
    cy.get('#newsletter').click()
    }
}

export const registerPage = new RegisterPage()