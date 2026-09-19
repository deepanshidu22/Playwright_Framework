import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class Dashboardpage extends BasePage {

    readonly menuButton: Locator;

    constructor(page: Page) {
        super(page);

        this.menuButton = page.locator('#react-burger-menu-btn');
    }

    async verifyDashboard() {
        await expect(this.menuButton).toBeVisible();
    }
}