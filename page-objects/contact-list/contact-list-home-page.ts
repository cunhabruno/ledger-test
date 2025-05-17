import { Locator, Page } from '@playwright/test'
import { AbstractPage } from '../common/abstract-page'

export class ContactListHomePage extends AbstractPage {
  addContactButton: Locator
  logOutButton: Locator
  constructor(page: Page) {
    super(page, 'Contact List')
    this.addContactButton = page.locator('#add-contact')
    this.logOutButton = page.locator('#logout')
  }
  async goto() {
    await this.page.goto('/contactList')
    await this.pageBody.waitFor()
  }
  async logOut() {
    await this.logOutButton.click()
    await this.page.waitForURL('/')
  }
}
