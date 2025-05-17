import { Page } from '@playwright/test'
import { AbstractPage } from '../common/abstract-page'
import { LoginForm } from '../../components/login-form'

export class LoginPage extends AbstractPage {
  loginForm: LoginForm
  constructor(page: Page) {
    super(page, 'Contact List App')
    this.loginForm = new LoginForm(page)
  }
  async goto() {
    await this.page.goto('/')
    await this.pageBody.waitFor()
  }
}
