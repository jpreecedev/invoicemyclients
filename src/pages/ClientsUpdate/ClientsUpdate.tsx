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
import { useFirebaseObject } from '../../hooks'

const ClientsUpdatePage = () => {
  const { register, errors, handleSubmit } = useForm<ClientAddFormData>()
  const [user] = useAuthState(firebase.auth())
  const history = useHistory()
  const { id } = useParams()
  const [clientData] = useFirebaseObject<ClientAddFormData>(`${CLIENTS_REF}/${id}`)

  const isEditing = id !== undefined

  const handleChange = (data: ClientAddFormData) => {
    const clientsRef = firebase.database().ref(`${user?.uid}/${CLIENTS_REF}/`)

    if (isEditing) {
      clientsRef.child(id!).update(data, error => {
        if (!error) {
          toast('Client was successfully updated', { type: 'success' })
          return history.push(ROUTES.clients.base)
        }
        console.error(error)
        toast('There was an error updating the client', { type: 'error' })
      })

      return
    }

    clientsRef.push(data, error => {
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
      <ClientsProvider
        register={register}
        errors={errors}
        additionalInfo={clientData?.additionalInfo}
        billingAddress={clientData?.billingAddress}
        clientDetails={clientData?.clientDetails}
        contacts={clientData?.contacts}
        shippingAddress={clientData?.shippingAddress}
      >
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
            {id === undefined ? 'Add client' : 'Save changes'}
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
