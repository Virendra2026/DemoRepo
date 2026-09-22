import { test, expect } from '@playwright/test';

test('handle all alerts on practice site', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // --- Prompt Alert ---
  page.once('dialog', async dialog => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    console.log(`Prompt Alert says: ${dialog.message()}`);
    await dialog.accept('Playwright rocks!'); // enters text + clicks OK
     await page.waitForTimeout(9000);

  });
  await page.locator("button[onclick='myFunctionPrompt()']").click();
   await page.waitForTimeout(7000);


 
  // Optional: verify page still loaded
  await expect(page).toHaveTitle(/Automation/);
});
