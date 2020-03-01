import React from 'react'
import { Button, Container, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { siteConfig } from '../../site-config'
import { ROUTES } from '../../routes'

interface LandingPageHeadingProps {
  mobile?: boolean
}

const LandingPageHeading: React.FC<LandingPageHeadingProps> = ({ mobile = false }) => (
  <Container text>
    <Header
      as="h1"
      content={siteConfig.title}
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as="h2"
      content={siteConfig.tagline}
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        marginBottom: '2rem'
      }}
    />
    <Button primary size="huge" as={Link} to={ROUTES.SignUpPage}>
      It&apos;s free to get started
      <Icon name="arrow right" />
    </Button>
  </Container>
)

export { LandingPageHeading }
