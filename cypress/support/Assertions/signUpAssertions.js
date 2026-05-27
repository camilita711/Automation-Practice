import { BaseAssertions } from './baseAssertions';
import { routes } from '../Constants/routes.js';

class RegisterAssertions extends BaseAssertions {
  validateSignUpUrl() {
    this.urlEqual(routes.signUpUrl);
  }

  validateAccountCreatedUrl() {
    this.urlEqual(routes.accountCreated);
  }

  validateLoginUrl() {
    this.urlEqual(routes.login);
  }

  validateHomeUrl() {
    this.urlEqual(routes.home);
  }
}

export const registerAssertions = new RegisterAssertions();
