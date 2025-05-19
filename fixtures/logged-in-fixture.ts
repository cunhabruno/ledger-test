import { test as base, ContactListAppFixtures } from './base-fixture'
import { ContactListAppPage } from '../page-objects/contact-list-app-page'

export const test = base.extend<ContactListAppFixtures>({
  contactListApp: async ({ page, contactListApp }, use) => {
    await use(contactListApp)
  },
})
