import React from 'react'

import { renderWithRouter } from '../../test-utils'
import { LandingPageHeading } from './LandingPageHeading'

describe('<LandingPageHeading /> tests', () => {
  it('should match mobile snapshot', () => {
    expect(renderWithRouter(<LandingPageHeading mobile={false} />).container).toMatchSnapshot()
  })

  it('should match desktop snapshot', () => {
    expect(renderWithRouter(<LandingPageHeading mobile={true} />).container).toMatchSnapshot()
  })
})
