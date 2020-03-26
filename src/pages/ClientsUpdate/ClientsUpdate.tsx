import React from 'react'
import firebase from 'firebase/app'
import { useForm } from 'react-hook-form'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { ClientDetailsForm } from '../../components/ClientDetailsForm'
import { Contacts } from '../../components/Contacts'
import { AdditionalInfo } from '../../components/AdditionalInfo'
import { AddressDetails } from '../../components/AddressDetails'
import { Card } from '../../components/Card'

import { CLIENTS_REF } from '../../constants/firebase'
import { ROUTES } from '../../routes'
import { ClientsProvider } from '../../providers'

const ClientsUpdatePage = () => {
  const { register, errors, handleSubmit } = useForm<ClientAddFormData>()
  const [user] = useAuthState(firebase.auth())
  const history = useHistory()
  const { id } = useParams()

  const isEditing = id !== undefined

  const handleChange = (data: ClientAddFormData) => {
    firebase
      .database()
      .ref(`${user?.uid}/${CLIENTS_REF}/`)
      .push(data, error => {
        if (!error) {
          toast('Client was successfully added', { type: 'success' })
          return history.push(ROUTES.clients.base)
        }
        console.error(error)
        toast('There was an error creating the client', { type: 'error' })
      })
  }

  return (
    <AuthenticatedPage title="Add New Client">
      <ClientsProvider register={register} errors={errors}>
        <form onSubmit={handleSubmit(handleChange)}>
          <Card title="Client Details">
            <ClientDetailsForm />
          </Card>
          <Card title="Contact">
            <Contacts />
          </Card>
          <Card title="Address Details">
            <AddressDetails />
          </Card>
          <Card title="Additional Info">
            <AdditionalInfo />
          </Card>
          <button className="btn btn-primary mr-1" type="submit">
            Add Client
          </button>
          <button className="btn btn-default" type="reset">
            Reset
          </button>
        </form>
      </ClientsProvider>
    </AuthenticatedPage>
  )
}

export { ClientsUpdatePage }
