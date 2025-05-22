import { faker } from '@faker-js/faker'
import {
  AddContactFormDetails,
  ContactListTableRowData,
  UserDetails,
} from '../types/types'

export const userDetails: UserDetails = {
  firstName: faker.person.firstName().substring(0, 20),
  lastName: faker.person.lastName().substring(0, 20),
  email: faker.internet
    .email({ firstName: Date.now().toString() })
    .toLowerCase(),
  password: faker.internet.password(),
}

export const newContactFormDetails: Partial<ContactListTableRowData> = {
  firstName: faker.person.firstName().substring(0, 20),
  lastName: faker.person.lastName().substring(0, 20),
  email: faker.internet.email().toLowerCase(),
}

export const addContactFormDetails: AddContactFormDetails = {
  firstName: faker.person.firstName().substring(0, 20),
  lastName: Date.now().toString(),
}
