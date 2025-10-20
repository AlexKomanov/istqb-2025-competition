import { type Config, type Scenario } from 'artillery';
import { type Page, expect } from '@playwright/test'; // Import Page and expect

/**
 * 1. Configure the Test
 * We set the base URL and Playwright engine options here.
 */
export const config: Config = {
  // You can set the base URL here
  target: 'https://istqb15-1-qa4.myshopify.com',
  engines: {
    playwright: {
    launchOptions: {
        headless: true
      },
      // Your trace config
      trace: {
        enabled: true,
        maxConcurrentRecordings: 3
      }
    }
  },
  
  // --- IMPORTANT ---
  // Without a 'phases' block, this test will only run ONCE.
  // Add this block to run a real load test.
  phases: [
    {
      duration: 60,       // Test duration of 60 seconds
      rampTo: 10,         // Ramp from 1 up to 10 concurrent users
      name: "Ramp up to many users"     // Start 10 new virtual users every second
    }
  ]
};

/**
 * 2. Define the Scenarios
 * This tells Artillery to use the 'playwright' engine
 * and run the 'visitProductPage' function for each virtual user.
 */
export const scenarios: Scenario[] = [{
  engine: 'playwright',
  testFunction: visitProductPage
}];

/**
 * 3. Define the Playwright Test Function
 * This is the actual browser automation logic.
 */
async function visitProductPage(page: Page) {
  // 1. Go to the specific product page
  await page.goto(
    "https://istqb15-1-qa4.myshopify.com/products/the-3p-fulfilled-snowboard"
  );

  await page.fill('[id="password"]', '1');
  await page.click('button[type="submit"]');

  await page.waitForSelector('.header__active-menu-item');

  await page.goto(
    "https://istqb15-1-qa4.myshopify.com/products/the-3p-fulfilled-snowboard"
  );

  // 2. Click the "Buy it now" button
  await page.waitForSelector('.product-form__buttons');
}