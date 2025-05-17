import { Locator, Page } from '@playwright/test'

export class AbstractComponent {
  mainContent: Locator
  constructor(page: Page) {
    this.mainContent = page.locator('.main-content')
  }
}
