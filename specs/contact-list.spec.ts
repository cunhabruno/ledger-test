import { test, expect } from '../fixtures/base-fixture'
import { AddContactFormDetails } from '../types/types'
import { faker } from '@faker-js/faker'
const addContactFormDetails: AddContactFormDetails = {
  firstName: faker.person.firstName().substring(0, 20),
  lastName: Date.now().toString(),
}

let nameColumn =
  addContactFormDetails.firstName + ' ' + addContactFormDetails.lastName
test('contact list CRUD', async ({ contactListApp }) => {
  await contactListApp.contactListMainPage.goto()

  await test.step('user should be able to register new contact', async () => {
    await contactListApp.contactListMainPage.addContact(addContactFormDetails)

    await expect(
      await contactListApp.contactListMainPage.contactListTable.getCellByHeader(
        0,
        'Name'
      )
    ).toContainText(nameColumn)
  })

  await test.step('user should be able to edit a contact', async () => {
    await contactListApp.contactListMainPage.editContact(nameColumn, {
      firstName: 'Edited',
      lastName: 'Contact',
    })
    await expect(
      contactListApp.contactListMainPage.contactDetailsPage.contactProperty(
        'firstName'
      )
    ).toHaveText('Edited')
    await expect(
      contactListApp.contactListMainPage.contactDetailsPage.contactProperty(
        'lastName'
      )
    ).toHaveText('Contact')
    await contactListApp.contactListMainPage.contactDetailsPage.returnToContactList()
    await expect(
      await contactListApp.contactListMainPage.contactListTable.getCellByHeader(
        0,
        'Name'
      )
    ).toContainText('Edited Contact')
  })
})
