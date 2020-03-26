import React from 'react'

import { FormLabelGroup } from '../FormLabelGroup'
import { ClientsContext } from '../../providers'

interface ClientDetailsFormProps<P = {}> extends React.FC<P> {
  defaultState: ClientDetailsFormDefaultState
}

const ClientDetailsForm: ClientDetailsFormProps = () => {
  const { register, errors } = React.useContext<FormRegistration>(ClientsContext)

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

ClientDetailsForm.defaultState = {
  companyName: '',
  idNumber: '',
  phoneNumber: '',
  vatNumber: '',
  website: ''
}

export { ClientDetailsForm }
