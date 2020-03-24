import React from 'react'

import { FormLabelGroup } from '../FormLabelGroup'

interface AdditionalInfoProps<P = {}> extends React.FC<P> {
  defaultState: AdditionalInfoDefaultState
}

const AdditionalInfo: AdditionalInfoProps<FormRegistration> = ({ register, errors }) => {
  return (
    <>
      <FormLabelGroup
        id="additionalInfo.currency"
        label="Currency"
        register={register}
        errors={errors}
      />
      <FormLabelGroup
        id="additionalInfo.paymentTerms"
        label="Payment terms"
        register={register}
        errors={errors}
      />
    </>
  )
}

AdditionalInfo.defaultState = {
  currency: '',
  paymentTerms: ''
}

export { AdditionalInfo }
