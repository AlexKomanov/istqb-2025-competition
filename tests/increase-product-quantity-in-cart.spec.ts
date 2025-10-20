// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Functionality', () => {
  test('Increase Product Quantity in Cart', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Navigate to The Collection Snowboard: Hydrogen product page
    await page.getByRole('link', { name: 'The Collection Snowboard: Hydrogen' }).click();

    // Click Add to cart button to add product with quantity 1
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Step 3: Click the Increase quantity button
    await page.getByRole('button', { name: 'Increase quantity for The' }).click();

    // Verify Line total updates to $1,200.00
    await expect(page.getByText('$1,200.00').first()).toBeVisible();

    // Verify Subtotal updates to $1,200.00 USD
    await expect(page.getByText('$1,200.00 USD')).toBeVisible();

    // Verify Cart badge updates to 2 items
    await expect(page.getByRole('button', { name: 'Cart 2 items' })).toBeVisible();

    // Verify quantity spinbutton shows 2
    await expect(page.getByRole('spinbutton', { name: 'Quantity for The' })).toHaveValue('2');
  });
});
