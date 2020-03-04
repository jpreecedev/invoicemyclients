import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { SignUpPage } from './SignUp'

describe('<SignUp /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<SignUpPage />).container).toMatchSnapshot()
  })
})
