import React from 'react'

import { AddressDetailsDefaultState, FormRegistration } from '../../global'
import { FormLabelGroup } from '../FormLabelGroup'

interface AddressDetailsProps<P = {}> extends React.FC<P> {
  defaultState: AddressDetailsDefaultState
}

const AddressForm: React.FC<FormRegistration & { name: string }> = ({ register, errors, name }) => (
  <>
    <FormLabelGroup
      id={`${name}.addressLine1`}
      label="Address line 1"
      register={register}
      errors={errors}
    />
    <FormLabelGroup
      id={`${name}.addressLine2`}
      label="Address line 2"
      register={register}
      errors={errors}
    />
    <FormLabelGroup id={`${name}.city`} label="City" register={register} errors={errors} />
    <FormLabelGroup
      id={`${name}.state`}
      label="State / Province"
      register={register}
      errors={errors}
    />
    <FormLabelGroup
      id={`${name}.postalCode`}
      label="Postal code"
      register={register}
      errors={errors}
    />
    <FormLabelGroup id={`${name}.country`} label="Country" register={register} errors={errors} />
  </>
)

const AddressDetails: AddressDetailsProps<FormRegistration> = ({ register, errors }) => {
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
          <AddressForm name="billingAddress" register={register} errors={errors} />
        </div>
        <div
          className="tab-pane fade"
          id="shippingaddress"
          role="tabpanel"
          aria-labelledby="shippingaddress-tab"
        >
          <AddressForm name="shippingAddress" register={register} errors={errors} />
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
