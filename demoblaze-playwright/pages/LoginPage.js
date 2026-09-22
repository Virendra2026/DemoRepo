export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = '#login2';
    this.usernameInput = '#loginusername';
    this.passwordInput = '#loginpassword';
    this.loginButton = 'button[onclick="logIn()"]';
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async login(username, password) {
    await this.page.click(this.loginLink);
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
