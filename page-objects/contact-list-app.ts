import { Page } from '@playwright/test'
import { SignUpPage } from './authentication/sign-up-page'
import { LoginPage } from './authentication/login-page'
import { ContactListMainPage } from './contact-list/contact-list-main-page'
import { ContactListApi } from '../api/ContactListApi'

export class ContactListApp {
  page: Page
  signUpPage: SignUpPage
  loginPage: LoginPage
  contactListMainPage: ContactListMainPage
  contactListApi: ContactListApi
  constructor(page: Page) {
    this.page = page
    this.signUpPage = new SignUpPage(page)
    this.loginPage = new LoginPage(page)
    this.contactListMainPage = new ContactListMainPage(page)
    this.contactListApi = new ContactListApi(page.context().request)
  }
}
