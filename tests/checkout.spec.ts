import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('user can complete an order for Sauce Labs Backpack', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.startCheckout();
    await checkoutPage.enterInformation('Test', 'User', '12345');
    await checkoutPage.continueToOverview();
    await checkoutPage.completeOrder();

    await expect(checkoutPage.confirmationMessage).toHaveText('Thank you for your order!');
});
