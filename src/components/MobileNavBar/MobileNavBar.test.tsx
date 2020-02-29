import React from 'react'
import { MobileNavBar } from './MobileNavBar'

describe('<MobileNavBar /> tests', () => {
  it('should match snapshot', () => {
    expect(
      <MobileNavBar>
        <div>Foo</div>
      </MobileNavBar>
    ).toMatchSnapshot()
  })
})
