import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { InvoicesPage } from './Invoices'

describe('<Invoices /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<InvoicesPage />).container).toMatchSnapshot()
  })
})
