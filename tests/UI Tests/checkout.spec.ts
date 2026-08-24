import { test, expect } from '../../fixtures/authFixture';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('user can complete an order for Sauce Labs Backpack', async ({ authenticatedPage }) => {
    
    const inventoryPage = new InventoryPage(authenticatedPage);
    const cartPage = new CartPage(authenticatedPage);
    const checkoutPage = new CheckoutPage(authenticatedPage);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.startCheckout();
    await checkoutPage.enterInformation('Test', 'User', '12345');
    await checkoutPage.continueToOverview();
    await checkoutPage.completeOrder();

    await expect(checkoutPage.confirmationMessage).toHaveText('Thank you for your order!');
});
