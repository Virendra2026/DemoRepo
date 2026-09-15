export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartLink = '.shopping_cart_link';
  }

  async addProduct(productName) {
    await this.page.click(`button[data-test="add-to-cart-${productName}"]`);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}
