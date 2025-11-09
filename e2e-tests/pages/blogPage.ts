import { Page, Locator } from '@playwright/test';

export class BlogPage {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole("heading", { name: "Tips og råd om boliglån" });
    }

    async navigateToHome() {
        await this.page.click('a[href="/"]');
        await this.page.waitForLoadState('networkidle');
    }
}

