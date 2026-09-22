// example.spec.js
import { test, expect } from '@playwright/test';

test('viru: Google', async ({ page }) => {
  // Navigate to Playwright website
  await page.goto('https://www.google.com/');

  // Expect the page title to contain "Playwright"
  await expect(page).toHaveTitle(/Google/);
});
