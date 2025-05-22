import { test as base } from '@playwright/test'
import { ContactListApi } from '../api/ContactListApi'

export type ContactListAppFixtures = {
  contactListApi: ContactListApi
}
export const test = base.extend<ContactListAppFixtures>({
  contactListApi: async ({ request }, use) => {
    const contactListApi = new ContactListApi(request)
    await use(contactListApi)
    await contactListApi.deleteCurrentUser()
  },
})

export { expect } from '@playwright/test'
