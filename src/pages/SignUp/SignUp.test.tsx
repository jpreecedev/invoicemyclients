import React from 'react'
import { render } from '@testing-library/react'
import { SignUpPage } from './SignUp'

describe('<SignUp /> tests', () => {
  it('should match snapshot', () => {
    expect(render(<SignUpPage />).container).toMatchSnapshot()
  })
})
