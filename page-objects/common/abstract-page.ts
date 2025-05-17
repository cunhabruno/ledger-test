import { Page } from '@playwright/test'

export class AbstractPage {
  page: Page
  constructor(page: Page) {
    this.page = page
  }
}
