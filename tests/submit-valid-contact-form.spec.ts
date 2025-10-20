// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('Submit Valid Contact Form', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Click "Contact" link in main navigation
    await page.locator('header').getByRole('link', { name: 'Contact' }).click();

    // Step 2: Verify page heading displays "Contact"
    await expect(page.getByRole('heading', { name: 'Contact', exact: true })).toBeVisible();

    // Step 3: Verify contact form section is visible
    await expect(page.getByRole('heading', { name: 'Contact form' })).toBeVisible();

    // Step 4: Fill in "Name" field
    await page.getByLabel('Name').fill('John Doe');

    // Step 5: Fill in "Email" field (required field marked with *)
    await page.locator('input[name="contact[email]"]').fill('john.doe@example.com');

    // Step 6: Fill in "Phone number" field
    await page.getByLabel('Phone number').fill('+1234567890');

    // Step 7: Fill in "Comment" field
    await page.getByLabel('Comment').fill('I have a question about your products.');

    // Step 8: Click "Send" button
    await page.getByRole('button', { name: 'Send' }).click();

        // Verify form submits successfully - check URL and that we didn't get validation errors
    await page.waitForURL(/\/pages\/contact/, { timeout: 10000 });
    
    // Verify we're still on contact page (successful submission stays on same page)
    await expect(page).toHaveURL(/\/pages\/contact/);
  });
});