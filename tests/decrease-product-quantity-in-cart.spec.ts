// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Functionality', () => {
  test('Decrease Product Quantity in Cart', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Navigate to product page
    await page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' }).click();

    // Add product to cart
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Wait for cart to be ready
    await expect(page.getByRole('dialog', { name: 'Your cart' })).toBeVisible();

    // Step 1: Increase quantity to 2 first
    await page.getByRole('button', { name: 'Increase quantity for The Collection Snowboard: Hydrogen' }).click();
    
    // Verify quantity is now 2
    await expect(page.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue('2');

    // Step 2: Click the "Decrease quantity" button (-)
    await page.getByRole('button', { name: 'Decrease quantity for The Collection Snowboard: Hydrogen' }).click();

    // Step 3: Verify quantity decreases from 2 to 1
    await expect(page.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue('1');

    // Step 4: Verify line total updates to $600.00 (1 × $600.00)
    await expect(page.getByText('$600.00').first()).toBeVisible();

    // Step 5: Verify subtotal updates to "$600.00 USD"
    await expect(page.getByText('$600.00 USD')).toBeVisible();

    // Step 6: Verify cart badge updates to "1 item"
    await expect(page.getByRole('button', { name: 'Cart 1 item' })).toBeVisible();
  });
});