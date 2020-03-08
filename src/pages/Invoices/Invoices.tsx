import React from 'react'

import { ROUTES } from '../../routes'
import { AuthenticatedPage } from '../../components/AuthenticatedPage'

const InvoicesPage = () => {
  return (
    <AuthenticatedPage title="Invoices">
      <a href={ROUTES.invoicing.add}>Invoice Builder</a>
    </AuthenticatedPage>
  )
}

export { InvoicesPage }
