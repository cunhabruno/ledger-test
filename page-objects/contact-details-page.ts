import { Locator, Page, Response } from '@playwright/test'
import { AbstractPage } from './common/abstract-page'
import { AddContactFormDetails, ContactListTableRowData } from '../types/types'
import {
  waitForContactDetailsGetResponse,
  waitForContactGetResponse,
} from '../utils/endpoint-wait'
import { EditContactPage } from './edit-contact-page copy'

export class ContactDetailsPage extends AbstractPage {
  editContactButton: Locator
  returnButton: Locator
  contactProperty: (spanId: string) => Locator
  constructor(page: Page) {
    super(page, 'Contact Details')
    this.editContactButton = this.pageBody.locator('#edit-contact')
    this.returnButton = this.pageBody.locator('#return')
    this.contactProperty = (spanId: string) =>
      this.pageBody.locator(`#${spanId}`)
  }
  async editContact(addContactFormDetails: Partial<AddContactFormDetails>) {
    await this.editContactButton.click()
    await this.page.waitForURL('/editContact')
    await waitForContactDetailsGetResponse(this.page)
    const editContactPage = new EditContactPage(this.page)
    await editContactPage.editContact(addContactFormDetails)
  }

  async returnToContactList() {
    await Promise.all([
      this.returnButton.click(),
      waitForContactGetResponse(this.page),
    ])
    await this.page.waitForURL('/contactList')
  }
  async waitForAddContactPage() {
    await waitForContactGetResponse(this.page)
    await this.pageBody.waitFor()
  }
}
