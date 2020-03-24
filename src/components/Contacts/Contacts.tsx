import React from 'react'

import { FormRegistration, ContactsDefaultState } from '../../global'

interface ContactsProps<P = {}> extends React.FC<P> {
  defaultState: ContactsDefaultState
}

const Contacts: ContactsProps<FormRegistration> = ({ register }) => {
  return (
    <>
      <div className="form-group narrow d-flex">
        <label htmlFor="contacts.firstName" className="w-25 d-flex align-items-center">
          <small>First Name</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="contacts.firstName"
          name="contacts.firstName"
          placeholder="First Name"
          ref={register}
        />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="contacts.lastName" className="w-25 d-flex align-items-center">
          <small>Last Name</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="contacts.lastName"
          name="contacts.lastName"
          placeholder="Last Name"
          ref={register}
        />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="contacts.email" className="w-25 d-flex align-items-center">
          <small>Email</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="contacts.email"
          name="contacts.email"
          placeholder="Email"
          ref={register}
        />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="contacts.phoneNumber" className="w-25 d-flex align-items-center">
          <small>Phone Number</small>
        </label>
        <input
          type="text"
          className="form-control"
          id="contacts.phoneNumber"
          name="contacts.phoneNumber"
          placeholder="Phone Number"
          ref={register}
        />
      </div>
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
