export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = 'button[data-test="checkout"]';
  }

  async getCartItems() {
    return this.page.locator('.cart_item');
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}
