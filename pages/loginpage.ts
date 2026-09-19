
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async open() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.enterText(this.username, username);
        await this.enterText(this.password, password);
        await this.click(this.loginButton);
    }

    async verifyLoginSuccess() {
        await this.page.waitForURL(/inventory/);
    }

    async verifyLoginError() {
        await expect(
            this.page.locator('[data-test="error"]')
        ).toBeVisible();
    }
}
