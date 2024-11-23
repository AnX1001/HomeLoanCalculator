import { test, expect } from "@playwright/test";

test.use({ launchOptions: { slowMo: 5000 } });

test("should navigate to the blog page when the blog link is clicked", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Blogg" }).click();
  await expect(
    page.getByRole("heading", { name: "Blog tittel ipsum, dolor sit amet" }),
  ).toBeVisible();
});

test("should navigate to the home page when the home link is clicked", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Blogg" }).click();
  await page.getByRole("link", { name: "Hjem" }).click();
  await expect(
    page.getByRole("heading", { name: "Lån ikke godkjent" }),
  ).toBeVisible();
});
