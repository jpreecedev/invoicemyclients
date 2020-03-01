import React from 'react'
import { render } from '@testing-library/react'
import { DesktopNavBar } from './DesktopNavBar'

describe('<DesktopNavBar /> tests', () => {
  it('should match snapshot', () => {
    const heading = <h1>Heading</h1>

    expect(
      render(
        <DesktopNavBar heading={heading}>
          <div>Foo</div>
        </DesktopNavBar>
      ).container
    ).toMatchSnapshot()
  })
})
