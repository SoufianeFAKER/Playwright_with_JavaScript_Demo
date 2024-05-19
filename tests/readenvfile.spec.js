// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Read Env file in Playwright", async ({ page }) => {
  // Go to URL
  await page.goto(process.env.URL);

  await page.waitForTimeout(5000);

  // Search with keywords
  await page.locator("#APjFqb").click();
  await page.locator("#APjFqb").fill("playwright by testers talk");
  await page.locator("#APjFqb").press("Enter");

  // Read User Name from env file
  console.log("User Name is: " + process.env.USER_NAME);

  await page.close();
});
