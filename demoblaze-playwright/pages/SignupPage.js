export class SignupPage {
  constructor(page) {
    this.page = page;
    this.signupLink = '#signin2';
    this.usernameInput = '#sign-username';
    this.passwordInput = '#sign-password';
    this.signupButton = 'button[onclick="register()"]';
  }

  async signup(username, password) {
    await this.page.click(this.signupLink);
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signupButton);
  }
}
