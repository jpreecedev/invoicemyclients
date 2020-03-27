import React from 'react'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { Card } from '../../components/Card'
import { Invoice } from '../../components/Invoice'

const InvoicesAddPage = () => {
  return (
    <AuthenticatedPage title="Create A New Invoice">
      <Card>
        <Invoice onAction={console.log} />
      </Card>
    </AuthenticatedPage>
  )
}

export { InvoicesAddPage }
