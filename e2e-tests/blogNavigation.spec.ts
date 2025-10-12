import { test } from "./fixtures/homePage";
import { expect } from "@playwright/test";

// test.use({ launchOptions: { slowMo: 5000 } });

test("should navigate to the blog page when the blog link is clicked", async ({
  homePage,
}) => {
  test.setTimeout(60000);

 
  await homePage.getByRole("link", { name: "Blogg" }).click();
  await expect(
    homePage.getByRole("heading", { name: "Blog tittel ipsum, dolor sit amet" }),
  ).toBeVisible();
});

test("should navigate to the home page when the home link is clicked", async ({
  homePage,
  context,
}) => {
  await context.route("https://identitytoolkit.googleapis.com/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        idToken: "fake-id-token",
        email: "test@example.com",
        localId: "12345",
      }),
    }),
  );
  test.setTimeout(60000);
 
  await homePage.getByRole("link", { name: "Blogg" }).click();
  await homePage.getByRole("link", { name: "Hjem" }).click();

  const headingLocator = homePage.locator('[data-testid="loan-status-heading"]');
  await expect(headingLocator).toHaveCount(1, { timeout: 5000 });
});
