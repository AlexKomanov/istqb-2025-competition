// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Functionality', () => {
  test('Add Multiple Different Products to Cart', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Navigate to first product page (The Collection Snowboard: Hydrogen)
    await page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' }).click();

    // Step 2: Click "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
    
    // Wait for cart dialog to open
    await expect(page.getByRole('dialog', { name: 'Your cart' })).toBeVisible();
    
    // Verify first product is in cart
    await expect(page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' })).toBeVisible();

    // Step 3: Close cart drawer
    await page.getByRole('button', { name: 'Close' }).click();

    // Step 4: Navigate to second product page (The Collection Snowboard: Liquid)
    await page.goto('https://istqb15-1-qa4.myshopify.com/products/the-collection-snowboard-liquid');

    // Step 5: Click "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Step 6: Verify both products appear in cart as separate line items
    await expect(page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'The Collection Snowboard: Liquid' })).toBeVisible();

    // Step 7: Verify each product shows correct price
    await expect(page.getByText('$600.00').first()).toBeVisible(); // Hydrogen
    await expect(page.getByText('$749.95').first()).toBeVisible(); // Liquid

    // Step 8: Verify subtotal is sum of all items ($600.00 + $749.95 = $1,349.95)
    await expect(page.getByText('$1,349.95 USD')).toBeVisible();

    // Step 9: Verify cart badge shows total quantity (2 items)
    await expect(page.getByRole('button', { name: 'Cart 2 items' })).toBeVisible();
  });
});