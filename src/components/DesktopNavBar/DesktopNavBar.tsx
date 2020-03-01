import React from 'react'
import { Button, Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'

import { LandingPageHeading } from '../LandingPageHeading'
import hero from '../../assets/images/landing-hero.jpg'

const getWidth = () => {
  return typeof window === 'undefined'
    ? (Responsive.onlyTablet.minWidth as number)
    : window.innerWidth
}

const DesktopNavBar: React.FC = ({ children }) => {
  const [fixed, setFixed] = React.useState(false)

  return (
    <Responsive getWidth={() => getWidth()} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: '1em 0em', backgroundImage: `url(${hero})` }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : undefined}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a">Features</Menu.Item>
              <Menu.Item as="a">Pricing</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" primary style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <LandingPageHeading />
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  )
}

export { DesktopNavBar }
