import React from 'react'
import { render } from '@testing-library/react'
import { Contacts } from './Contacts'

describe('<Contacts /> tests', () => {
  it('should match snapshot', () => {
    expect(render(<Contacts />).container).toMatchSnapshot()
  })
})
