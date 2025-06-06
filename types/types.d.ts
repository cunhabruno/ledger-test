export type UserDetails = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type AddContactFormDetails = {
  firstName: string
  lastName: string
  dateOfBirth?: string
  email?: string
  phone?: string
  streetAddress1?: string
  streetAddress2?: string
  city?: string
  state?: string
  postalCode?: string
  country?: string
}

export type ContactListTableRowData = AddContactFormDetails & {
  _id: string
  owner: string
}

export type AddUserResponse = {
  user: {
    _id: string
    firstName: string
    lastName: string
    email: string
    __v: number
  }
  token: string
}

export type LoginFormDetails = {
  email: string
  password: string
}
