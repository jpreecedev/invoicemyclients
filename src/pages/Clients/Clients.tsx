import React from 'react'
import { Link } from 'react-router-dom'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { ClientsList } from '../../components/ClientsList'
import { ROUTES } from '../../routes'

const ClientsPage = () => {
  return (
    <AuthenticatedPage title="Clients">
      <ClientsList />
      <Link to={ROUTES.clients.add} className="btn btn-primary btn-sm d-inline">
        Add New Client
      </Link>
    </AuthenticatedPage>
  )
}

export { ClientsPage }
