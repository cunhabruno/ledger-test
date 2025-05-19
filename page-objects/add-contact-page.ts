import { Locator, Page } from '@playwright/test'
import { AbstractPage } from './common/abstract-page'
import { AddContactFormDetails } from '../types/types'

export class AddContactPage extends AbstractPage {
  formInput: (inputId: string) => Locator
  submitButton: Locator
  constructor(page: Page) {
    super(page, 'Add Contact')
    this.formInput = (inputId: string) => this.pageBody.locator(`#${inputId}`)
    this.submitButton = this.pageBody.locator('#submit')
  }
  async goto() {
    await this.page.goto('/addContact')
    await this.pageBody.waitFor()
  }
  async addContact(addContactFormDetails: AddContactFormDetails) {
    await this.formInput('firstName').fill(addContactFormDetails.firstName)
    await this.formInput('lastName').fill(addContactFormDetails.lastName)
    await this.submitButton.click()
    await this.page.waitForURL('**/contactList')
  }
}
