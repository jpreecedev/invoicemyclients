import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { Pricing } from './Pricing'

describe('<Pricing /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<Pricing />).container).toMatchSnapshot()
  })
})
