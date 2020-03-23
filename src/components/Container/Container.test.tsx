import React from 'react'
import { render } from '@testing-library/react'
import { Container } from './Container'

describe('<Container /> tests', () => {
  it('should match snapshot', () => {
    expect(render(<Container />).container).toMatchSnapshot()
  })
})
