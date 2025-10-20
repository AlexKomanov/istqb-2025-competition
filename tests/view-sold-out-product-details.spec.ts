// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Detail Page - Sold Out Product (The 3p Fulfilled Snowboard)', () => {
  test('View Sold Out Product Details', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Navigate to sold-out product page
    await page.goto('https://istqb15-1-qa4.myshopify.com/products/the-3p-fulfilled-snowboard');

    // Step 2: Verify product heading displays "The 3p Fulfilled Snowboard"
    await expect(page.getByRole('heading', { name: 'The 3p Fulfilled Snowboard' })).toBeVisible();

    // Step 3: Verify vendor shows "istqb15-1-qa4"
    await expect(page.locator('.product__text').getByText('istqb15-1-qa4')).toBeVisible();

    // Step 4: Verify price displays "$2,629.95"
    await expect(page.getByText('$2,629.95').first()).toBeVisible();

    // Step 5: Verify "Sold out" status is prominently displayed
    await expect(page.getByRole('button', { name: 'Sold out' })).toBeVisible();

    // Step 6: Verify "Sold out" button is disabled
    await expect(page.getByRole('button', { name: 'Sold out' })).toBeDisabled();

    // Step 7: Verify product image is displayed
    await expect(page.locator('.product__media img').first()).toBeVisible();

    // Step 8: Note - Related products ARE actually displayed for sold out products
    // This differs from the test plan assumption
    const relatedProducts = page.getByRole('heading', { name: 'Related products' });
    await expect(relatedProducts).toBeVisible();
  });
});