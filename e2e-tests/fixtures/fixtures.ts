import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { BlogPage } from "../pages/blogPage";
import { FinansdataPage } from "../pages/finansdataPage";

interface MyFixtures {
  homePage: HomePage;
  blogPage: BlogPage;
  finansdataPage: FinansdataPage;
}

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    // Force navigator.language to 'nb' before page loads
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'language', {
        get: () => 'nb',
        configurable: true
      });
    });
    await page.goto("/");
    const homePage = new HomePage(page);
    await use(homePage);
  },
  blogPage: async ({ page }, use) => {
    const blogPage = new BlogPage(page);
    await use(blogPage);
  },
  finansdataPage: async ({ page }, use) => {
    const finansdata = new FinansdataPage(page);
    await use(finansdata);
  }
});

export { expect };
