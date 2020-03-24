import { FieldElement } from 'react-hook-form'

type LineItem = {
  item: string
  description: string
  unitCost: number | string
  quantity: number | string
}

type InvoiceActions = 'Save' | 'SaveAsDraft' | 'NagClientToPay' | 'DownloadPDF'

type FormRegistration = {
  register<Element extends FieldElement = FieldElement>(): (ref: Element | null) => void
}

type ClientDetailsDefaultState = {
  companyName: string
  idNumber: string
  website: string
  vatNumber: string
  phoneNumber: string
}

type ContactsDefaultState = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

type AddressDefaultState = {
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postalCode: string
  country: string
}

type AddressDetailsDefaultState = {
  shippingAddress: AddressDefaultState
  billingAddress: AddressDefaultState
}

type AdditionalInfoDefaultState = {
  currency: string
  paymentTerms: string
}
