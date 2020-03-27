import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { Invoice } from './InvoiceBuilder'
import { act } from 'react-dom/test-utils'

describe('<InvoiceBuilder /> tests', () => {
  it('should get the right sub total, tax and balance due when 1 line', async () => {
    const onAction = jest.fn()

    const { getByTestId } = render(<Invoice onAction={onAction} />)

    const itemField = getByTestId('lineItems[0].item')
    const descriptionField = getByTestId('lineItems[0].description')
    const unitCostField = getByTestId('lineItems[0].unitCost')
    const quantityField = getByTestId('lineItems[0].quantity')

    act(() => {
      fireEvent.change(itemField, { target: { value: 'TEST ITEM' } })
      fireEvent.change(descriptionField, { target: { value: 'TEST DESCRIPTION' } })
      fireEvent.change(unitCostField, { target: { value: '100' } })
      fireEvent.change(quantityField, { target: { value: '2' } })
    })

    await waitForElement(() => getByTestId('subTotal'))

    expect(getByTestId('subTotal').textContent).toEqual('£200.00')
    expect(getByTestId('tax').textContent).toEqual('£40.00')
    expect(getByTestId('balanceDue').textContent).toEqual('£240.00')
  })

  it('should get the right sub total, tax and balance due when 2 lines', async () => {
    const onAction = jest.fn()

    const { getByTestId } = render(<Invoice onAction={onAction} />)

    const itemField1 = getByTestId('lineItems[0].item')
    const descriptionField1 = getByTestId('lineItems[0].description')
    const unitCostField1 = getByTestId('lineItems[0].unitCost')
    const quantityField1 = getByTestId('lineItems[0].quantity')

    act(() => {
      fireEvent.change(itemField1, { target: { value: 'TEST ITEM 1' } })
      fireEvent.change(descriptionField1, { target: { value: 'TEST DESCRIPTION 1' } })
      fireEvent.change(unitCostField1, { target: { value: '500' } })
      fireEvent.change(quantityField1, { target: { value: '3' } })
    })

    await waitForElement(() => getByTestId('lineItems[1].item'))

    const itemField2 = getByTestId('lineItems[1].item')
    const descriptionField2 = getByTestId('lineItems[1].description')
    const unitCostField2 = getByTestId('lineItems[1].unitCost')
    const quantityField2 = getByTestId('lineItems[1].quantity')

    act(() => {
      fireEvent.change(itemField2, { target: { value: 'TEST ITEM 2' } })
      fireEvent.change(descriptionField2, { target: { value: 'TEST DESCRIPTION 2' } })
      fireEvent.change(unitCostField2, { target: { value: '400' } })
      fireEvent.change(quantityField2, { target: { value: '5' } })
    })

    await waitForElement(() => getByTestId('subTotal'))

    expect(getByTestId('subTotal').textContent).toEqual('£3500.00')
    expect(getByTestId('tax').textContent).toEqual('£700.00')
    expect(getByTestId('balanceDue').textContent).toEqual('£4200.00')
  })
})
