import { test, expect} from "@playwright/test";

test("should navigate to the Finansdata page when the finansdata link is clicked", async ({
    page
}) => {

    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Finansdata"}).click();
    await expect(page.getByRole("heading", { name: "Valuta Rente tittel ipsum, dolor sit amet"})).toBeVisible();
    await expect(page.getByText("Valutakurs og styringsrente hentes fra Norges Banks API.")).toBeVisible();
});