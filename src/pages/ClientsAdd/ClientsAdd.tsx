import React from 'react'
import firebase from 'firebase/app'
import { useForm } from 'react-hook-form'
import { useAuthState } from 'react-firebase-hooks/auth'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { ClientDetails } from '../../components/ClientDetails'
import { Contacts } from '../../components/Contacts'
import { AdditionalInfo } from '../../components/AdditionalInfo'
import { AddressDetails } from '../../components/AddressDetails'
import { Card } from '../../components/Card'

import { CLIENTS_REF } from '../../constants/firebase'

const defaultFormData: ClientAddFormData = {
  clientDetails: ClientDetails.defaultState,
  contacts: Contacts.defaultState,
  billingAddress: AddressDetails.defaultState.billingAddress,
  shippingAddress: AddressDetails.defaultState.shippingAddress,
  additionalInfo: AdditionalInfo.defaultState
}

const ClientsAddPage = () => {
  const [formData, setFormData] = React.useState<ClientAddFormData>(defaultFormData)
  const { register, errors, handleSubmit } = useForm<ClientAddFormData>()
  const [user] = useAuthState(firebase.auth())

  const handleChange = (data: ClientAddFormData) => {
    setFormData(data)

    firebase
      .database()
      .ref(`${user?.uid}/${CLIENTS_REF}/`)
      .push(data)
  }

  return (
    <AuthenticatedPage title="Add New Client">
      <form onSubmit={handleSubmit(handleChange)}>
        <Card title="Client Details">
          <ClientDetails register={register} errors={errors} />
        </Card>
        <Card title="Contact">
          <Contacts register={register} errors={errors} />
        </Card>
        <Card title="Address Details">
          <AddressDetails register={register} errors={errors} />
        </Card>
        <Card title="Additional Info">
          <AdditionalInfo register={register} errors={errors} />
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
