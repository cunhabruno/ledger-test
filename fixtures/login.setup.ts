import { faker } from '@faker-js/faker'
import { test as setup } from './base-fixture'
import { STORAGE_STATE_PATH } from '../utils/constants'

const userDetails = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
}

setup('authenticate', async ({ contactListApp }) => {
  await contactListApp.signUpPage.goto()
  await contactListApp.signUpPage.signUpForm.registerUser(userDetails)
  await contactListApp.page.context().storageState({ path: STORAGE_STATE_PATH })
})
