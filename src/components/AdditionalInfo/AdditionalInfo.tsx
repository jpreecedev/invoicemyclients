import React from 'react'

import { AdditionalInfoDefaultState, FormRegistration } from '../../global'

interface AdditionalInfoProps<P = {}> extends React.FC<P> {
  defaultState: AdditionalInfoDefaultState
}

const AdditionalInfo: AdditionalInfoProps<FormRegistration> = ({ register }) => {
  return (
    <>
      <div className="form-group narrow d-flex">
        <label htmlFor="additionalInfo.currency" className="w-25 d-flex align-items-center">
          <small>Currency</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="additionalInfo.currency"
          name="additionalInfo.currency"
          placeholder="Currency"
          ref={register}
        />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="additionalInfo.paymentTerms" className="w-25 d-flex align-items-center">
          <small>Payment Terms</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="additionalInfo.paymentTerms"
          name="additionalInfo.paymentTerms"
          placeholder="Payment Terms"
          ref={register}
        />
      </div>
    </>
  )
}

AdditionalInfo.defaultState = {
  currency: '',
  paymentTerms: ''
}

export { AdditionalInfo }
