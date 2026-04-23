import { BasePage } from "./basePage.js"

export class RegisterPage extends BasePage {

    elements = {
        name: '[data-qa="signup-name"]',
        email: '[data-qa="signup-email"]',
        signUpButton: '[data-qa="signup-button"]',
        genderFemale: '#id_gender1',
        genderMale: '#id_gender',
        password: '[data-qa="password"]',
        day: '[data-qa="days"]',
        months: '[data-qa="months"]',
        years: '[data-qa="years"]',
        news: '#newsletter',
        firstName: '[data-qa="first_name"]',
        lastName: '[data-qa="last_name"]',
        company: '[data-qa="company"]',
        address: '[data-qa="address"]',
        address2: '[data-qa="address2"]',
        country: '[data-qa="country"]',
        state: '[data-qa="state"]',
        city: '[data-qa="city"]',
        zipcode: '[data-qa="zipcode"]',
        mobileNumber: '[data-qa="mobile_number"]',
        createAccountBtn: '[data-qa="create-account"]'
    }
    
    fillFormInit(user) {
           this.type(this.elements.name, user.name)
           this.type(this.elements.email, user.email)
           this.click(this.elements.signUpButton)
    }

    
    selectGender() {
         this.click(this.elements.genderFemale)
    }

     typePassword(password) {
     this.type(this.elements.password, password)
     }

     selectDay(day) {
     this.select(this.elements.day, day)
     }

     selectMonth(months) {
     this.select(this.elements.months, months)
     }

    selectYear(years) {
         this.select(this.elements.years, years)
    }

    selectNews() {
         this.click(this.elements.news)
    }

    typeFirstName(firstName) {
         this.type(this.elements.firstName, firstName)
    }

    typeLastName(lastName) {
         this.type(this.elements.lastName, lastName)
    }

     typeCompany(company) {
        this.type(this.elements.company, company)
    }

    typeAddress(address) {
        this.type(this.elements.address, address)
    }

    typeAddress2(address2) {
        this.type(this.elements.address2, address2)
    }

    selectCountry(country) {
        cy.get(this.elements.country).select(country)
    }

    typeState(state) {
        this.type(this.elements.state, state)
    }

    typeCity(city) {
        this.type(this.elements.city, city)
    }

    typeZipCode(zipCode) {
        this.type(this.elements.zipcode, zipCode)
    }

    typeMobileNumber(mobileNumber) {
        this.type(this.elements.mobileNumber, mobileNumber)
    }

    clickCreateAccount() {
        this.click(this.elements.createAccountBtn)
    }
}

export const registerPage = new RegisterPage()