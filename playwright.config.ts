import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e-tests",
  reporter: [["html"]],
  outputDir: "e2e-test-results/",
  timeout: 30000, // 30 seconds per test
  expect: {
    timeout: 10000, // 10 seconds for expect assertions
  },

  use: {
    trace: "on-first-retry",
    locale: "nb",
    baseURL: "http://localhost:3000",
    headless: true,
    launchOptions: {
      slowMo: 3000
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], locale: "nb" },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], locale: "nb" },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], locale: "nb" },
    },

    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"], locale: "nb" },
    },

    /* Test against branded browsers. */
    {
      name: "Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge", locale: "nb" },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // 2 minutes for CI
  },
});
