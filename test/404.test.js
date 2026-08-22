import { test, expect } from '@playwright/test'
import { pathToFileURL } from 'url'
import path from 'path'

const notFoundUrl = pathToFileURL(path.resolve('src/404.html')).href

test.describe('404.html', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(notFoundUrl)
  })

  test('has language set', async ({ page }) => {
    await expect(page.locator('html[lang="en"]')).toHaveCount(1)
  })

  test('has title set', async ({ page }) => {
    await expect(page).toHaveTitle('patkub - 404 - Not Found')
  })

  test('head section defines meta tags', async ({ page }) => {
    await expect(page.locator('meta[charset="utf-8"]')).toHaveCount(1)
    await expect(page.locator('meta[name="viewport"]')).toHaveCount(1)
    await expect(page.locator('meta[name="description"]')).toHaveCount(1)
    await expect(page.locator('meta[name="keywords"]')).toHaveCount(1)
  })

  test('main section contains link to home', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('main a[href="/"]')).toHaveCount(1)
  })
})
