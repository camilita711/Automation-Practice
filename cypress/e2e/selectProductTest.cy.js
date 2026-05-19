import { purchasFlow } from "../support/Flows/purchaseFlow.js"


describe('Test',() => {
    beforeEach( () => {
    cy.fixture('user').then(user => {
        cy.login(user)
    })
})

    it('Select Product', () => {
        cy.visit('/products')
       purchasFlow(1)
        

    })
})