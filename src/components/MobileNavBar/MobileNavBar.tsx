import React from 'react'
import { Button, Container, Icon, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'

interface MobileNavBarProps {
  heading: React.ReactElement
}

const getWidth = () => {
  return typeof window === 'undefined'
    ? (Responsive.onlyTablet.minWidth as number)
    : window.innerWidth
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ children, heading }) => {
  const [sidebarOpened, setSidebarOpened] = React.useState(false)

  return (
    <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as="a">Features</Menu.Item>
        <Menu.Item as="a">Pricing</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 350, padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={() => setSidebarOpened(true)}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" primary style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
          {heading}
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

export { MobileNavBar }
