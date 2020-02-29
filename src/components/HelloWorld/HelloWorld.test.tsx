import React from 'react'
import { render } from '@testing-library/react'
import { HelloWorld } from './HelloWorld'

describe('<HelloWorld /> tests', () => {
  it("should render 'Hello, World!'", () => {
    const { getByText } = render(<HelloWorld />)
    getByText('Hello, world!')
  })
})
