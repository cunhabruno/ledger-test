import { Page } from '@playwright/test'
import { SignUpPage } from './authentication/sign-up-page'
import { LoginPage } from './authentication/login-page'
import { ContactListHomePage } from './contact-list/contact-list-home-page'

export class ContactListAppPage {
  page: Page
  signUpPage: SignUpPage
  loginPage: LoginPage
  contactListHomePage: ContactListHomePage
  constructor(page: Page) {
    this.page = page
    this.signUpPage = new SignUpPage(page)
    this.loginPage = new LoginPage(page)
    this.contactListHomePage = new ContactListHomePage(page)
  }
}
