import React from 'react'

const AddressForm = () => (
  <form>
    <div className="form-group narrow d-flex">
      <label htmlFor="street" className="w-25 d-flex align-items-center">
        <small>Street</small>
      </label>
      <input type="text" className="form-control" id="street" placeholder="Street" />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor="addressLine1" className="w-25 d-flex align-items-center">
        <small>Address Line 1</small>
      </label>
      <input type="text" className="form-control" id="addressLine1" placeholder="Address Line 1" />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor="addressLine2" className="w-25 d-flex align-items-center">
        <small>Address Line 2</small>
      </label>
      <input type="text" className="form-control" id="addressLine2" placeholder="Address Line 2" />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor="city" className="w-25 d-flex align-items-center">
        <small>City</small>
      </label>
      <input type="text" className="form-control" id="city" placeholder="City" />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor="state" className="w-25 d-flex align-items-center">
        <small>State / Province</small>
      </label>
      <input type="text" className="form-control" id="state" placeholder="State / Province" />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor="postalCode" className="w-25 d-flex align-items-center">
        <small>Postal Code</small>
      </label>
      <input type="text" className="form-control" id="postalCode" placeholder="Postal Code" />
    </div>
    <div className="form-group narrow d-flex">
      <label htmlFor="country" className="w-25 d-flex align-items-center">
        <small>Country</small>
      </label>
      <input type="text" className="form-control" id="country" placeholder="Country" />
    </div>
  </form>
)

const AddressDetails = () => {
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
          id="shippingaddress"
          role="tabpanel"
          aria-labelledby="shippingaddress-tab"
        >
          <AddressForm />
        </div>
        <div
          className="tab-pane fade"
          id="billingaddress"
          role="tabpanel"
          aria-labelledby="billingaddress-tab"
        >
          <AddressForm />
        </div>
      </div>
    </>
  )
}

export { AddressDetails }
