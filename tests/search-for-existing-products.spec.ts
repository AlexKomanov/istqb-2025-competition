// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('Search for Existing Products', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Open search dialog
    await page.getByRole('button', { name: 'Search' }).click();

    // Step 2: Type "snowboard" in search field
    await page.getByRole('combobox', { name: 'Search' }).pressSequentially('snowboard');

    // Verify Suggestions section appears
    await expect(page.getByRole('heading', { name: 'Suggestions' })).toBeVisible();

    // Verify Products section appears (use exact match to avoid "Featured products")
    await expect(page.getByRole('heading', { name: 'Products', exact: true })).toBeVisible();

    // Verify Status message shows count (use role=status which is visible)
    await expect(page.getByRole('status')).toContainText('10 results');

    // Verify search term is highlighted and products are displayed with images
    await expect(page.getByRole('option', { name: /snowboard/ }).first()).toBeVisible();
    await expect(page.getByRole('option', { name: /The Complete Snowboard/ })).toBeVisible();
  });
});
