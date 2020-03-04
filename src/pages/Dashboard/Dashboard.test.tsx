import React from 'react'
import { renderWithRouter } from '../../test-utils'

import { DashboardPage } from './Dashboard'

describe('<Dashboard /> tests', () => {
  it('should match snapshot', () => {
    expect(renderWithRouter(<DashboardPage />).container).toMatchSnapshot()
  })
})
