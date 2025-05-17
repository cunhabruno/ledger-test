import { test as base } from '@playwright/test'
import { ContactListAppPage } from '../page-objects/contact-list-app-page'

type ContactListAppFixtures = {
  contactListApp: ContactListAppPage
}
export const test = base.extend<ContactListAppFixtures>({
  contactListApp: async ({ page }, use) => {
    const contactListApp = new ContactListAppPage(page)
    await use(contactListApp)
  },
})

export { expect } from '@playwright/test'
