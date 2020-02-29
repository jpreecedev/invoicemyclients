import React from 'react'
import { Button, Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'

import { LandingPageHeading } from '../LandingPageHeading'

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
          style={{ minHeight: 700, padding: '1em 0em' }}
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
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Work</Menu.Item>
              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
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
