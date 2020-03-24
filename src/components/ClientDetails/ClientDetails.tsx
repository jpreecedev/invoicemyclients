import React from 'react'

import { FormRegistration, ClientDetailsDefaultState } from '../../global'

interface ClientDetailsProps<P = {}> extends React.FC<P> {
  defaultState: ClientDetailsDefaultState
}

const ClientDetails: ClientDetailsProps<FormRegistration> = ({ register }) => {
  return (
    <>
      <div className="form-group narrow d-flex">
        <label htmlFor="clientDetails.companyName" className="w-25 d-flex align-items-center">
          <small>Company Name</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="clientDetails.companyName"
          name="clientDetails.companyName"
          placeholder="Company Name"
          ref={register}
        />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="clientDetails.idNumber" className="w-25 d-flex align-items-center">
          <small>ID Number</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="clientDetails.idNumber"
          name="clientDetails.idNumber"
          placeholder="ID Number"
          ref={register}
        />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="clientDetails.website" className="w-25 d-flex align-items-center">
          <small>Website</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="clientDetails.website"
          name="clientDetails.website"
          placeholder="Website"
          ref={register}
        />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="clientDetails.vatNumber" className="w-25 d-flex align-items-center">
          <small>VAT Number</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="clientDetails.vatNumber"
          name="clientDetails.vatNumber"
          placeholder="VAT Number"
          ref={register}
        />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="clientDetails.phoneNumber" className="w-25 d-flex align-items-center">
          <small>Phone Number</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="clientDetails.phoneNumber"
          name="clientDetails.phoneNumber"
          placeholder="Phone Number"
          ref={register}
        />
      </div>
    </>
  )
}

ClientDetails.defaultState = {
  companyName: '',
  idNumber: '',
  phoneNumber: '',
  vatNumber: '',
  website: ''
}

export { ClientDetails }
