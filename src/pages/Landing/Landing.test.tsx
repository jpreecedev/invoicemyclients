import React from 'react'

import { LandingPage } from './Landing'
import { renderWithRouter } from '../../test-utils'

describe('<Landing /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<LandingPage />).container).toMatchSnapshot()
  })
})
