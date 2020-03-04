import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { GoogleLoginButton } from './GoogleLoginButton'

describe('<GoogleLoginButton /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<GoogleLoginButton />).container).toMatchSnapshot()
  })
})
