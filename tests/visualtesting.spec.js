// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Visual comparison testing in Playwright", async ({ page }) => {
  // Go tu URL
  await page.goto("https://www.github.com/login");

  // Before actions 2 images comparison
  await expect(page).toHaveScreenshot("githubpage.png");

  await page.locator("#login_field").click();
  await page.locator("#login_field").fill("testers talk");

  // After actions 2 images comparison
  await expect(page).toHaveScreenshot("githubpage.png");

  await page.waitForTimeout(5000);
});
