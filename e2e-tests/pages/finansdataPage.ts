import { Page, Locator } from "@playwright/test";

export class FinansdataPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly infoText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole("heading", { name: "Valutakurser og styringsrente" });
        this.infoText = page.getByText("Valutakurs og styringsrente hentes fra Norges Banks API.");
    }
      async navigateToHome() {
        await this.page.click('a[href="/"]');
        await this.page.waitForLoadState('networkidle');
    }
}
