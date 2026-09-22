// utils/helpers.js

export class Helpers {
  // Generate a random username for signup
  static generateUsername(prefix = 'User') {
    const randomNum = Math.floor(Math.random() * 10000);
    return `${prefix}${randomNum}`;
  }

  // Generate a random password
  static generatePassword(length = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  // Pause execution for given milliseconds
  static async wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Log messages with timestamp
  static log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
}
