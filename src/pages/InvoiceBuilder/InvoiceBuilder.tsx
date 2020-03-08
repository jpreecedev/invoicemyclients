import React from 'react'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { Container } from '../../components/Container'
import { Invoice } from '../../components/Invoice'

const InvoiceBuilderPage = () => {
  return (
    <AuthenticatedPage>
      <h1>Create a new invoice</h1>
      <p>
        You are raising a new invoice for <strong>Jon Preece Development Ltd</strong>.
      </p>
      <Container>
        <Invoice onAction={console.log} />
      </Container>
    </AuthenticatedPage>
  )
}

export { InvoiceBuilderPage }
