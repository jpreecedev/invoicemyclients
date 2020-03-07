import React from 'react'

const Invoice = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 form-group">
          <label htmlFor="invoiceDate">Invoice Date</label>
          <input
            type="date"
            className="form-control"
            id="invoiceDate"
            placeholder="Invoice Date"
            autoComplete="off"
          />
        </div>
        <div className="col-12 col-md-4 form-group">
          <label htmlFor="InvoiceNumber">Invoice Number #</label>
          <input
            type="text"
            className="form-control"
            id="InvoiceNumber"
            placeholder="Invoice Number #"
            autoComplete="off"
          />
        </div>
        <div className="col-12 col-md-4 form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="text"
            className="form-control"
            id="dueDate"
            placeholder="Due Date"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 form-group col-auto ml-auto">
          <label htmlFor="poNumber">PO Number #</label>
          <input
            type="text"
            className="form-control"
            id="poNumber"
            placeholder="PO Number #"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="row">
        <table className="table table-sm table-borderless table-responsive mt-5">
          <thead className="thead-light mb-2">
            <tr>
              <th scope="col">
                <span className="text-uppercase p-2 text-black-50 text-nowrap">Item</span>
              </th>
              <th scope="col">
                <span className="text-uppercase p-2 text-black-50 text-nowrap">Description</span>
              </th>
              <th scope="col">
                <span className="text-uppercase p-2 text-black-50 text-nowrap">Unit Cost</span>
              </th>
              <th scope="col">
                <span className="text-uppercase p-2 text-black-50 text-nowrap">Quantity</span>
              </th>
              <th scope="col">
                <span className="text-uppercase p-2 text-black-50 text-nowrap">Line Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="text" className="form-control" placeholder="Item" />
              </th>
              <td>
                <input type="text" className="form-control" placeholder="Description" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Unit Cost" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Quantity" />
              </td>
              <td className="text-right">
                <p className="mb-0 mt-4">£9.99</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 col-auto ml-auto p-0">
          <div className="row border-bottom mt-5 pb-3">
            <div className="col-6 font-weight-bold">Subtotal</div>
            <div className="col-6 text-right">£99.99</div>
          </div>
          <div className="row border-bottom pb-3 pt-3">
            <div className="col-6 font-weight-bold">Tax</div>
            <div className="col-6 text-right">£49.99</div>
          </div>
          <div className="row pb-3 pt-3">
            <div className="col-6 font-weight-bold">Balance Due</div>
            <div className="col-6 text-right">£149.98</div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary mr-3">
              Save
            </button>
            <button type="button" className="btn btn-primary-soft mr-3">
              Save As Draft
            </button>
            <button type="button" className="btn btn-primary-soft mr-3">
              Nag Client To Pay
            </button>
            <button type="button" className="btn btn-primary-soft">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Invoice }
