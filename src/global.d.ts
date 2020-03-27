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

type ClientDetails = {
  companyName: string
  idNumber: string
  website: string
  vatNumber: string
  phoneNumber: string
}

type Contact = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

type Address = {
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postalCode: string
  country: string
}

type AdditionalInfo = {
  currency: string
  paymentTerms: string
}

type ClientAddFormData = firebase.database.DataSnapshot & {
  clientDetails: ClientDetails
  contacts: Contact
  billingAddress: Address
  shippingAddress: Address
  additionalInfo: AdditionalInfo
}

type ClientsProviderProps = FormRegistration & {
  clientDetails: ClientDetails | undefined
  contacts: Contact | undefined
  billingAddress: Address | undefined
  shippingAddress: Address | undefined
  additionalInfo: AdditionalInfo | undefined
}

type Suggestion = { key: string; value: Record<string, any> | string | null }
