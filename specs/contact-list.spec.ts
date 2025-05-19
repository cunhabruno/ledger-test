import { test, expect } from '../fixtures/base-fixture'
import { AddContactFormDetails } from '../types/types'

const addContactFormDetails: AddContactFormDetails = {
  firstName: 'John',
  lastName: 'Doe',
}
test('contact list CRUD', async ({ contactListApp }) => {
  await contactListApp.contactListHomePage.goto()

  await test.step('user should be able to register new contact', async () => {
    await contactListApp.contactListHomePage.addContact(addContactFormDetails)

    await expect(
      await contactListApp.contactListHomePage.contactListTable.getCellByHeader(
        0,
        'Name'
      )
    ).toContainText(
      `${addContactFormDetails.firstName} ${addContactFormDetails.lastName}`
    )
  })
})
