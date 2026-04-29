export class BaseAssertions  {

    urlEqual(url){
        cy.url().should('eq', url)
    }

}

export const baseAssertions = new BaseAssertions()