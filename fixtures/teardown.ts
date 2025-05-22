import { expect, test as teardown } from './base-fixture'

teardown('delete created user', async ({ contactListApp }) => {
  const token = (await contactListApp.page.context().storageState())?.cookies[0]
    .value
  if (!token) {
    console.error('No token found in storage state')
    return
  }
  contactListApp.contactListApi.setDefaultHeaders(token)
  const deletedUserResponse =
    await contactListApp.contactListApi.deleteCurrentUser()
  expect(deletedUserResponse.status()).toBe(200)
})
