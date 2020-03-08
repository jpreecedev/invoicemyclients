import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { ClientsAddPage } from './ClientsAdd'

describe('<ClientsAdd /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<ClientsAddPage />).container).toMatchSnapshot()
  })
})
