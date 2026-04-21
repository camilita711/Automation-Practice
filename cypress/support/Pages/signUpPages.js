import { BasePage } from "./basePage"

export class RegisterPage extends BasePage {

    elemets = {
        name:'[data-qa="signup-name"]',
        email:'[data-qa="signup-email"]',
        signUpButton:'[data-qa="signup-button"]',
        genderFemale: '#id_gender1',
        genderMale: '#id_gender',
        password:'[data-qa="password"]'

    }
    
    typeName(name) {
         this.type(this.elemets.name, name)
    }

    typeEmail(email) {
         this.type(this.elemets.email, email)
    }

    clickSignUpButton() {
         this.click(this.elemets.signUpButton)
    }
    
    selectGender() {
         this.click(this.elemets.genderFemale)
    }

    typePassword(password) {
         this.type(this.elemets.password, password)
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

    selectFirstName(firstName) {
        cy.get('[data-qa="first_name"]').type(firstName)
    }

    selectLastName(lastName) {
        cy.get('[data-qa="last_name"]').type(lastName)
    }

    selectCompany(company) {
        cy.get('[data-qa="company"]').type(company)
    }

    selectAddres(adress) {
        cy.get('[data-qa="address"]').type(adress)
    }

    selectAdressDos(adressDos) {
        cy.get('[data-qa="address2"]').type(adressDos)
    }

    selectCountry(country) {
        cy.get('[data-qa="country"]').select(country)
    }

    selectStates(state) {
        cy.get('[data-qa="state"]').type(state)
    }

    selectCity(city) {
        cy.get('[data-qa="city"]').type(city)
    }

    selectZipCode(zipCode) {
        cy.get('[data-qa="zipcode"]').type(zipCode)
    }

    selectMobileNumber(mobileNumber) {
        cy.get('[data-qa="mobile_number"]').type(mobileNumber)
    }

    selectCreateCount(createCount) {
        cy.get('[data-qa="create-account"]').click()
    }
}

export const registerPage = new RegisterPage()