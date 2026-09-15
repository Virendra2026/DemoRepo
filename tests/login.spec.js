import { test, expect } from '@playwright/test';
import { users } from '../utils/users.js';
import { LoginPage } from '../pages/LoginPage.js';

test('standard user login succeeds', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await expect(page).toHaveURL(/inventory.html/);
});

test('locked out user fails login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.locked.username, users.locked.password);
  await expect(loginPage.getErrorMessage()).toContainText('locked out');
});
