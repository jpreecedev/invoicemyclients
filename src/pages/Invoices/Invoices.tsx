import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../routes'
import { AuthenticatedPage } from '../../components/AuthenticatedPage'

const InvoicesPage = () => {
  return (
    <AuthenticatedPage title="Invoices">
      <Link to={ROUTES.invoicing.add} className="btn btn-primary d-inline-flex">
        Invoice Builder
      </Link>
    </AuthenticatedPage>
  )
}

export { InvoicesPage }
