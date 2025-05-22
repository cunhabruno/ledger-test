import { test, expect } from '../fixtures/base-fixture'
import { userDetails } from '../mock/fake-data'

test('user registration flow', async ({ contactListApp }) => {
  await contactListApp.page.context().clearCookies()
  await contactListApp.signUpPage.goto()

  await test.step('user should be able to register', async () => {
    await contactListApp.signUpPage.signUpForm.registerUser(userDetails)
    await expect(
      contactListApp.contactListMainPage.addContactButton
    ).toBeVisible()
  })

  await test.step('user should be able to logout', async () => {
    await contactListApp.contactListMainPage.logOut()
    await expect(contactListApp.loginPage.loginForm.mainContent).toBeVisible()
  })

  await test.step('user should be able to login with the created user', async () => {
    await contactListApp.loginPage.loginForm.login({
      email: userDetails.email,
      password: userDetails.password,
    })
    await expect(
      contactListApp.contactListMainPage.addContactButton
    ).toBeVisible()
  })
})
