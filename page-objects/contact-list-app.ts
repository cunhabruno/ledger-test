import { Page } from '@playwright/test'
import { SignUpPage } from './authentication/sign-up-page'
import { LoginPage } from './authentication/login-page'
import { ContactListMainPage } from './contact-list/contact-list-main-page'

export class ContactListApp {
  page: Page
  signUpPage: SignUpPage
  loginPage: LoginPage
  contactListMainPage: ContactListMainPage
  constructor(page: Page) {
    this.page = page
    this.signUpPage = new SignUpPage(page)
    this.loginPage = new LoginPage(page)
    this.contactListMainPage = new ContactListMainPage(page)
  }
}
