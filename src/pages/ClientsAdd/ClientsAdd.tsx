import React from 'react'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { Container } from '../../components/Container'
import { ClientDetails } from '../../components/ClientDetails'

const ClientsAddPage = () => {
  return (
    <AuthenticatedPage title="Add New Client">
      <Container additionalClasses="col-12 col-md-6">
        <h2>Details</h2>
        <ClientDetails />
      </Container>
      <Container additionalClasses="col-12 col-md-6">
        <h2>Details</h2>
        <ClientDetails />
      </Container>
    </AuthenticatedPage>
  )
}

export { ClientsAddPage }
