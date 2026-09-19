import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProductsPage } from '../pages/ProductsPage';
import { Dashboardpage } from '../pages/Dashboardpage';

type MyFixtures = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    dashboardPage: Dashboardpage;
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

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new Dashboardpage(page);
        await use(dashboardPage);
    },
});

export { expect } from '@playwright/test';