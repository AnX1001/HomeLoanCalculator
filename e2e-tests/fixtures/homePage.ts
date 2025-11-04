// Playwright fixture: provides 'homePage' (navigated to "/").
import { test as base } from "@playwright/test";

export const test = base.extend({
    homePage: async ({ page }, use) => {
        // Force navigator.language to 'nb' before page loads
        await page.addInitScript(() => {
            Object.defineProperty(navigator, 'language', {
                get: () => 'nb',
                configurable: true
            });
        });
        
        await page.goto("/");
        await use(page);
    }
});