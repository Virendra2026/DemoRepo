export class ProductPage {
  constructor(page) {
    this.page = page;
    this.productLink = '.hrefch'; // product links
    this.addToCartButton = 'a[onclick*="addToCart"]';
  }

  async selectProduct(productName) {
    await this.page.click(`a:has-text("${productName}")`);
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
    await this.page.on('dialog', dialog => dialog.accept());
  }
}
