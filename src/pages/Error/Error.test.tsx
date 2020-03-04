import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { ErrorPage } from './Error'

describe('<Error /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<ErrorPage />).container).toMatchSnapshot()
  })
})
