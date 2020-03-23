import React from 'react'
import { render } from '@testing-library/react'
import { Card } from './Card'

describe('<Card /> tests', () => {
  it('should match snapshot', () => {
    expect(render(<Card />).container).toMatchSnapshot()
  })
})
