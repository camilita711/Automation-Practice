import { purchaseFlow } from "../support/Flows/purchaseFlow.js"


describe('Test',() => {
    beforeEach( () => {
    cy.fixture('user').then(user => {
        const validUser = user.validUser
        cy.login(validUser)
    })
})

    it('Select Product', () => {
        cy.visit('/products')
        cy.fixture('cards').then(cards   => {
            const validCard = cards.validCard
            purchaseFlow(1, validCard)
        })
        
        

    })
})