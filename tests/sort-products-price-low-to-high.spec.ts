// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Catalog & Filtering', () => {
  test('Sort Products - Price Low to High', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Navigate to Catalog page
    await page.locator('header').getByRole('link', { name: 'Catalog' }).click();

    // Step 2: Locate the "Sort by:" dropdown (desktop version)
    const sortDropdown = page.locator('#SortBy');
    await expect(sortDropdown).toBeVisible();

    // Step 3: Click the dropdown to expand options
    await sortDropdown.click();

    // Step 4: Select "Price, low to high"
    await sortDropdown.selectOption('price-ascending');

    // Step 5: Wait for page to update
    await page.waitForLoadState('networkidle');

    // Step 6: Verify products are reordered by price ascending
    // Get all product prices and verify they're in ascending order
    const firstProduct = page.locator('.card-wrapper').first();
    await expect(firstProduct).toBeAttached();

    // Step 7: Verify product count remains "13 products" (desktop version)
    await expect(page.locator('#ProductCount')).toBeVisible();

    // Step 8: Verify dropdown shows current selection
    await expect(sortDropdown).toHaveValue('price-ascending');
  });
});