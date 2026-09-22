import { test, expect } from '@playwright/test';

test('handle all alerts on practice site', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // --- Simple Alert ---
  page.once('dialog', async dialog => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("alert box!");
    console.log(`Simple Alert says: ${dialog.message()}`);
    await dialog.accept(); // clicks OK
  });
  await page.click('//button[@id="alertBtn"]');
  //await page.locator("button[onclick='myFunctionAlert()']").click();
await page.waitForTimeout(7000);
  // --- Confirm Alert ---
  page.once('dialog', async dialog => {
    console.log(`Confirm Alert says: ${dialog.message()}`);
    await dialog.dismiss(); // clicks Cancel (use accept() for OK)
  });
  

  // Optional: verify page still loaded
  await expect(page).toHaveTitle(/Automation/);
});
