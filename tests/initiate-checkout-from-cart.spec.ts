// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkout Flow (Initial Steps)', () => {
  test('Initiate Checkout from Cart', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Add product to cart
    await page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' }).click();
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Wait for cart dialog to open
    await expect(page.getByRole('dialog', { name: 'Your cart' })).toBeVisible();

    // Step 2: Verify subtotal is displayed in cart
    await expect(page.getByText('$600.00 USD')).toBeVisible();

    // Step 3: Click "Check out" button
    await page.getByRole('button', { name: 'Check out' }).click();

    // Step 4: Verify user is redirected to Shopify checkout page
    // URL changes to checkout domain
    await page.waitForURL(/.*checkout.*/);
    
    // Step 5: Verify checkout page displays cart summary
    await expect(page.getByText('The Collection Snowboard: Hydrogen')).toBeVisible();
    
    // Step 6: Verify customer information form is presented
    await expect(page.getByLabel(/Email|Contact/).first()).toBeVisible();
  });
});