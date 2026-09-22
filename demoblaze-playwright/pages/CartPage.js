export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = '#cartur';
    this.placeOrderButton = 'button[data-target="#orderModal"]';
    this.nameInput = '#name';
    this.countryInput = '#country';
    this.cityInput = '#city';
    this.cardInput = '#card';
    this.monthInput = '#month';
    this.yearInput = '#year';
    this.purchaseButton = 'button[onclick="purchaseOrder()"]';
    this.confirmationBox = '.sweet-alert';
  }

  async gotoCart() {
    await this.page.click(this.cartLink);
  }

  async placeOrder(details) {
    await this.page.click(this.placeOrderButton);
    await this.page.fill(this.nameInput, details.name);
    await this.page.fill(this.countryInput, details.country);
    await this.page.fill(this.cityInput, details.city);
    await this.page.fill(this.cardInput, details.card);
    await this.page.fill(this.monthInput, details.month);
    await this.page.fill(this.yearInput, details.year);
    await this.page.click(this.purchaseButton);
  }

  async getConfirmationText() {
    return this.page.locator(this.confirmationBox);
  }
}
