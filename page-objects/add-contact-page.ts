import { Locator, Page, Response } from '@playwright/test'
import { AddContactFormDetails, ContactListTableRowData } from '../types/types'
import { waitForContactGetResponse } from '../utils/endpoint-wait'
import { AbstractFormPage } from './abstract-form-page'

export class AddContactPage extends AbstractFormPage {
  constructor(page: Page) {
    super(page, 'Add Contact')
  }
  async goto() {
    await this.page.goto('/addContact')
    await this.waitForAddContactPage()
  }
  async addContact(addContactFormDetails: AddContactFormDetails) {
    await this.formInput('firstName').fill(addContactFormDetails.firstName)
    await this.formInput('lastName').fill(addContactFormDetails.lastName)

    await Promise.all([
      this.submitButton.click(),
      waitForContactGetResponse(this.page),
    ])
  }

  async waitForAddContactPage() {
    await this.page.waitForURL('/addContact')
    await this.pageBody.waitFor()
  }
}
