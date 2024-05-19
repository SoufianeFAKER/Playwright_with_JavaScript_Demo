// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Handle dropdown list in Playwright", async ({ page }) => {
  // Go tu URL
  await page.goto("https://www.facebook.com/");

  await page.waitForTimeout(3000);

  await page.getByRole("button", { name: "Create new account" }).click();

  const dropDownList = page.locator("#month");

  await expect(dropDownList).toHaveValue("5");

  dropDownList.selectOption("9");

  dropDownList.selectOption("Aug");

  await page.waitForTimeout(5000)
});
