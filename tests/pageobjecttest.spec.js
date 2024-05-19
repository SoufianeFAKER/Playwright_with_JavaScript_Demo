// Include playwright module
//import { test, expect } from "@playwright/test";

const { test, expect } = require('@playwright/test')

const { HomePage } = require('../pages/homepage');
const { ResultPage } = require('../pages/resultpage');
const { PlaylistPage } = require('../pages/playlistpage');



// write a test
test("Page Object Model in Playwright", async ({ page }) => {

  // Go tu URL
  const homepage = new HomePage(page);
  await homepage.goTo();

await page.waitForTimeout(4000);

  // Search with keywords
  homepage.searchKeywords('playwright by testers talk');

  await page.waitForTimeout(4000);

  // Click on playlist
  const resultpage = new ResultPage(page);
  await resultpage.clickOnPlaylist();

  await page.waitForTimeout(4000);

  // Click on video
  const playlistpage = new PlaylistPage(page);
  await playlistpage.clickOnVideo();

  
});
