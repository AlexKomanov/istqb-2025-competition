// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Accessibility Features', () => {
  test('Skip to Content Link', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Wait for homepage to load
    await expect(page.getByRole('heading', { name: 'Generated test data' })).toBeVisible();

    // Step 1: Press Tab key immediately to reveal skip link
    await page.keyboard.press('Tab');

    // Step 2: Verify "Skip to content" link becomes visible
    const skipLink = page.getByRole('link', { name: /Skip to content/i });
    await expect(skipLink).toBeVisible();

    // Step 3: Press Enter to activate link
    await page.keyboard.press('Enter');

    // Step 4: Verify focus moves to main content area
    // The main content should be focused (identified by #MainContent)
    const mainContent = page.locator('#MainContent');
    await expect(mainContent).toBeFocused();

    // Step 5: Verify skip link improves keyboard navigation efficiency
    // User has bypassed navigation and header elements
    await expect(mainContent).toBeVisible();
  });
});