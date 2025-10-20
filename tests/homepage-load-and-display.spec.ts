// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Homepage Navigation & Display', () => {
  test('Homepage Load and Display', async ({ page }) => {
    // Step 1: Access the store with valid password
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 2: Verify homepage loads completely - Hero section displays "Generated test data" heading
    await expect(page.getByRole('heading', { name: 'Generated test data' })).toBeVisible();

    // Step 3: Verify description text
    await expect(page.getByText('A theme and populated test store by Shopify to help you test commerce primitives.')).toBeVisible();

    // Step 4: Verify "Shop products" link is visible
    await expect(page.getByRole('link', { name: 'Shop products' })).toBeVisible();

    // Step 5: Verify "Featured products" section displays with product carousel
    await expect(page.getByRole('heading', { name: 'Featured products' })).toBeVisible();

    // Step 6: Verify products show images, names, and prices
    // Verify Featured products section displays products
    await expect(page.locator('.card-wrapper').first()).toBeAttached();
    await expect(page.getByRole('heading', { level: 3 }).first()).toBeVisible();

    // Step 7: Verify footer displays with Quick links, Resources, and Payment methods
    await expect(page.getByRole('heading', { name: 'Quick links' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    await expect(page.getByText('Payment methods')).toBeVisible();

    // Step 8: Verify copyright shows "© 2025, istqb15-1-qa4"
    await expect(page.getByText('© 2025, istqb15-1-qa4')).toBeVisible();
  });
});