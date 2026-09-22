import { test, expect } from '@playwright/test';

test('handle all alerts on practice site', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // --- Confirm Alert ---
  page.once('dialog', async dialog => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("button");
    console.log(`Confirm Alert says: ${dialog.message()}`);
     await page.waitForTimeout(7000);
    await dialog.dismiss(); // clicks Cancel (use accept() for OK)
  });
  await page.locator("button[onclick='myFunctionConfirm()']").click();
  await page.waitForTimeout(7000);

  // Optional: verify page still loaded
  await expect(page).toHaveTitle(/Automation/);
});
