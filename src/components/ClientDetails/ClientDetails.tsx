import React from 'react'

const ClientDetails = () => {
  return (
    <form>
      <div className="form-group narrow d-flex">
        <label htmlFor="companyName" className="w-25 d-flex align-items-center">
          <small>Company Name</small>
        </label>
        <input type="text" className="form-control" id="companyName" placeholder="Company Name" />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="idNumber" className="w-25 d-flex align-items-center">
          <small>ID Number</small>
        </label>
        <input type="text" className="form-control" id="idNumber" placeholder="ID Number" />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="website" className="w-25 d-flex align-items-center">
          <small>Website</small>
        </label>
        <input type="text" className="form-control" id="website" placeholder="Website" />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="vatNumber" className="w-25 d-flex align-items-center">
          <small>VAT Number</small>
        </label>
        <input type="text" className="form-control" id="vatNumber" placeholder="VAT Number" />
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

export { ClientDetails }
