// Include playwright module
const { test, expect } = require("@playwright/test");

import { Module1TestData } from "../test-data/qa/google.json";

for (const [key, value] of Object.entries(Module1TestData)) {

  // write a test
  test(`Data Driven Testing Using JSON file in Playwright ${value}`, async ({page,}) => {
    // Go to URL
    await page.goto(process.env.URL);

    await page.waitForTimeout(5000);

    // Search with keywords
    await page.locator("#APjFqb").click();
    await page.locator("#APjFqb").fill(value);
    await page.locator("#APjFqb").press("Enter");

    await page.waitForTimeout(5000);

    await page.close();
  });
}
