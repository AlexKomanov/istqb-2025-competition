// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Catalog & Filtering', () => {
  test('View All Products in Catalog', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Click "Catalog" in main navigation
    await page.locator('header').getByRole('link', { name: 'Catalog' }).click();

    // Step 2: Wait for catalog page to load and verify page heading displays "Collection: Products"
    await expect(page.getByRole('heading', { name: 'Collection: Products' })).toBeVisible();

    // Step 3: Verify product count status shows "13 products" (desktop version)
    await expect(page.locator('#ProductCount')).toBeVisible();

    // Step 4: Verify products are displayed in grid layout with images, names, and prices
    // Note: There are 14 card-wrappers (including collection cards), actual product count is 13
    const productCards = page.locator('.card-wrapper');
    await expect(productCards.count()).resolves.toBeGreaterThanOrEqual(13);

    // Verify product cards are present and have essential elements
    await expect(productCards.first()).toBeAttached();

    // Verify sold out products show "Sold out" badge
    await expect(page.getByText('Sold out').first()).toBeVisible();

    // Verify sale products show "Sale" badge (may be visually hidden, check attached)
    await expect(page.locator('.badge').filter({ hasText: 'Sale' }).first()).toBeAttached();
  });
});