// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('Submit Contact Form with Missing Required Email', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Navigate to Contact page
    await page.locator('header').getByRole('link', { name: 'Contact' }).click();

    // Step 2: Fill in "Name" field
    await page.getByLabel('Name').fill('John Doe');

    // Step 3: Leave "Email" field empty (it's required)
    // Email field intentionally left empty

    // Step 4: Fill in "Phone number"
    await page.getByLabel('Phone number').fill('+1234567890');

    // Step 5: Fill in "Comment"
    await page.getByLabel('Comment').fill('Test comment');

    // Step 6: Click "Send" button
    await page.getByRole('button', { name: 'Send' }).click();

    // Verify form does not submit - check form behavior
    const emailField = page.locator('input[name="contact[email]"]');
    
    // Verify email field is marked as required via aria-required
    await expect(emailField).toHaveAttribute('aria-required', 'true');
    
    // User should remain on form (URL should still be /pages/contact)
    await expect(page).toHaveURL(/\/pages\/contact/);
  });
});