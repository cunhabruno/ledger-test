import { APIRequestContext } from '@playwright/test'
import { ENDPOINTS } from '../utils/constants'
import {
  ContactListTableRowData,
  LoginFormDetails,
  UserDetails,
} from '../types/types'

export class ContactListApi {
  private apiKey: string
  request: APIRequestContext
  defaultHeaders: { [key: string]: string }
  constructor(request: APIRequestContext) {
    this.request = request
  }

  async registerUser(userDetails: UserDetails) {
    return await this.request.post(ENDPOINTS.USERS, {
      data: userDetails,
    })
  }

  async loginUser(loginFormDetails: LoginFormDetails) {
    return await this.request.post(ENDPOINTS.LOGIN, {
      data: loginFormDetails,
    })
  }

  async deleteCurrentUser(headers = this.defaultHeaders) {
    return await this.request.delete(`${ENDPOINTS.USERS_ME}`, {
      headers,
    })
  }

  async addContact(
    newContactFormDetails: Partial<ContactListTableRowData>,
    headers = this.defaultHeaders
  ) {
    return await this.request.post(ENDPOINTS.CONTACTS, {
      data: newContactFormDetails,
      headers,
    })
  }

  async deleteContact(contactId: string, headers = this.defaultHeaders) {
    return await this.request.delete(`${ENDPOINTS.CONTACTS}/${contactId}`, {
      headers,
    })
  }

  async getContact(contactId: string, headers = this.defaultHeaders) {
    return await this.request.get(`${ENDPOINTS.CONTACTS}/${contactId}`, {
      headers,
    })
  }

  async listContacts(headers = this.defaultHeaders) {
    return await this.request.get(`${ENDPOINTS.CONTACTS}`, {
      headers,
    })
  }

  setDefaultHeaders(apiKey: string) {
    this.apiKey = apiKey
    this.defaultHeaders = {
      Authorization: `Bearer ${this.apiKey}`,
    }
  }

  setApiKeyFromStorageState() {}
}
