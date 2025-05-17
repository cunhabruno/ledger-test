import { Locator, Page } from '@playwright/test'
import { UserDetails } from '../types/types'
import { AbstractAuthenticationForm } from './abstract-authentication-form'

export class SignUpForm extends AbstractAuthenticationForm {
  firstNameInput: Locator
  lastNameInput: Locator
  constructor(page: Page) {
    super(page)
    this.firstNameInput = this.mainContent.locator('#firstName')
    this.lastNameInput = this.mainContent.locator('#lastName')
  }
  async registerUser(userDetails: UserDetails) {
    await this.firstNameInput.fill(userDetails.firstName)
    await this.lastNameInput.fill(userDetails.lastName)
    await this.emailInput.fill(userDetails.email)
    await this.passwordInput.fill(userDetails.password)
    await this.submitButton.click()
  }
}
