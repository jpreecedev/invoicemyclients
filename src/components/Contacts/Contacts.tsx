import React from 'react'

const Contacts = () => {
  return (
    <form>
      <div className="form-group narrow d-flex">
        <label htmlFor="firstName" className="w-25 d-flex align-items-center">
          <small>First Name</small>
        </label>
        <input type="text" className="form-control" id="firstName" placeholder="First Name" />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="lastName" className="w-25 d-flex align-items-center">
          <small>Last Name</small>
        </label>
        <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="email" className="w-25 d-flex align-items-center">
          <small>Email</small>
        </label>
        <input type="text" className="form-control" id="email" placeholder="Email" />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="phoneNumber" className="w-25 d-flex align-items-center">
          <small>Phone Number</small>
        </label>
        <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" />
      </div>
    </form>
  )
}

export { Contacts }
