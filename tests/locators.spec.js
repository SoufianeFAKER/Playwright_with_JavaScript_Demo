// Include playwright module
//const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

test.use({
  locale: "fr-FR",
});
// write a test
test("Locators Test", async ({ page }) => {
  // Go tu URL
  // await page.goto("https://www.google.com/search?q=Cypress+by+testers+talk");

  // By Role
  // await page.getByRole('link', {name : 'Images'}).click();

  // By Label
  // await page.goto("https://www.google.com");
  // await page.getByLabel("Rech.", { exact: true }).fill("Soufien Faker");
  // await page.getByLabel("Rech.", { exact: true }).press('Enter');

  // By Alt Text
  // await page.goto("https://github.com/BakkappaN");
  // await page.getByAltText("View BakkappaN's full-sized avatar").click();

  // By test ID
  // await page.goto("https://github.com/login");
  // /////await page.getByTestId('username').fill('HibaFAKER');
  // await page.getByTestId('login_field').fill('AnesFAKER');

  // By text (partial OR complete Text)
  // await page.goto("https://www.youtube.com/@testerstalk");
  // await page.getByText('Cypress by Testers Talk').click();

  // By Title
  // await page.goto("https://www.youtube.com/@testerstalk");
  // await page.getByTitle('Cypress by Testers Talk').click();

  // // By XPATH (optional)
  // await page.goto('https://www.youtube.com/@testerstalk');
  // await page.locator("xpath = //input[@name='search_query']").click();
  // await page.locator("//input[@name='search_query']").fill('javascript by testers talk');
  // await page.locator("//input[@name='search_query']").press('Enter');

  // By Css Selector (optional)
  await page.goto('https://www.youtube.com/@testerstalk');
  await page.locator("css = [name='search_query']").click();
  await page.locator("[name='search_query']").fill('javascript by testers talk');
  await page.locator("[name='search_query']").press('Enter');

  //await page.waitForTimeout(7000);

});
