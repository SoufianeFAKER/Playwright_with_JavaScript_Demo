// Include playwright module
const { expect } = require("@playwright/test");

// Create Class
exports.HomePage = class HomePage {
  /**
   *
   * @param {import ('@playwright/test').page} page
   */

  constructor(page) {
    // Init page object
    this.page = page;

    // Elements
    this.searchTextbox = page.locator("#APjFqb");
  }

  async goTo() {
    await this.page.goto("https://www.google.com");
  }

  async searchKeywords(param1) {
    await expect(this.searchTextbox).toBeEnabled();
    await this.searchTextbox.click();
    await this.searchTextbox.fill(param1);
    await this.searchTextbox.press("Enter");
  }
};
