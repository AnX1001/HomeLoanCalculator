import { Page, Locator } from "@playwright/test";

export class FinansdataPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly infoText: Locator;
    readonly currencyImage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole("heading", { name: "Valutakurser og styringsrente" });
        this.infoText = page.getByText("Valutakurs og styringsrente hentes fra Norges Banks API.");
        this.currencyImage = page.getByRole('img', { name:'Bilde av valutakurser'});
    }

    async waitingForImageLoad() {
        await this.page.waitForFunction(() => {
            const img = document.querySelector('img[alt="Bilde av valutakurser"]') as HTMLImageElement;
            return img?.complete && img.naturalWidth > 0;
        });
    }

      async navigateToHome() {
        await this.page.click('a[href="/"]');
        await this.page.waitForLoadState('networkidle');
    }
}
