import React from 'react'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { Card } from '../../components/Card'
import { Invoice } from '../../components/Invoice'

const InvoicesAddPage = () => {
  return (
    <AuthenticatedPage title="Create A New Invoice">
      <p>
        You are raising a new invoice for <strong>Jon Preece Development Ltd</strong>.
      </p>
      <Card>
        <Invoice onAction={console.log} />
      </Card>
    </AuthenticatedPage>
  )
}

export { InvoicesAddPage }
