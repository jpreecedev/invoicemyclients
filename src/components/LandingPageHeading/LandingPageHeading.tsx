import React from 'react'
import { Link } from 'react-router-dom'

import { siteConfig } from '../../site-config'
import { ROUTES } from '../../routes'

interface LandingPageHeadingProps {
  mobile?: boolean
}

const LandingPageHeading: React.FC<LandingPageHeadingProps> = ({ mobile = false }) => (
  <div>
    <h1>{siteConfig.title}</h1>
    <p>{siteConfig.tagline}</p>
    <Link to={ROUTES.SignUpPage}>It&apos;s free to get started</Link>
  </div>
)

export { LandingPageHeading }
