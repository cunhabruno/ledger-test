import { test, expect } from '../../fixtures/api-fixture'
import { AddUserResponse, ContactListTableRowData } from '../../types/types'
import { newContactFormDetails, userDetails } from '../../mock/fake-data'

let addedContact: ContactListTableRowData
test('should create new user', async ({ contactListApi }) => {
  await test.step('user should be able to register', async () => {
    const newUserResponse = await contactListApi.registerUser(userDetails)
    expect(newUserResponse.status()).toBe(201)
    const newUser = (await newUserResponse.json()) as AddUserResponse

    expect(newUser.user).toMatchObject({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
    })
    expect(newUser.user._id).toBeDefined()
    expect(newUser.user.__v).toBeDefined()
    expect(newUser.token).toBeDefined()

    contactListApi.setDefaultHeaders(newUser.token)
  })

  await test.step('registered should be able to list contacts', async () => {
    const getContactsResponse = await contactListApi.listContacts()
    expect(getContactsResponse.status()).toBe(200)
  })

  await test.step('registered user should be able to login', async () => {
    const loginResponse = await contactListApi.loginUser({
      email: userDetails.email,
      password: userDetails.password,
    })
    expect(loginResponse.status()).toBe(200)
    const loginUser = (await loginResponse.json()) as AddUserResponse
    expect(loginUser.user).toMatchObject({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
    })
    expect(loginUser.user._id).toBeDefined()
    expect(loginUser.user.__v).toBeDefined()
    expect(loginUser.token).toBeDefined()

    contactListApi.setDefaultHeaders(loginUser.token)
  })

  await test.step('should be able to add a contact', async () => {
    const addContactResponse = await contactListApi.addContact(
      newContactFormDetails
    )
    expect(addContactResponse.status()).toBe(201)
    addedContact = (await addContactResponse.json()) as ContactListTableRowData
    expect(addedContact).toMatchObject(newContactFormDetails)
  })

  await test.step('should be able to get the added contact', async () => {
    const getContactResponse = await contactListApi.getContact(addedContact._id)
    expect(getContactResponse.status()).toBe(200)
    const getContact = await getContactResponse.json()
    expect(getContact).toMatchObject(newContactFormDetails)
  })

  await test.step('should be able to delete the added contact', async () => {
    const deleteContactResponse = await contactListApi.deleteContact(
      addedContact._id
    )
    expect(deleteContactResponse.status()).toBe(200)
  })

  await test.step('deleted contact should not be found', async () => {
    const getContactResponse = await contactListApi.getContact(addedContact._id)
    expect(getContactResponse.status()).toBe(404)
  })
})
