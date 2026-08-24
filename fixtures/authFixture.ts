import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

type AuthFixtures = {
    authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
    authenticatedPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await use(page);
    },
});

export { expect };