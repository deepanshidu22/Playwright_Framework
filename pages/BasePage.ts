import { Page, Locator } from '@playwright/test';

export class BasePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async getTitle() {
        return await this.page.title();
    }
}



