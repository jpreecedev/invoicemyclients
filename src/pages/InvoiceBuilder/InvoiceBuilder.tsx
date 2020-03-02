import React from 'react'
import {
  Responsive,
  Menu,
  Container,
  Icon,
  Segment,
  Sidebar,
  Header,
  HeaderSubheader
} from 'semantic-ui-react'

import { NavBarLogo } from '../../components/NavBarLogo'

import styles from './styles.module.css'

const getWidth = () => {
  return typeof window === 'undefined'
    ? (Responsive.onlyTablet.minWidth as number)
    : window.innerWidth
}

const InvoiceBuilderPage: React.FC = () => {
  const [sidebarOpened, setSidebarOpened] = React.useState(false)

  return (
    <>
      <Responsive getWidth={() => getWidth()} minWidth={Responsive.onlyTablet.minWidth}>
        <Menu inverted={false} pointing={false} secondary={false} size="large" borderless>
          <Container>
            <Menu.Item as="a" fitted>
              <NavBarLogo />
            </Menu.Item>
            <Menu.Item position="right">
              <Menu.Item as="a">Dashboard</Menu.Item>
              <Menu.Item as="a">Clients</Menu.Item>
              <Menu.Item as="a">Invoices</Menu.Item>
              <Menu.Item as="a">Nagging</Menu.Item>
              <Menu.Item as="a">Support</Menu.Item>
            </Menu.Item>
          </Container>
        </Menu>
        <Container className="large top margin">
          <Header>Create a new invoice</Header>
          <HeaderSubheader>
            You are raising a new invoice for <strong>Jon Preece Development Ltd</strong>.
          </HeaderSubheader>
        </Container>
      </Responsive>
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item>
            <span className={styles.menuHeader}>Menu</span>
          </Menu.Item>
          <Menu.Item as="a">Dashboard</Menu.Item>
          <Menu.Item as="a">Clients</Menu.Item>
          <Menu.Item as="a">Invoices</Menu.Item>
          <Menu.Item as="a">Nagging</Menu.Item>
          <Menu.Item as="a">Support</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment inverted textAlign="center" vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={() => setSidebarOpened(true)}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item as="a" position="right">
                  Go to dashboard
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </Sidebar.Pusher>
      </Responsive>
    </>
  )
}

export { InvoiceBuilderPage }
