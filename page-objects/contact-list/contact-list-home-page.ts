import { Locator, Page } from '@playwright/test'
import { AbstractPage } from '../common/abstract-page'
import { AddContactPage } from '../add-contact-page'
import { AddContactFormDetails } from '../../types/types'
import { ContactListTable } from '../../components/contact-list-table'

export class ContactListHomePage extends AbstractPage {
  addContactButton: Locator
  logOutButton: Locator
  addContactPage: AddContactPage
  contactListTable: ContactListTable
  constructor(page: Page) {
    super(page, 'Contact List')
    this.addContactButton = page.locator('#add-contact')
    this.logOutButton = page.locator('#logout')
    this.addContactPage = new AddContactPage(page)
    this.contactListTable = new ContactListTable(this.pageBody)
  }
  async goto() {
    await this.page.goto('/contactList')
    await this.pageBody.waitFor()
  }
  async logOut() {
    await this.logOutButton.click()
    await this.page.waitForURL('/')
  }
  async addContact(addContactFormDetails: AddContactFormDetails) {
    await this.addContactButton.click()
    await this.addContactPage.addContact(addContactFormDetails)
    await this.contactListTable.bodyRows.waitFor({ timeout: 5000 })
  }
}
