import { Locator, Page } from '@playwright/test'
import { AbstractComponent } from './abstract-component'

export class AbstractAuthenticationForm extends AbstractComponent {
  emailInput: Locator
  passwordInput: Locator
  submitButton: Locator
  constructor(page: Page) {
    super(page)
    this.emailInput = this.mainContent.locator('#email')
    this.passwordInput = this.mainContent.locator('#password')
    this.submitButton = this.mainContent.locator('#submit')
  }
}
