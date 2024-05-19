// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Take screenshot in Playwright", async ({ page }) => {
  // Go tu URL
  await page.goto("https://www.youtube.com/@testerstalk");
  
  // element screenshot
  await page.locator('#inner-header-container').screenshot({path: './screenshots/element.png'});

  // page screenshot
  await page.screenshot({path: './screenshots/page.png'});

  // full page screenshot
  await page.screenshot({path: './screenshots/fullpage.png', fullPage : true});

 
});
