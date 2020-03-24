type LineItem = {
  item: string
  description: string
  unitCost: number | string
  quantity: number | string
}

type InvoiceActions = 'Save' | 'SaveAsDraft' | 'NagClientToPay' | 'DownloadPDF'

type Errors = FieldErrors<FormValues>

type FormRegistration = {
  register<Element extends FieldElement = FieldElement>(): (ref: Element | null) => void
  register<Element extends FieldElement = FieldElement>(
    validationOptions: ValidationOptions
  ): (ref: Element | null) => void
  register<Element extends FieldElement = FieldElement>(
    name: FieldName<FormValues>,
    validationOptions?: ValidationOptions
  ): void
  register<Element extends FieldElement = FieldElement>(
    namesWithValidationOptions: Record<FieldName<FormValues>, ValidationOptions>
  ): void
  register<Element extends FieldElement = FieldElement>(
    ref: Element,
    validationOptions?: ValidationOptions
  ): void
  register<Element extends FieldElement = FieldElement>(
    refOrValidationOptions: ValidationOptions | Element | null,
    validationOptions?: ValidationOptions
  ): ((ref: Element | null) => void) | void
  errors: Errors
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
