import React from 'react'
import { render } from '@testing-library/react'
import { SignUpForm } from './SignUpForm'

describe('<SignUpForm /> tests', () => {
  it('should match snapshot', () => {
    expect(render(<SignUpForm />).container).toMatchSnapshot()
  })
})
