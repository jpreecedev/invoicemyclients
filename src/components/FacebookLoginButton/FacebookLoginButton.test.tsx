import React from 'react'
import { render } from '@testing-library/react'
import { FacebookLoginButton } from './FacebookLoginButton'

describe('<FacebookLoginButton /> tests', () => {
  it('should match snapshot', () => {
    expect(render(<FacebookLoginButton />).container).toMatchSnapshot()
  })
})
