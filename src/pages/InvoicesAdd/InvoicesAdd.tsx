import React from 'react'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { Container } from '../../components/Container'
import { Invoice } from '../../components/Invoice'

const InvoicesAddPage = () => {
  return (
    <AuthenticatedPage title="Create A New Invoice">
      <p>
        You are raising a new invoice for <strong>Jon Preece Development Ltd</strong>.
      </p>
      <Container>
        <Invoice onAction={console.log} />
      </Container>
    </AuthenticatedPage>
  )
}

export { InvoicesAddPage }
