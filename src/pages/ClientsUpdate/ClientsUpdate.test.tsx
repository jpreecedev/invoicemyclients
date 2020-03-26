import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { ClientsUpdatePage } from './ClientsUpdate'

describe('<ClientsAdd /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<ClientsUpdatePage />).container).toMatchSnapshot()
  })
})
