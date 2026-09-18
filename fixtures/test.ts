import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProductsPage } from '../pages/ProductsPage';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },
});

export { expect } from '@playwright/test';