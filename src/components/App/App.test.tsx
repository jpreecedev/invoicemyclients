import React from 'react'
import { App } from './App'

describe('<App /> tests', () => {
  it('should match snapshot', () => {
    expect(<App />).toMatchSnapshot()
  })
})
