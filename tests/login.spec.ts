import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { loginData } from '../test-data/loginData';

for (const data of loginData) {

    test(`Login Test - ${data.testCase}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate('https://www.saucedemo.com/');

        await loginPage.login(data.username, data.password);

        if (data.testCase === 'Valid Login') {
            await expect(page).toHaveURL(/inventory/);
        } else {
            await expect(page.locator('[data-test="error"]')).toBeVisible();
        }
    });
}