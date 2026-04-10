import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../../pages/Login/LoginPage';
import { expect } from '@playwright/test';

let loginPage: LoginPage;

Given('ingreso a la página', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('hago login con usuario {string} y password {string}', async function (user, pass) {
  await loginPage.login(user, pass);
});

Then('debería ver el dashboard', async function () {
    await loginPage.visualizaDashboard();
});