import { test, expect } from '../fixtures/contact-list-app-fixture'

test('should be able to register new user', async ({ contactListApp }) => {
  await contactListApp.signUpPage.goto()
  await expect(contactListApp.signUpPage.page).toHaveTitle('Add User')
})
