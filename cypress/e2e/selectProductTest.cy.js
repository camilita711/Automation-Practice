import { productsPage, ProductsPage } from "../support/Pages/productsPage.js";
import { loginPage, LoginPage } from "../support/Pages/loginPage.js";


describe('Test',() => {
    beforeEach( () => {
    cy.fixture('user').then(user => {
        cy.login(user)
    })
})

    it('Select Product', () => {
        cy.visit('/products')
        productsPage.selectProducts(1)
       
        

    })
})