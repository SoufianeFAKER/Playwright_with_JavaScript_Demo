// Include playwright module
import { test, expect } from "@playwright/test";

// write a test
test("Handle iframes in Playwright & Drag And Drop", async ({ page }) => {
  // Go tu URL
  await page.goto("https://jqueryui.com/droppable/");

  //iframe
  const iframeElement = page.frameLocator('.demo-frame');

  // src an dest element
  const dragElement = iframeElement.locator("[id='draggable']");
  const dropElement = iframeElement.locator("[id='droppable']");

  // drag and drop
  await dragElement.dragTo(dropElement);

});
