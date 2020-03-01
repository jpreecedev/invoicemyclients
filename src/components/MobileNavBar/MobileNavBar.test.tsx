import React from 'react'
import { render } from '@testing-library/react'
import { MobileNavBar } from './MobileNavBar'

describe('<MobileNavBar /> tests', () => {
  it('should match snapshot', () => {
    expect(
      render(
        <MobileNavBar>
          <div>Foo</div>
        </MobileNavBar>
      ).container
    ).toMatchSnapshot()
  })
})
