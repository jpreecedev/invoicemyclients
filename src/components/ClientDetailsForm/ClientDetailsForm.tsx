import React from 'react'

import { FormLabelGroup } from '../FormLabelGroup'
import { ClientsContext } from '../../providers'

const ClientDetailsForm: React.FC = () => {
  const { register, errors, clientDetails } = React.useContext<ClientsProviderProps>(ClientsContext)

  return (
    <>
      <FormLabelGroup
        id="clientDetails.companyName"
        label="Company name"
        register={register}
        errors={errors}
        defaultValue={clientDetails?.companyName}
        validation={{ required: true, minLength: 1, maxLength: 50 }}
      />
      <FormLabelGroup
        id="clientDetails.idNumber"
        label="ID Number"
        register={register}
        errors={errors}
        defaultValue={clientDetails?.idNumber}
      />
      <FormLabelGroup
        id="clientDetails.website"
        label="Website"
        register={register}
        errors={errors}
        defaultValue={clientDetails?.website}
      />
      <FormLabelGroup
        id="clientDetails.vatNumber"
        label="VAT Number"
        register={register}
        errors={errors}
        defaultValue={clientDetails?.vatNumber}
      />
      <FormLabelGroup
        id="clientDetails.phoneNumber"
        label="Phone Number"
        register={register}
        errors={errors}
        defaultValue={clientDetails?.phoneNumber}
      />
    </>
  )
}

export { ClientDetailsForm }
