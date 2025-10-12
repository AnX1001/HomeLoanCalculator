// Playwright fixture: provides 'homePage' (navigated to "/").
import { test as base } from "@playwright/test";

export const test = base.extend({
    homePage: async ({ page }, use) => {
        await page.goto("/");
        await use(page);
    }
});