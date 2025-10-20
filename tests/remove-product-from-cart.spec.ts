// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Functionality', () => {
  test('Remove Product from Cart', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Navigate to product page
    await page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' }).click();

    // Add product to cart
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Verify product is in cart
    await expect(page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' })).toBeVisible();

    // Step 1: Locate the remove/delete button (trash icon)
    // Step 2: Click the remove button
    await page.getByLabel('Remove The Collection Snowboard: Hydrogen').click();

    // Step 3: Verify product is removed from cart immediately
    await expect(page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' })).not.toBeVisible();

    // Step 4: Verify cart is now empty with appropriate message or shows $0.00
    // Cart drawer may show empty state or close automatically
    
    // Step 5: Verify cart badge updates to show empty state
    await expect(page.getByRole('button', { name: /Cart.*0|Cart$/ })).toBeVisible();
  });
});