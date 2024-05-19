// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Mouse actions in Playwright", async ({ page }) => {
  // Go tu URL
  await page.goto("https://www.google.com/search?q=Cypress+by+testers+talk");

  // click
  //await page.getByRole("link", { name: "Testers Talk" }).first().click();

  // double click
  //await page.getByRole("link", { name: "Testers Talk" }).first().dblclick();

  // mouse right click
  //await page.getByRole("link", { name: "Testers Talk" }).first().click({button: 'right'});

  // mouse middle click
  //await page.getByRole("link", { name: "Testers Talk" }).first().click({button: 'middle'});

  // mouse left click
  //await page.getByRole("link", { name: "Testers Talk" }).first().click({button: 'left'});

  // mouse hover
  await page.locator("[aria-label='Search by voice']").hover();
});
