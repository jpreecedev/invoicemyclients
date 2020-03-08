import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { InvoiceBuilderPage } from './InvoiceBuilder'

describe('<InvoiceBuilder /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<InvoiceBuilderPage />).container).toMatchSnapshot()
  })
})
