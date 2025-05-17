import { Page } from '@playwright/test'
import { SignUpPage } from './authentication/sign-up-page'

export class ContactListAppPage {
  page: Page
  signUpPage: SignUpPage
  constructor(page: Page) {
    this.page = page
    this.signUpPage = new SignUpPage(page)
  }
}
