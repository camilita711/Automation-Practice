export class BaseAssertions  {

    urlEqual(expectedUrl) {
        cy.url().should('eq', expectedUrl)
    }

}

export const baseAssertions = new BaseAssertions()