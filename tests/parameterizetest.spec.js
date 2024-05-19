// Include playwright module
import { test, expect } from "@playwright/test";

const testParameters = [
  "Playwright by testers talk",
  "Cypress by testers talk",
  "Javascript by testers talk",
];

// forof Loop
for (const searchKeyword of testParameters) {
  // write a test
  test(`Parameterize tests in Playwright ${searchKeyword}`, async ({ page }) => {
    // Go tu URL
    await page.goto("https://www.youtube.com/");

    await page.waitForTimeout(5000);

    // Search with keywords
    await page.getByPlaceholder("Search").click();
    await page.getByPlaceholder("Search").fill(searchKeyword);
    await page.getByPlaceholder("Search").press("Enter");

    await page.waitForTimeout(5000);
  });
}
