import React from 'react'

import { ROUTES } from '../../routes'
import { AuthenticatedPage } from '../../components/AuthenticatedPage'

const InvoicesPage = () => {
  return (
    <AuthenticatedPage>
      <a href={ROUTES.invoiceBuilder}>Invoice Builder</a>
    </AuthenticatedPage>
  )
}

export { InvoicesPage }
