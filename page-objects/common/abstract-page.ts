import { Locator, Page } from '@playwright/test'

export class AbstractPage {
  page: Page
  pageBody: Locator
  constructor(page: Page, pageTitleHeader: string) {
    this.page = page
    this.pageBody = page
      .locator('body')
      .filter({ has: page.locator(`h1 >> text=${pageTitleHeader}`) })
  }
}
