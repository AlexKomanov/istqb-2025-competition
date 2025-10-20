import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
  });
});
