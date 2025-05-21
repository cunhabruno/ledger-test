import { Locator, Page } from '@playwright/test'
import { AbstractPage } from './common/abstract-page'

export class AbstractFormPage extends AbstractPage {
  formInput: (inputId: string) => Locator
  submitButton: Locator
  constructor(page: Page, pageTitleHeader: string) {
    super(page, pageTitleHeader)
    this.formInput = (inputId: string) => this.pageBody.locator(`#${inputId}`)
    this.submitButton = this.pageBody.locator('#submit')
  }
}
