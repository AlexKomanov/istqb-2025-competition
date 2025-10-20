// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Store Access & Authentication', () => {
  test('Access Store with Valid Password', async ({ page }) => {
    // Navigate to store URL
    await page.goto('https://istqb15-1-qa4.myshopify.com/');

    // Step 2: Verify page heading shows "istqb15-1-qa4"
    await expect(page.getByRole('heading', { name: 'istqb15-1-qa4' })).toBeVisible();

    // Step 3: Verify message states "This store is password protected. Use the password to enter the store."
    await expect(page.getByText('This store is password protected. Use the password to enter the store.')).toBeVisible();

    // Step 4: Click in the "Enter store password" input field
    await page.getByRole('textbox', { name: 'Enter store password' }).click();

    // Step 5: Type "1" (the valid password)
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');

    // Step 6: Click the "Enter" button
    await page.getByRole('button', { name: 'Enter' }).click();

    // Verify Featured products section displays
    await expect(page.getByRole('heading', { name: 'Featured products' })).toBeVisible();

    // Verify Navigation menu is accessible - Home link (in header)
    await expect(page.locator('header').getByRole('link', { name: 'Home' })).toBeVisible();

    // Verify Navigation menu is accessible - Catalog link (in header)
    await expect(page.locator('header').getByRole('link', { name: 'Catalog' })).toBeVisible();

    // Verify Navigation menu is accessible - Contact link (in header)
    await expect(page.locator('header').getByRole('link', { name: 'Contact' })).toBeVisible();

    // Verify Cart button is visible in header
    await expect(page.getByRole('button', { name: 'Cart' })).toBeVisible();

    // Verify Search button is visible in header
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  });
});
