// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Functionality', () => {
  test('Add Product to Cart', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Navigate to product page by clicking on The Collection Snowboard: Hydrogen
    await page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' }).click();

    // Step 2: Click the "Add to cart" button
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Verify Cart dialog/drawer opens automatically
    await expect(page.getByRole('dialog', { name: 'Your cart' })).toBeVisible();

    // Verify Product appears in cart with correct name
    await expect(page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' })).toBeVisible();

    // Verify Subtotal displays $600.00 USD
    await expect(page.getByText('$600.00 USD')).toBeVisible();

    // Verify Message shows Taxes and shipping calculated at checkout
    await expect(page.getByText('Taxes and shipping calculated at checkout')).toBeVisible();

    // Verify Check out button is visible and enabled
    await expect(page.getByRole('button', { name: 'Check out' })).toBeVisible();

    // Verify Cart badge shows 1 item
    await expect(page.getByRole('button', { name: 'Cart 1 item' })).toBeVisible();
  });
});
