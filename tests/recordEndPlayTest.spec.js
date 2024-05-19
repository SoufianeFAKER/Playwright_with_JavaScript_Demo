import { test, expect } from '@playwright/test';

test('Record And Play Test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.waitForTimeout(5000);
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('api testing by testers talk');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'API Testing by Testers Talk Testers Talk · Playlist', exact: true }).click();
  await page.waitForTimeout(5000);
  await expect(page.locator('#secondary-inner')).toContainText('API Testing by Testers Talk');
});