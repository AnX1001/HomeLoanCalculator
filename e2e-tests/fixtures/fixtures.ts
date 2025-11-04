import { test as base } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { BlogPage } from "../pages/blogPage";

type MyFixtures = {
  homePage: HomePage;
  blogPage: BlogPage;
};

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
  }
});

export { expect } from "@playwright/test";
