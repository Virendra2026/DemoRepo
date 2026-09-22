import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage.js';
import { LoginPage } from '../pages/LoginPage.js';

test('user can signup and login', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const loginPage = new LoginPage(page);

  await signupPage.signup('VirendraTest', 'Password123');
  await loginPage.login('VirendraTest', 'Password123');

  await expect(page.locator('#nameofuser')).toContainText('VirendraTest');
});
