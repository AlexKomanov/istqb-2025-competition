// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Store Access & Authentication', () => {
  test('Access Store with Invalid Password', async ({ page }) => {
    // Step 1: Navigate to the store URL
    await page.goto('https://istqb15-1-qa4.myshopify.com/');

    // Step 2: In the "Enter store password" field, type "invalid123"
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('invalid123');

    // Step 3: Click the "Enter" button
    await page.getByRole('button', { name: 'Enter' }).click();

    // Verify error message is displayed indicating invalid password
    await expect(page.getByText('Password incorrect, please try again.')).toBeVisible();

    // Verify user remains on the password page
    await expect(page).toHaveURL(/.*\/password/);
  });
});
