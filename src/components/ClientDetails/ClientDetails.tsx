import React from 'react'

import { FormLabelGroup } from '../FormLabelGroup'

interface ClientDetailsProps<P = {}> extends React.FC<P> {
  defaultState: ClientDetailsDefaultState
}

const ClientDetails: ClientDetailsProps<FormRegistration> = ({ register, errors }) => {
  return (
    <>
      <FormLabelGroup
        id="clientDetails.companyName"
        label="Company name"
        register={register}
        errors={errors}
        validation={{ required: true, minLength: 1, maxLength: 50 }}
      />
      <FormLabelGroup
        id="clientDetails.idNumber"
        label="ID Number"
        register={register}
        errors={errors}
      />
      <FormLabelGroup
        id="clientDetails.website"
        label="Website"
        register={register}
        errors={errors}
      />
      <FormLabelGroup
        id="clientDetails.vatNumber"
        label="VAT Number"
        register={register}
        errors={errors}
      />
      <FormLabelGroup
        id="clientDetails.phoneNumber"
        label="Phone Number"
        register={register}
        errors={errors}
      />
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
