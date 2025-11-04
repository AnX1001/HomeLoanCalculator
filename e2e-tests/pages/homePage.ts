import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly blogLink: Locator;
    readonly homeLink: Locator;
    readonly pageHeading: Locator;
    readonly finansdataLink: Locator;
    readonly loanStatusHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.blogLink = page.getByRole("link", { name: "Blogg" });
        this.homeLink = page.getByRole("link", { name: "Hjem" });
        this.finansdataLink = page.getByRole("link", { name: "Finansdata" });
        this.pageHeading = page.getByRole("heading", { name: "Boliglånskalkulatoren", level: 1 });
        this.loanStatusHeading = page.locator('[data-testid="loan-status-heading"]');
    }


    async navigateToBlog() {
        await this.blogLink.click();
    }

    async navigateToHome() {
        await this.homeLink.click();
    }

    async navigateToFinansdata() {
        await this.finansdataLink.click();
    }
}

