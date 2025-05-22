import { defineConfig, devices } from '@playwright/test'
import { STORAGE_STATE_PATH } from './utils/constants'

export default defineConfig({
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  // testMatch: 'specs/**/contact-list.spec.ts',
  use: {
    baseURL: 'https://thinking-tester-contact-list.herokuapp.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    serviceWorkers: 'block',
  },

  projects: [
    { name: 'login-setup', testMatch: 'login.setup.ts' },
    {
      name: 'teardown',
      testMatch: 'teardown.ts',
      use: {
        storageState: STORAGE_STATE_PATH,
      },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: STORAGE_STATE_PATH },
      dependencies: ['login-setup'],
      teardown: 'teardown',
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    {
      name: 'api-tests',
      testMatch: 'specs/api/*.spec.ts',
      use: {
        baseURL: 'https://thinking-tester-contact-list.herokuapp.com',
      },
    },
  ],
})
