import { test } from "./fixtures/homePage";
import { expect } from "@playwright/test";

test("should navigate to the Finansdata page when the finansdata link is clicked", async ({
    homePage
}) => {
    
    await homePage.getByRole("link", { name: "Finansdata"}).click();
    await expect(homePage.getByRole("heading", { name: "Valuta Rente tittel ipsum, dolor sit amet"})).toBeVisible();
    await expect(homePage.getByText("Valutakurs og styringsrente hentes fra Norges Banks API.")).toBeVisible();
});