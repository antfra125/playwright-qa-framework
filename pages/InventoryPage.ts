import { Locator, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly backpackAddToCartButton: Locator;
    readonly cartLink: Locator;
    readonly inventoryContainer: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;

        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.inventoryContainer = page.locator('[data-test="inventory-container"]');
        this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}
