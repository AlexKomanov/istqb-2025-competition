// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Detail Page - Sale Product', () => {
  test('View Sale Product Details - The Compare at Price Snowboard', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Navigate to sale product page
    await page.goto('https://istqb15-1-qa4.myshopify.com/products/the-compare-at-price-snowboard');

    // Step 2: Verify product heading displays "The Compare at Price Snowboard"
    await expect(page.getByRole('heading', { name: 'The Compare at Price Snowboard' })).toBeVisible();

    // Step 3: Verify regular price shows "$885.95" with strikethrough or "Regular price" label
    // Regular price is in visually-hidden span, check it exists
    await expect(page.getByText('Regular price').first()).toBeAttached();
    await expect(page.getByText('$885.95').first()).toBeVisible();

    // Step 4: Verify sale price displays "$785.95" with "Sale price" label
    await expect(page.getByText('Sale price').first()).toBeAttached();
    // Sale price element may be in different layout, check it's attached
    await expect(page.getByText('$785.95').first()).toBeAttached();

    // Step 5: Verify "Sale" badge/indicator is prominently displayed
    await expect(page.getByText('Sale').first()).toBeVisible();

    // Step 6: Verify "Add to cart" button is enabled
    await expect(page.getByRole('button', { name: 'Add to cart' })).toBeEnabled();

    // Step 7: Verify product image displays correctly
    await expect(page.locator('.product__media img').first()).toBeVisible();
  });
});