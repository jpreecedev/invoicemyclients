import React from 'react'

import { renderWithRouter } from '../../test-utils'
import { SignUpButton } from './SignUpButton'

describe('<SignUpButton /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<SignUpButton />).container).toMatchSnapshot()
  })
})
