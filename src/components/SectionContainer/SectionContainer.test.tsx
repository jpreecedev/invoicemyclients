import React from 'react'
import { render } from '@testing-library/react'
import { SectionContainer } from './SectionContainer'

describe('<SectionContainer /> tests', () => {
  it('should match snapshot', () => {
    expect(
      render(
        <SectionContainer
          id="test"
          title="Test Container"
          subtitle="Test Sub Title"
          sectionClassNames="optional-classes"
        />
      ).container
    ).toMatchSnapshot()
  })
})
