import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductPage } from '../pages/ProductPage.js';

test('add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goto();
  await loginPage.login('VirendraTest', 'Password123');

  await productPage.selectProduct('Samsung galaxy s6');
  await productPage.addToCart();

  await expect(page.locator('#cartur')).toBeVisible();
});
