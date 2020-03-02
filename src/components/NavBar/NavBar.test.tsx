import React from 'react'
import { render } from '@testing-library/react'
import { NavBar } from './NavBar'

describe('<NavBar /> tests', () => {
  it('should match snapshot', () => {
    const heading = <h1>Heading</h1>

    expect(
      render(
        <NavBar heading={heading}>
          <div>Foo</div>
        </NavBar>
      ).container
    ).toMatchSnapshot()
  })
})
