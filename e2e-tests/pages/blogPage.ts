import { Page, Locator } from '@playwright/test';

export class BlogPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly advisorImage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole("heading", { name: "Tips og råd om boliglån" });
        this.advisorImage = page.getByRole('img', { name: "Bilde av rådgiver"});
    }


    async waitForImageLoad() {
        await this.page.waitForFunction(() => {
            const img = document.querySelector('img[alt="Bilde av rådgiver"]') as HTMLImageElement;
            return img?.complete && img.naturalWidth > 0;
        });
    }

    async navigateToHome() {
        await this.page.click('a[href="/"]');
        await this.page.waitForLoadState('networkidle');
    }
}

