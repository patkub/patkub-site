import { test, expect } from '@playwright/test'
import { pathToFileURL } from 'url'
import path from 'path'

const indexUrl = pathToFileURL(path.resolve('src/index.html')).href

test.describe('index.html', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(indexUrl)
  })

  test('has language set', async ({ page }) => {
    await expect(page.locator('html[lang="en"]')).toHaveCount(1)
  })

  test('has title set', async ({ page }) => {
    await expect(page).toHaveTitle(/patkub/)
  })

  test('head section defines meta tags', async ({ page }) => {
    await expect(page.locator('meta[charset="utf-8"]')).toHaveCount(1)
    await expect(page.locator('meta[name="viewport"]')).toHaveCount(1)
    await expect(page.locator('meta[name="description"]')).toHaveCount(1)
    await expect(page.locator('meta[name="keywords"]')).toHaveCount(1)

    // Open Graph Tags
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1)
    await expect(page.locator('meta[property="og:url"]')).toHaveCount(1)
  })

  test('main section contains name', async ({ page }) => {
    await expect(page.locator('main')).toContainText('Patrick Kubiak')
  })

  test('footer section contains name', async ({ page }) => {
    await expect(page.locator('footer')).toContainText('Patrick Kubiak')
  })
})
