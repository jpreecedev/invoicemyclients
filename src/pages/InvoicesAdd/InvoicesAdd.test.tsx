import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { InvoicesAddPage } from './InvoicesAdd'

describe('<InvoicesAdd /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<InvoicesAddPage />).container).toMatchSnapshot()
  })
})
