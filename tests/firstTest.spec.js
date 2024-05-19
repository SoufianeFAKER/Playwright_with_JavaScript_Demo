// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Validate Youtube Title", async ({ page }) => {
  // Go tu URL
  //await page.setViewportSize({ width: 1536, height: 816});
  await page.goto("https://www.youtube.com/");

  await page.waitForTimeout(5000);

  // Search with keywords
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("Cypress by testers talk");

  await expect(
    page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  
  await page.waitForTimeout(8000);

  // Click on playlist
  await page.getByTitle("Cypress by Testers Talk").first().click();

  await page.waitForTimeout(3000);

  //Validate title
  await expect(page).toHaveTitle(
    "Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube"
  );
});
