import { loginPage } from '../Pages/loginPage.js';

export function loginFLow(user) {
  loginPage.fillEmail(user.email);
  loginPage.fillPassword(user.password);
  loginPage.clickLoginBtn();
}
