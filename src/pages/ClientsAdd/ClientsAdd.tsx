import React from 'react'
import { useForm } from 'react-hook-form'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { ClientDetails } from '../../components/ClientDetails'
import { Contacts } from '../../components/Contacts'
import { AdditionalInfo } from '../../components/AdditionalInfo'
import { AddressDetails } from '../../components/AddressDetails'
import { Card } from '../../components/Card'
import {
  ClientDetailsDefaultState,
  ContactsDefaultState,
  AdditionalInfoDefaultState,
  AddressDefaultState
} from '../../global'

interface ClientAddFormData {
  clientDetails: ClientDetailsDefaultState
  contacts: ContactsDefaultState
  billingAddress: AddressDefaultState
  shippingAddress: AddressDefaultState
  additionalInfo: AdditionalInfoDefaultState
}

const defaultFormData: ClientAddFormData = {
  clientDetails: ClientDetails.defaultState,
  contacts: Contacts.defaultState,
  billingAddress: AddressDetails.defaultState.billingAddress,
  shippingAddress: AddressDetails.defaultState.shippingAddress,
  additionalInfo: AdditionalInfo.defaultState
}

const ClientsAddPage = () => {
  const [formData, setFormData] = React.useState<ClientAddFormData>(defaultFormData)
  const { register, handleSubmit } = useForm<ClientAddFormData>()

  const handleChange = (data: ClientAddFormData) => {
    setFormData(data)
    debugger
  }

  return (
    <AuthenticatedPage title="Add New Client">
      <form onSubmit={handleSubmit(handleChange)}>
        <Card title="Client Details">
          <ClientDetails register={register} />
        </Card>
        <Card title="Contact">
          <Contacts register={register} />
        </Card>
        <Card title="Address Details">
          <AddressDetails register={register} />
        </Card>
        <Card title="Additional Info">
          <AdditionalInfo register={register} />
        </Card>
        <button className="btn btn-primary mr-1" type="submit">
          Add Client
        </button>
        <button className="btn btn-default" type="reset">
          Reset
        </button>
      </form>
    </AuthenticatedPage>
  )
}

export { ClientsAddPage }
