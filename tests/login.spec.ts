import { test } from '../fixtures/test';
import { loginData } from '../test-data/loginData';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
});

test.afterEach(async () => {
    console.log('Test completed');
});

for (const data of loginData) {

    test(`Login Test - ${data.testCase}`, async ({ loginPage, productsPage, dashboardPage }) => {

        await loginPage.login(data.username, data.password);

        if (data.testCase === 'Valid Login') {
            await loginPage.verifyLoginSuccess();
            await productsPage.verifyProductsPage();
            await dashboardPage.verifyDashboard();
        } else {
            await loginPage.verifyLoginError();
        }
    });
}