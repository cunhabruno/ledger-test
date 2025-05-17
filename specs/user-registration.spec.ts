import { test, expect } from '../fixtures/contact-list-app-fixture'
import { faker } from '@faker-js/faker'

const userDetails = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
}
test('user registration flow', async ({ contactListApp }) => {
  await contactListApp.signUpPage.goto()

  await test.step('user should be able to register', async () => {
    await contactListApp.signUpPage.signUpForm.registerUser(userDetails)
    await expect(
      contactListApp.contactListHomePage.addContactButton
    ).toBeVisible()
  })

  await test.step('user should be able to logout', async () => {
    await contactListApp.contactListHomePage.logOut()
    await expect(contactListApp.loginPage.loginForm.mainContent).toBeVisible()
  })

  await test.step('user should be able to login with the created user', async () => {
    await contactListApp.loginPage.loginForm.login({
      email: userDetails.email,
      password: userDetails.password,
    })
    await expect(
      contactListApp.contactListHomePage.addContactButton
    ).toBeVisible()
  })
})
