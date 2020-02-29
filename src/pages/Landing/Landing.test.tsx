import React from 'react'
import { LandingPage } from './Landing'

describe('<Landing /> tests', () => {
  it('should match snapshot', () => {
    expect(<LandingPage />).toMatchSnapshot()
  })
})
