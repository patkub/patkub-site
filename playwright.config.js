import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test',
  testMatch: '**/*.test.js',
  reporter: 'list',
})