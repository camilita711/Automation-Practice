import { BasePage } from "./basePage.js"

export class RegisterPage extends BasePage {

    elements = {
        name: '[data-qa="signup-name"]',
        email: '[data-qa="signup-email"]',
        signUpButton: '[data-qa="signup-button"]',
        genderFemale: '#id_gender1',
        genderMale: '#id_gender',
        nameSign: 'data-qa="name"',
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

    fillAccountInformation(user) {
         this.click(this.elements.genderFemale)
         this.type(this.elements.password, user.password)
         this.select(this.elements.day, user.birthday.day)
         this.select(this.elements.months, user.birthday.month)
         this.select(this.elements.years, user.birthday.year)
         this.click(this.elements.news)
         this.type(this.elements.firstName, user.firstName)
         this.type(this.elements.lastName, user.lastName)
         this.type(this.elements.company, user.company)
         this.type(this.elements.address, user.address)
         this.type(this.elements.address2, user.address2)
         this.select(this.elements.country, user.country)
         this.type(this.elements.state, user.state)
         this.type(this.elements.city, user.city)
         this.type(this.elements.zipcode, user.zipCode)
         this.type(this.elements.mobileNumber, user.mobileNumber)
         this.click(this.elements.createAccountBtn)

    }

}

export const registerPage = new RegisterPage()