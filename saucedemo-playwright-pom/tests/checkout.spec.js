import { test, expect } from '@playwrighttest';
import { users } from '..utilsusers.js';
import { LoginPage } from '..pagesLoginPage.js';
import { InventoryPage } from '..pagesInventoryPage.js';
import { CartPage } from '..pagesCartPage.js';
import { CheckoutPage } from '..pagesCheckoutPage.js';

test('checkout completes successfully', async ({ page }) = {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.addProduct('sauce-labs-bike-light');
  await inventoryPage.goToCart();

  await cartPage.checkout();

  await checkoutPage.fillDetails('Virendra', 'Tester', '12345');
  await checkoutPage.finishOrder();

  await expect(checkoutPage.getConfirmationText()).toHaveText('THANK YOU FOR YOUR ORDER');
});
