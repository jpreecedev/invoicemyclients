import React from 'react'

import { AddressDetailsDefaultState, FormRegistration } from '../../global'

interface AddressDetailsProps<P = {}> extends React.FC<P> {
  defaultState: AddressDetailsDefaultState
}

const AddressForm: React.FC<FormRegistration & { name: string }> = ({ register, name }) => (
  <>
    <div className="form-group narrow d-flex">
      <label htmlFor={`${name}.addressLine1`} className="w-25 d-flex align-items-center">
        <small>Address Line 1</small>
      </label>
      <input
        type="text"
        className="form-control"
        id={`${name}.addressLine1`}
        name={`${name}.addressLine1`}
        placeholder="Address Line 1"
        ref={register}
      />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor={`${name}.addressLine2`} className="w-25 d-flex align-items-center">
        <small>Address Line 2</small>
      </label>
      <input
        type="text"
        className="form-control"
        id={`${name}.addressLine2`}
        name={`${name}.addressLine2`}
        placeholder="Address Line 2"
        ref={register}
      />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor={`${name}.city`} className="w-25 d-flex align-items-center">
        <small>City</small>
      </label>
      <input
        type="text"
        className="form-control"
        id={`${name}.city`}
        name={`${name}.city`}
        placeholder="City"
        ref={register}
      />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor={`${name}.state`} className="w-25 d-flex align-items-center">
        <small>State / Province</small>
      </label>
      <input
        type="text"
        className="form-control"
        id={`${name}.state`}
        name={`${name}.state`}
        placeholder="State / Province"
        ref={register}
      />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor={`${name}.postalCode`} className="w-25 d-flex align-items-center">
        <small>Postal Code</small>
      </label>
      <input
        type="text"
        className="form-control"
        id={`${name}.postalCode`}
        name={`${name}.postalCode`}
        placeholder="Postal Code"
        ref={register}
      />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor={`${name}.country`} className="w-25 d-flex align-items-center">
        <small>Country</small>
      </label>
      <input
        type="text"
        className="form-control"
        id={`${name}.country`}
        name={`${name}.country`}
        placeholder="Country"
        ref={register}
      />
    </div>
  </>
)

const AddressDetails: AddressDetailsProps<FormRegistration> = ({ register }) => {
  return (
    <>
      <ul className="nav nav-pills mb-3" id="addresses" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="billingaddress-tab"
            data-toggle="tab"
            href="#billingaddress"
            role="tab"
            aria-controls="billingaddress"
            aria-selected="true"
          >
            Billing Address
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="shippingaddress-tab"
            data-toggle="tab"
            href="#shippingaddress"
            role="tab"
            aria-controls="shippingaddress"
            aria-selected="false"
          >
            Shipping Address
          </a>
        </li>
      </ul>
      <div className="tab-content" id="addressesContent">
        <div
          className="tab-pane fade show active"
          id="billingaddress"
          role="tabpanel"
          aria-labelledby="billingaddress-tab"
        >
          <AddressForm name="billingAddress" register={register} />
        </div>
        <div
          className="tab-pane fade"
          id="shippingaddress"
          role="tabpanel"
          aria-labelledby="shippingaddress-tab"
        >
          <AddressForm name="shippingAddress" register={register} />
        </div>
      </div>
    </>
  )
}

AddressDetails.defaultState = {
  shippingAddress: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    postalCode: '',
    state: ''
  },
  billingAddress: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    postalCode: '',
    state: ''
  }
}

export { AddressDetails }
