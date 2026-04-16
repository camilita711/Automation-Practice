beforeEach( () => {
    cy.visit('/login')
})

describe('Realizar el login de la pag Automation',() => {
    it('Hacer el login con las credenciales correctas', () => {
    cy.get('[data-qa="login-email"]').type('pepapig@gmail.com')
    cy.get('[data-qa="login-password"]').type('Tupepapig.com')
    cy.get('[data-qa="login-button"]').click()
})
})