import React from 'react'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { Card } from '../../components/Card'
import { InvoiceBuilder } from '../../components/InvoiceBuilder'
import { ROUTES } from '../../routes'
import { INVOICES_REF } from '../../constants/firebase'

const InvoicesAddPage = () => {
  const [user] = useAuthState(firebase.auth())
  const history = useHistory()

  const createOrUpdate = (data: InvoiceFormData) => {
    const invoicesRef = firebase.database().ref(`${user?.uid}/${INVOICES_REF}/`)

    invoicesRef.push(data, error => {
      if (!error) {
        toast('Invoice was successfully created', { type: 'success' })
        return history.push(ROUTES.invoicing.base)
      }
      console.error(error)
      toast('There was an error creating the invoice', { type: 'error' })
    })
  }

  const performAction = (action: InvoiceActions, formData: InvoiceFormData | null) => {
    if (!formData) {
      return
    }

    switch (action) {
      case 'Save':
        createOrUpdate(formData)
        break
      default:
        console.log(action, formData)
        break
    }
  }

  return (
    <AuthenticatedPage title="Create A New Invoice">
      <Card>
        <InvoiceBuilder onAction={performAction} />
      </Card>
    </AuthenticatedPage>
  )
}

export { InvoicesAddPage }
