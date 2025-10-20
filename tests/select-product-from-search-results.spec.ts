// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('Select Product from Search Results', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Open search dialog
    await page.getByRole('button', { name: 'Search' }).click();

    // Step 2: Type "snowboard" in search field
    await page.getByRole('combobox', { name: 'Search' }).pressSequentially('snowboard');

    // Step 3: Wait for results to populate
    await expect(page.getByRole('status')).toContainText('results');

    // Step 4: Click on a product from results (e.g., "The Complete Snowboard") - scope to search dialog
    await page.getByRole('dialog', { name: 'Search' }).getByRole('link', { name: /The Complete Snowboard/ }).first().click();

    // Step 5: Verify user is navigated to selected product page
    await expect(page).toHaveURL(/.*\/products\/the-complete-snowboard.*/);

    // Step 6: Verify search dialog closes
    await expect(page.getByRole('dialog', { name: 'Search' })).not.toBeVisible();

    // Step 7: Verify product detail page loads
    await expect(page.getByRole('heading', { name: /The Complete Snowboard/ })).toBeVisible();
  });
});