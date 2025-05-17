import { Locator, Page } from '@playwright/test'
import { AbstractPage } from '../common/abstract-page'

export class SignUpPage extends AbstractPage {
  pageTitle: Locator
  constructor(page: Page) {
    super(page)
    this.pageTitle = page.locator('h1 >> text=Add User')
  }
  async goto() {
    await this.page.goto('/addUser')
    await this.pageTitle.waitFor()
  }
}
