import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {

    readonly pageTitle: Locator;

    constructor(page: Page) {
        super(page);

        this.pageTitle = page.locator('.title');
    }

    async verifyProductsPage() {
        await expect(this.pageTitle).toHaveText('Products');
    }
}