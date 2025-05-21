import { test as base } from '@playwright/test'
import { ContactListApp } from '../page-objects/contact-list-app'

export type ContactListAppFixtures = {
  contactListApp: ContactListApp
}
export const test = base.extend<ContactListAppFixtures>({
  contactListApp: async ({ page }, use) => {
    const contactListApp = new ContactListApp(page)
    await use(contactListApp)
  },
})

export { expect } from '@playwright/test'
