import React from 'react'

import { FormLabelGroup } from '../FormLabelGroup'
import { ClientsContext } from '../../providers'

interface ContactsProps<P = {}> extends React.FC<P> {
  defaultState: ContactsDefaultState
}

const Contacts: ContactsProps = () => {
  const { register, errors } = React.useContext<FormRegistration>(ClientsContext)

  return (
    <>
      <FormLabelGroup
        id="contacts.firstName"
        label="First name"
        register={register}
        errors={errors}
        validation={{ required: true, minLength: 1, maxLength: 50 }}
      />
      <FormLabelGroup
        id="contacts.lastName"
        label="Last name"
        register={register}
        errors={errors}
        validation={{ required: true, minLength: 1, maxLength: 50 }}
      />
      <FormLabelGroup
        id="contacts.email"
        label="Email address"
        register={register}
        errors={errors}
      />
      <FormLabelGroup
        id="contacts.phoneNumber"
        label="Phone number"
        register={register}
        errors={errors}
      />
    </>
  )
}

Contacts.defaultState = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: ''
}

export { Contacts }
