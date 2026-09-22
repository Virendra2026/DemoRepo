import { test, expect } from '@playwright/test';

test('Handle popup/new tab window', async ({ page, context }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Wait for new tab (popup window)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // listens for new tab/window
    page.click('//button[contains(text(),"Popup Windows")]') // triggers new window
  ]);

  // Wait until the new page is loaded
  await newPage.waitForLoadState();

  // Interact with the popup window
  console.log(await newPage.title());
  await expect(newPage).toHaveTitle(/Selenium/);

  // Example: search inside the popup
  await page.locator('//span[text()="Search"]').click();
  //await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Playwright automation');
  //await newPage.locator('input[name="q"]').fill('Playwright automation');
  await page.waitForTimeout(7000);
  //await newPage.keyboard.press('Enter');
});
