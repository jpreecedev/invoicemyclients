import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { FacebookLoginButton } from './FacebookLoginButton'

describe('<FacebookLoginButton /> tests', () => {
  it('should match snapshot', () => {
    expect(
      renderWithRouter(<FacebookLoginButton additionalClasses="test-class" />).container
    ).toMatchSnapshot()
  })
})
