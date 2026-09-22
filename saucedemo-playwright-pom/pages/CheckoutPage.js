export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = 'input[data-test="continue"]';
    this.finishButton = 'button[data-test="finish"]';
    this.confirmationHeader = '.complete-header';
  }

  async fillDetails(first, last, postal) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, postal);
    await this.page.click(this.continueButton);
  }

  async finishOrder() {
    await this.page.click(this.finishButton);
  }

  async getConfirmationText() {
    return this.page.locator(this.confirmationHeader);
  }
}
