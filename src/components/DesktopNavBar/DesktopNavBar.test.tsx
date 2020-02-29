import React from 'react'
import { DesktopNavBar } from './DesktopNavBar'

describe('<DesktopNavBar /> tests', () => {
  it('should match snapshot', () => {
    expect(
      <DesktopNavBar>
        <div>Foo</div>
      </DesktopNavBar>
    ).toMatchSnapshot()
  })
})
