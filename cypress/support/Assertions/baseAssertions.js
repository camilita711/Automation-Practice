export class BaseAssertions {
  urlEqual(expectedUrl) {
    cy.url().should('eq', expectedUrl);
  }

  urlIncludes(expectedUrl) {
    cy.url().should('include', expectedUrl);
  }

  elementVisible(selector) {
    cy.get(selector).should('be.visible');
  }

  elementContainText(selector, text) {
    cy.get(selector).should('contain.text', text);
  }

  elementHaveText(selector, text) {
    cy.get(selector).should('have.text', text);
  }

  elementHaveValue(selector, value) {
    cy.get(selector).should('have.value', value);
  }

  elementHaveProperty(selector, propertyName, expectedValue) {
    cy.get(selector).should('have.prop', propertyName).and('include', expectedValue);
  }
}

export const baseAssertions = new BaseAssertions();
