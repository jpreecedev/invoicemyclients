import React from 'react'

const AdditionalInfo = () => {
  return (
    <form>
      <div className="form-group narrow d-flex">
        <label htmlFor="currency" className="w-25 d-flex align-items-center">
          <small>Currency</small>
        </label>
        <input type="text" className="form-control" id="currency" placeholder="Currency" />
      </div>
      <div className="form-group narrow d-flex">
        <label htmlFor="paymentTerms" className="w-25 d-flex align-items-center">
          <small>Payment Terms</small>
        </label>
        <input type="text" className="form-control" id="paymentTerms" placeholder="Payment Terms" />
      </div>
    </form>
  )
}

export { AdditionalInfo }
