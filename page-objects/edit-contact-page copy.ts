import { Locator, Page, Response } from '@playwright/test'
import { AddContactFormDetails, ContactListTableRowData } from '../types/types'
import { waitForContactGetResponse } from '../utils/endpoint-wait'
import { AbstractFormPage } from './abstract-form-page'

export class EditContactPage extends AbstractFormPage {
  constructor(page: Page) {
    super(page, 'Edit Contact')
  }
  async editContact(editContactFormDetails: Partial<AddContactFormDetails>) {
    const editData = Object.entries(editContactFormDetails)
    if (editData.length < 1) {
      throw new Error('No contact details provided to edit')
    } else {
      for await (const [key, value] of editData) {
        await this.formInput(key).fill(value)
      }
      await Promise.all([
        this.submitButton.click(),
        waitForContactGetResponse(this.page),
      ])
    }
  }

  async waitForAddContactPage() {
    await waitForContactGetResponse(this.page)
    await this.pageBody.waitFor()
  }
}
