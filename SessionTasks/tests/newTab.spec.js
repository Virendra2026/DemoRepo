import { test, expect } from '@playwright/test';

test('Handle new tab example', async ({ page, context }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Wait for new page (tab) to open
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // listens for new tab
    page.click('//button[contains(text(),"New Tab")]') // action that triggers new tab
  ]);

  // Wait until the new page is loaded
  await newPage.waitForLoadState();

  // Perform actions on the new tab
  console.log(await newPage.title());
  await expect(newPage).toHaveTitle(/SDET-QA Blog/); // example assertion

  
});
