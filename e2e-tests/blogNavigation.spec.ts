import { test, expect } from "@playwright/test";

// test.use({ launchOptions: { slowMo: 5000 } });

test("should navigate to the blog page when the blog link is clicked", async ({
  page,
}) => {
  test.setTimeout(60000);

  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Blogg" }).click();
  await expect(
    page.getByRole("heading", { name: "Blog tittel ipsum, dolor sit amet" }),
  ).toBeVisible();
});

test("should navigate to the home page when the home link is clicked", async ({
  page,
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
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Blogg" }).click();
  await page.getByRole("link", { name: "Hjem" }).click();

  const headingLocator = page.locator('[data-testid="loan-status-heading"]');
  await expect(headingLocator).toHaveCount(1, { timeout: 5000 });
});
