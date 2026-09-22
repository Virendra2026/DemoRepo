import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CartPage } from '../pages/CartPage.js';

test('place order successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('VirendraTest', 'Password123');

  await productPage.selectProduct('Samsung galaxy s6');
  await productPage.addToCart();

  await cartPage.gotoCart();
  await cartPage.placeOrder({
    name: 'Virendra Tester',
    country: 'India',
    city: 'Phulpur',
    card: '4111111111111111',
    month: '09',
    year: '2026'
  });

  await expect(cartPage.getConfirmationText()).toContainText('Thank you for your purchase!');
});
