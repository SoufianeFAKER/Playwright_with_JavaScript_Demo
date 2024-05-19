// Include playwright module
const { test, expect } = require("@playwright/test");

import { qaTestData } from "../test-data/qa/google.json";
import { stageTestData } from "../test-data/stage/google.json";

test.describe("Module1 Test", () => {
  let testData = null;

  test.beforeAll("Running before all tests", () => {
    if (process.env.ENV == "qa") {
      testData = qaTestData;
    } else {
      testData = stageTestData;
    }
  });

  // write a test
  test("Read Test data based on different environment in Playwright", async ({
    page,
  }) => {
    // Go to URL
    await page.goto(process.env.URL);

    await page.waitForTimeout(5000);

    // Search with keywords
    await page.locator("#APjFqb").click();
    await page.locator("#APjFqb").fill(testData.skill1);
    await page.locator("#APjFqb").press("Enter");

    await page.waitForTimeout(5000);

    await page.close();
  });
});
