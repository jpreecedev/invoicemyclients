import React from 'react'
import { render } from '@testing-library/react'
import { GoogleLoginButton } from './GoogleLoginButton'

describe('<GoogleLoginButton /> tests', () => {
  it('should match snapshot', () => {
    expect(render(<GoogleLoginButton />).container).toMatchSnapshot()
  })
})
