// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Detail Page - Available Product', () => {
  test('View Product Details - The Collection Snowboard: Hydrogen', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Navigate to product page
    await page.goto('https://istqb15-1-qa4.myshopify.com/products/the-collection-snowboard-hydrogen');

    // Step 2: Verify page title shows product name
    await expect(page).toHaveTitle(/The Collection Snowboard: Hydrogen/);

    // Step 3: Verify product heading displays "The Collection Snowboard: Hydrogen"
    await expect(page.getByRole('heading', { name: 'The Collection Snowboard: Hydrogen' })).toBeVisible();

    // Step 4: Verify vendor name shows "Hydrogen Vendor"
    await expect(page.getByText('Hydrogen Vendor')).toBeVisible();

    // Step 5: Verify price displays "Regular price $600.00"
    await expect(page.getByText('Regular price').first()).toBeVisible();
    await expect(page.getByText('$600.00').first()).toBeVisible();

    // Step 6: Verify product image is displayed prominently
    await expect(page.locator('.product__media img').first()).toBeVisible();

    // Step 7: Verify "Add to cart" button is enabled and visible
    await expect(page.getByRole('button', { name: 'Add to cart' })).toBeEnabled();
    await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();

    // Step 8: Verify related products section appears
    await expect(page.getByRole('heading', { name: 'Related products' })).toBeVisible();

    // Step 9: Verify review section is displayed
    await expect(page.locator('iframe[title="Product reviews widget"]')).toBeAttached(); // Review iframe
  });
});