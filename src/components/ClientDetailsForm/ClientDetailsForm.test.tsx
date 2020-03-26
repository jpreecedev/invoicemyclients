import React from 'react'
import { render } from '@testing-library/react'
import { ClientDetails } from './ClientDetailsForm'

describe('<ClientDetails /> tests', () => {
  it('should match snapshot', () => {
    expect(render(<ClientDetails />).container).toMatchSnapshot()
  })
})
