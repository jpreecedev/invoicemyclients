import React from 'react'
import { LandingPageHeading } from './LandingPageHeading'

describe('<LandingPageHeading /> tests', () => {
  it('should match mobile snapshot', () => {
    expect(<LandingPageHeading mobile={false} />).toMatchSnapshot()
  })

  it('should match desktop snapshot', () => {
    expect(<LandingPageHeading mobile={true} />).toMatchSnapshot()
  })
})
