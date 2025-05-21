import { Locator, Page } from '@playwright/test'
import { AbstractPage } from '../common/abstract-page'
import { AddContactPage } from '../add-contact-page'
import { AddContactFormDetails } from '../../types/types'
import { ContactListTable } from '../../components/contact-list-table'
import { ContactDetailsPage } from '../contact-details-page'
import { waitForContactDetailsGetResponse } from '../../utils/endpoint-wait'

export class ContactListMainPage extends AbstractPage {
  addContactButton: Locator
  logOutButton: Locator
  addContactPage: AddContactPage
  contactDetailsPage: ContactDetailsPage
  contactListTable: ContactListTable
  constructor(page: Page) {
    super(page, 'Contact List')
    this.addContactButton = page.locator('#add-contact')
    this.logOutButton = page.locator('#logout')
    this.addContactPage = new AddContactPage(page)
    this.contactDetailsPage = new ContactDetailsPage(page)
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
    await Promise.all([
      this.addContactButton.click(),
      this.addContactPage.waitForAddContactPage(),
    ])
    await this.addContactPage.addContact(addContactFormDetails)
  }

  async editContact(
    contactToEdit: string,
    addContactFormDetails: Partial<AddContactFormDetails>
  ) {
    Promise.all([
      this.contactListTable.rowByTdText(contactToEdit).click(),
      waitForContactDetailsGetResponse(this.page),
    ])
    await this.contactDetailsPage.editContact(addContactFormDetails)
  }
}
