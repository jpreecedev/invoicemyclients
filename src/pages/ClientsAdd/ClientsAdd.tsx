import React from 'react'

import { AuthenticatedPage } from '../../components/AuthenticatedPage'
import { ClientDetails } from '../../components/ClientDetails'
import { Contacts } from '../../components/Contacts'
import { AdditionalInfo } from '../../components/AdditionalInfo'
import { AddressDetails } from '../../components/AddressDetails'
import { Card } from '../../components/Card'

const ClientsAddPage = () => {
  return (
    <AuthenticatedPage title="Add New Client">
      <Card title="Client Details">
        <ClientDetails />
      </Card>
      <Card title="Contact">
        <Contacts />
      </Card>
      <Card title="Address Details">
        <AddressDetails />
      </Card>
      <Card title="Additional Info">
        <AdditionalInfo />
      </Card>
      <button className="btn btn-primary mr-1">Add Client</button>
      <button className="btn btn-default">Reset</button>
    </AuthenticatedPage>
  )
}

export { ClientsAddPage }
