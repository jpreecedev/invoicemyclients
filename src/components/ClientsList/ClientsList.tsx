import React from 'react'
import { useFirebaseList } from '../../hooks'

const ClientsList = () => {
  const [clientData, component] = useFirebaseList<ClientAddFormData>()

  if (!clientData || !clientData.length) {
    return component
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company name</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.clientDetails.companyName}</td>
                <td>{item.clientDetails.phoneNumber}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { ClientsList }
