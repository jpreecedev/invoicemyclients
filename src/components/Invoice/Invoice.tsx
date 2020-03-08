import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

import { calculateLineTotal, calculateSubTotal, calculateTax } from '../../utils'

type FormData = {
  invoiceDate: string
  invoiceNumber: string
  lineItems: LineItem[]
}

interface InvoiceProps {
  onAction: (action: InvoiceActions, formData: FormData) => void
}

const defaultFormData: FormData = {
  invoiceDate: '',
  invoiceNumber: '',
  lineItems: []
}

const cleanFormData = (formData: FormData) => ({
  ...formData,
  lineItems: formData.lineItems.filter(x => x.description && x.item && x.quantity && x.unitCost)
})

const Invoice: React.FC<InvoiceProps> = ({ onAction }) => {
  const [formData, setFormData] = React.useState<FormData>(defaultFormData)
  const { register, handleSubmit, control } = useForm<FormData>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'lineItems'
  })

  const callback = (action: InvoiceActions) => onAction && onAction(action, cleanFormData(formData))
  const addLineItem = () => append({ name: 'lineItems' })

  const handleChange = (data: FormData) => {
    setFormData(data)

    for (let index = 0; index < data.lineItems.length; index++) {
      const lineItem = data.lineItems[index]
      const nextLineItem = data.lineItems[index + 1]

      if (lineItem.description || lineItem.item || lineItem.quantity || lineItem.unitCost) {
        if (!nextLineItem) {
          addLineItem()
        }
      }

      if (!lineItem.description && !lineItem.item && !lineItem.quantity && !lineItem.unitCost) {
        if (nextLineItem) {
          if (
            !nextLineItem.description &&
            !nextLineItem.item &&
            !nextLineItem.quantity &&
            !nextLineItem.unitCost
          ) {
            remove(index + 1)
          }
        }
      }
    }
  }

  React.useEffect(addLineItem, [])

  return (
    <form onChange={handleSubmit(handleChange)}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 form-group">
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input
              type="date"
              className="form-control"
              id="invoiceDate"
              name="invoiceDate"
              data-testid="invoiceDate"
              placeholder="Invoice Date"
              autoComplete="off"
              ref={register}
            />
          </div>
          <div className="col-12 col-md-4 form-group">
            <label htmlFor="invoiceNumber">Invoice Number #</label>
            <input
              type="text"
              className="form-control"
              id="invoiceNumber"
              name="invoiceNumber"
              data-testid="invoiceNumber"
              placeholder="Invoice Number #"
              autoComplete="off"
              ref={register}
            />
          </div>
          <div className="col-12 col-md-4 form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              className="form-control"
              id="dueDate"
              name="dueDate"
              data-testid="dueDate"
              placeholder="Due Date"
              autoComplete="off"
              ref={register}
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
              name="poNumber"
              data-testid="poNumber"
              placeholder="PO Number #"
              autoComplete="off"
              ref={register}
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
              {fields.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Item"
                      name={`lineItems[${index}].item`}
                      data-testid={`lineItems[${index}].item`}
                      ref={register}
                    />
                  </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      name={`lineItems[${index}].description`}
                      data-testid={`lineItems[${index}].description`}
                      ref={register}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Unit Cost"
                      name={`lineItems[${index}].unitCost`}
                      data-testid={`lineItems[${index}].unitCost`}
                      ref={register}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Quantity"
                      name={`lineItems[${index}].quantity`}
                      data-testid={`lineItems[${index}].quantity`}
                      ref={register}
                    />
                  </td>
                  <td className="text-right">
                    {formData && formData.lineItems && (
                      <p className="mb-0 mt-4" data-testid="lineTotal">{`£${calculateLineTotal(
                        formData.lineItems[index]
                      ).toFixed(2)}`}</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-auto ml-auto p-0">
            <div className="row border-bottom mt-5 pb-3">
              <div className="col-6 font-weight-bold">Subtotal</div>
              <div className="col-6 text-right">
                {formData && formData.lineItems && (
                  <span data-testid="subTotal">
                    &pound;{calculateSubTotal(formData.lineItems).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <div className="row border-bottom pb-3 pt-3">
              <div className="col-6 font-weight-bold">Tax</div>
              <div className="col-6 text-right">
                {formData && formData.lineItems && (
                  <span data-testid="tax">
                    &pound;{calculateTax(formData.lineItems).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <div className="row pb-3 pt-3">
              <div className="col-6 font-weight-bold">Balance Due</div>
              <div className="col-6 text-right">
                {formData && formData.lineItems && (
                  <span data-testid="balanceDue">
                    &pound;
                    {(
                      calculateSubTotal(formData.lineItems) + calculateTax(formData.lineItems)
                    ).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary mr-3"
                onClick={() => callback('Save')}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-primary-soft mr-3"
                onClick={() => callback('SaveAsDraft')}
              >
                Save As Draft
              </button>
              <button
                type="button"
                className="btn btn-primary-soft mr-3"
                onClick={() => callback('NagClientToPay')}
              >
                Nag Client To Pay
              </button>
              <button
                type="button"
                className="btn btn-primary-soft"
                onClick={() => callback('DownloadPDF')}
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export { Invoice }
