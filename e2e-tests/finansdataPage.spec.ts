
import { test, expect } from "./fixtures/fixtures";
import { FinansdataPage } from "./pages/finansdataPage";

test("navigates to Finansdata page and displays correct heading and info text", async ({ homePage }) => {
    await homePage.navigateToFinansdata();
    await homePage.page.waitForLoadState('networkidle');

    const finansdata = new FinansdataPage(homePage.page);
    await expect(finansdata.heading).toBeVisible({ timeout: 10000 });
    await expect(finansdata.infoText).toBeVisible();
});


test ("navigates back to home page from Finansdata page", async ({ homePage }) => {
    await homePage.navigateToFinansdata();
    await homePage.page.waitForLoadState('networkidle');

    const finansdata = new FinansdataPage(homePage.page);
    await expect(finansdata.heading).toBeVisible({ timeout: 10000 });

    await finansdata.navigateToHome();
    await expect(homePage.page).toHaveURL('/');
    await expect(homePage.pageHeading).toBeVisible();
});