import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { users } from '../../test-data/users';

test('user can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();

    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await expect(inventoryPage.inventoryContainer).toBeVisible();
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