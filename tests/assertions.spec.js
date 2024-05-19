// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Assertions in Playwright", async ({ page }) => {

  // Go tu URL
  await page.goto("https://www.google.com/search?q=Cypress+by+testers+talk");

  console.log('Assertions in playwright is running...')

  // Assert URL
  await expect(page).toHaveURL(
    "https://www.google.com/search?q=Cypress+by+testers+talk");

  // Assert Title
  await expect(page).toHaveTitle("Cypress by testers talk - Google Search");

  // Assert Text
  await expect(page.locator("[aria-label='Search']").first()).toHaveText('Cypress by testers talk')

  // Assert editable enable visible
  await expect(page.locator("[aria-label='Search']").first()).toBeEditable();
  await expect(page.locator("[aria-label='Search']").first()).toBeEnabled();
  await expect(page.locator("[aria-label='Search']").first()).toBeVisible();

 // Assert disable empty count
 //await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();

 await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty();

 await expect(page.locator("[aria-label='Search']")).toHaveCount(2);
 

  await page.waitForTimeout(5000);
});
