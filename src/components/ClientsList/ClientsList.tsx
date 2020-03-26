import React from 'react'
import { useFirebaseList } from '../../hooks'

const ClientsList = () => {
  const [clientData, component] = useFirebaseList<ClientAddFormData>()

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
                  <td>{item.clientDetails.companyName}</td>
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

export { ClientsList }
