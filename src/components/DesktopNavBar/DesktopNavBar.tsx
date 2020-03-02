import React from 'react'
import { Responsive, Segment } from 'semantic-ui-react'

import hero from '../../assets/images/landing-hero.jpg'
import { MenuBar } from '../MenuBar'

interface DesktopNavBarProps {
  heading: React.ReactElement
}

const getWidth = () => {
  return typeof window === 'undefined'
    ? (Responsive.onlyTablet.minWidth as number)
    : window.innerWidth
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({ children, heading }) => {
  return (
    <Responsive getWidth={() => getWidth()} minWidth={Responsive.onlyTablet.minWidth}>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: '1em 0em', backgroundImage: `url(${hero})` }}
        vertical
      >
        <MenuBar inverted={true} />
        {heading}
      </Segment>

      {children}
    </Responsive>
  )
}

export { DesktopNavBar }
