// spec: test-plans/shopify-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Homepage Navigation & Display', () => {
  test('Header Navigation Menu', async ({ page }) => {
    // Navigate to store and authenticate
    await page.goto('https://istqb15-1-qa4.myshopify.com/');
    await page.getByRole('textbox', { name: 'Enter store password' }).fill('1');
    await page.getByRole('button', { name: 'Enter' }).click();

    // Step 1: Verify all navigation links are present
    await expect(page.locator('header').getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: 'Catalog' })).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: 'Contact' })).toBeVisible();

    // Step 2: Click "Home" link
    await page.locator('header').getByRole('link', { name: 'Home' }).click();
    
    // Step 3: Verify page navigation to homepage
    await expect(page).toHaveURL('https://istqb15-1-qa4.myshopify.com/');
    await expect(page.getByRole('heading', { name: 'Generated test data' })).toBeVisible();

    // Step 4: Click "Catalog" link
    await page.locator('header').getByRole('link', { name: 'Catalog' }).click();
    
    // Step 5: Verify page navigation to catalog
    await expect(page).toHaveURL(/.*\/collections\/.*/);
    await expect(page.getByRole('heading', { name: 'Collection: Products' })).toBeVisible();

    // Step 6: Click "Contact" link
    await page.locator('header').getByRole('link', { name: 'Contact' }).click();
    
    // Step 7: Verify page navigation to contact
    await expect(page).toHaveURL(/.*\/pages\/contact/);
    await expect(page.getByRole('heading', { name: 'Contact', exact: true })).toBeVisible();

    // Step 8: Verify store logo/name is clickable and returns to homepage
    await page.goto('https://istqb15-1-qa4.myshopify.com/pages/contact');
    await page.getByRole('link', { name: 'istqb15-1-qa4' }).first().click();
    await expect(page).toHaveURL('https://istqb15-1-qa4.myshopify.com/');
  });
});