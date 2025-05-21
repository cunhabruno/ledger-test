import { Page } from '@playwright/test'

export const waitForContactGetResponse = async (page: Page) => {
  const response = await page.waitForResponse(
    (response) =>
      response.url().includes('/contacts') &&
      response.status() === 200 &&
      response.request().method() === 'GET'
  )
  return response
}

export const waitForContactDetailsGetResponse = async (page: Page) => {
  const response = await page.waitForResponse((response) => {
    if (response.url().match('.*/contacts/.*$')) {
      return response.status() === 200 && response.request().method() === 'GET'
    } else {
      return false
    }
  })
  return response
}
