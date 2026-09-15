import { test, expect } from '@playwright/test';
import { users } from '../utils/users.js';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';

test('add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addProduct('sauce-labs-backpack');
  await inventoryPage.goToCart();

  await expect(cartPage.getCartItems()).toHaveCount(1);
});
