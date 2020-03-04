import React from 'react'

import { renderWithRouter } from '../../test-utils'
import { NavBar } from './NavBar'

describe('<NavBar /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<NavBar />).container).toMatchSnapshot()
  })
})
