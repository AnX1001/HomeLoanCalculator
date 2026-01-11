import { test } from "./fixtures/fixtures";
import { expect } from "@playwright/test";


test("should navigate to the blog page when the blog link is clicked", async ({
  homePage,
  blogPage,
}) => {
  await homePage.navigateToBlog();
  await homePage.page.waitForLoadState('networkidle');
  await expect(blogPage.heading).toBeVisible({ timeout: 10000 });
});


test("should render blog image when the blog is rendered complete", async ({
  homePage,
  blogPage
}) => {
  await homePage.navigateToBlog();
  await expect(blogPage.advisorImage).toBeVisible();
  await blogPage.waitForImageLoad();
   
  });


test("should navigate to the home page when the home link is clicked", async ({
  homePage,
  blogPage,
}) => {
  await homePage.navigateToBlog();
  await expect(blogPage.heading).toBeVisible({ timeout: 10000 });
  await blogPage.navigateToHome();
  
  await expect(homePage.page).toHaveURL('/');
  await expect(homePage.pageHeading).toBeVisible();
});
