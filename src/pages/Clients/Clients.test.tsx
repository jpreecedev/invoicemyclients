import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { ClientsPage } from './Clients'

describe('<Clients /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<ClientsPage />).container).toMatchSnapshot()
  })
})
