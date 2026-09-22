// checkbox.spec.js
import { test, expect } from '@playwright/test';

test('handle multiple checkboxes', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  /*// Navigate to the practice site
  await page.goto('https://testautomationpractice.blogspot.com/');

  // ✅ Select multiple checkboxes by label or value
  await page.check('input[type="checkbox"][value="Sunday"]');
  await page.check('input[type="checkbox"][value="Monday"]');
  await page.check('input[type="checkbox"][value="Tuesday"]');

  // ✅ Verify they are checked
  await expect(page.locator('input[type="checkbox"][value="Sunday"]')).toBeChecked();
  await expect(page.locator('input[type="checkbox"][value="Monday"]')).toBeChecked();
  await expect(page.locator('input[type="checkbox"][value="Tuesday"]')).toBeChecked();

  // ✅ Uncheck one checkbox
  await page.uncheck('input[type="checkbox"][value="Tuesday"]');
  await expect(page.locator('input[type="checkbox"][value="Tuesday"]')).not.toBeChecked();*/

  // ✅ Select all checkboxes at once
  const allCheckboxes = page.locator('input[type="checkbox"]');
  const count = await allCheckboxes.count();

  for (let i = 0; i < count; i++) {
    await allCheckboxes.nth(i).check();
    await page.waitForTimeout(3000); // waits for 3 seconds

  }

  // Verify all are checked
  for (let i = 0; i < count; i++) {
    await expect(allCheckboxes.nth(i)).toBeChecked();
  }
});
