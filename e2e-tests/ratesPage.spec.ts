import { test } from "./fixtures/homePage";
import { expect } from "@playwright/test";

test("should navigate to the Finansdata page when the finansdata link is clicked", async ({
    homePage
}) => {
    await homePage.getByRole("link", { name: "Finansdata"}).click();
    await homePage.waitForLoadState('networkidle');
    await expect(homePage.getByRole("heading", { name: "Valuta Rente tittel ipsum, dolor sit amet"})).toBeVisible({ timeout: 10000 });
    await expect(homePage.getByText("Valutakurs og styringsrente hentes fra Norges Banks API.")).toBeVisible();
});