import { registerPage } from '../support/Pages/signUpPages.js';
import { registerAssertions } from '../support/Assertions/signUpAssertions.js';

beforeEach(() => {
  cy.visit('/login');
});

describe('test', () => {
  it('first test', () => {
    cy.fixture('user').then((user) => {
      const validUser = user.validUser;
      registerPage.fillFormInit(validUser);
      registerAssertions.validateSignUpUrl();
      registerPage.fillAccountInformation(validUser);
      registerAssertions.validateAccountCreatedUrl();
    });
  });
});
