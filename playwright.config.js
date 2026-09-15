import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium',
    headless: true,
  },
  reporter: [['list'], ['html']],
});
