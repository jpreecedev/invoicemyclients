import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { InvoicesAddPage } from './InvoicesUpdate'

describe('<InvoicesAdd /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<InvoicesAddPage />).container).toMatchSnapshot()
  })
})
