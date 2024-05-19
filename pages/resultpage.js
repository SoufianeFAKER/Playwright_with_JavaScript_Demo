// Include playwright module
const { expect } = require("@playwright/test");

// Create Class
exports.ResultPage = class ResultPage {
  /**
   *
   * @param {import ('@playwright/test').page} page
   */

  constructor(page) {
    // Init page object
    this.page = page;

    // Elements
    this.playlistlink = page.getByRole('link', { name : 'Playwright by Testers Talk' });
  }

  async clickOnPlaylist() {
    await expect(this.playlistlink.first()).toBeEnabled();
    await this.playlistlink.first().click();
  }
};
