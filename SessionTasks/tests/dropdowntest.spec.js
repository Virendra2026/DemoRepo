// loop-dropdown.spec.js
import { test, expect } from '@playwright/test';

test('select country using loop', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Target dropdown
  const dropdown = page.locator('#country');

  // Get all options inside the dropdown
  const options = await dropdown.locator('option').all();

  // Desired country
  const targetCountry = 'Australia';

  // Loop through options
  for (let i = 0; i < options.length; i++) {
    const optionText = await options[i].innerText();

    if (optionText.trim() === targetCountry) {
        await page.waitForTimeout(1000); // waits for 1 seconds
      const optionValue = await options[i].getAttribute('value');
      await page.selectOption('#country', { value: optionValue });
      await page.waitForTimeout(8000);
      break; // stop once found
    }
  }

  // ✅ Verify selection
  const selectedValue = await page.$eval('#country', el => el.value);
  expect(selectedValue).toBe('Australia'); // matches <option value="india">India</option>
});
