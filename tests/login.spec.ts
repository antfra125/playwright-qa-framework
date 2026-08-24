import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to SauceDemo
    await loginPage.goto();

    // Login
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify login successful
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
});

test('user cannot login with invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Navigate to SauceDemo
    await loginPage.goto();

    // Login
    await loginPage.login('standard_user', 'fail');

    // Verify error message is displayed
       await expect(loginPage.errorMessage).toContainText('Username and password do not match');

});