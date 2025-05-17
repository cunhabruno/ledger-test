import { Page } from '@playwright/test'
import { UserDetails } from '../types/types'
import { AbstractAuthenticationForm } from './abstract-authentication-form'

export class LoginForm extends AbstractAuthenticationForm {
  constructor(page: Page) {
    super(page)
  }
  async login(userDetails: Pick<UserDetails, 'email' | 'password'>) {
    await this.emailInput.fill(userDetails.email)
    await this.passwordInput.fill(userDetails.password)
    await this.submitButton.click()
  }
}
