import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test('user can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    

    // Navigate to SauceDemo
    await loginPage.goto();

    // Login
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    // Verify login successful
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
});

test('user cannot login with invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Navigate to SauceDemo
    await loginPage.goto();

    // Login
    await loginPage.login(
        users.invalidPassword.username,
        users.invalidPassword.password
    );

    // Verify error message is displayed
       await expect(loginPage.errorMessage).toContainText('Username and password do not match');

});