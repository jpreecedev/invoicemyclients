import React from 'react'

import { LandingPageHeading } from '../../components/LandingPageHeading'
import { DesktopNavBar } from '../../components/DesktopNavBar'

const LandingPage: React.FC = ({ children }) => (
  <>
    <DesktopNavBar heading={<LandingPageHeading />}>{children}</DesktopNavBar>
    <p>Landing page</p>
  </>
)

export { LandingPage }
