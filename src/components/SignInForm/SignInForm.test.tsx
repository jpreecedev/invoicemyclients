import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { SignInForm } from './SignInForm'

describe('<SignInForm /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<SignInForm />).container).toMatchSnapshot()
  })
})
