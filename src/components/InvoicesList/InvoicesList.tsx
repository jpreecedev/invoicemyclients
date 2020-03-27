import React from 'react'
import { Link } from 'react-router-dom'

import { useFirebaseList } from '../../hooks'
import { ROUTES } from '../../routes'
import { CLIENTS_REF } from '../../constants/firebase'

const InvoicesList = () => {
  const [clientData, component] = useFirebaseList<ClientAddFormData>(CLIENTS_REF)

  if (!clientData || !clientData.length) {
    if (component === null) {
      return (
        <div>
          <p>It look&apos;s like you do not have any clients set up yet!</p>
          <p className="mb-5">Would you like to add a new client now?</p>
        </div>
      )
    }
    return component
  }

  return (
    <>
      <div className="table-responsive mb-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Company name</th>
              <th scope="col">Contact name</th>
              <th scope="col">Phone number</th>
            </tr>
          </thead>
          <tbody>
            {clientData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link to={`${ROUTES.clients.addEdit}/${item.key}`}>
                      {item.clientDetails.companyName}
                    </Link>
                  </td>
                  <td>{`${item.contacts.firstName} ${item.contacts.lastName}`}</td>
                  <td>{item.clientDetails.phoneNumber}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export { InvoicesList }
