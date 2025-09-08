import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true, // <-- run tests/projects in parallel
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }]
  ],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', headless: true },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox', headless: true },
    },
    {
      name: 'Mobile (iPhone 13)',
      use: { ...devices['iPhone 13'], headless: true },
    },
  ],
  use: {
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
});
