import { loginPage, LoginPage } from "./Pages/loginPage.js";

Cypress.Commands.add('login', (user) => {
cy.visit('/login')
loginPage.fillLogin(user)


})