// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Date picker in Playwright", async ({ page }) => {
  // Go tu URL
  await page.goto("https://jqueryui.com/datepicker/");

  const frameElement = page.frameLocator(".demo-frame");

  //frameElement.locator('.hasDatepicker').fill('01/30/1979');

  // today's date
  //   frameElement.locator('.hasDatepicker').click();
  //   await frameElement.locator('.ui-datepicker-today').click();

  // custom date value
  frameElement.locator(".hasDatepicker").click();
  const defaultDate = frameElement.locator(".ui-datepicker-today > a");
  let currentDateValue = await defaultDate.getAttribute("data-date");

  const customDate = (parseInt(currentDateValue)-3);

  let element = "[data-date=" + "'" + customDate.toString() + "'" + "]";

  await frameElement.locator(element).click();

  await page.waitForTimeout(5000);
});
