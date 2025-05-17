import { Page } from '@playwright/test'
import { AbstractPage } from '../common/abstract-page'
import { SignUpForm } from '../../components/sign-up-form'

export class SignUpPage extends AbstractPage {
  signUpForm: SignUpForm
  constructor(page: Page) {
    super(page, 'Add User')
    this.signUpForm = new SignUpForm(page)
  }
  async goto() {
    await this.page.goto('/addUser')
    await this.pageBody.waitFor()
  }
}
