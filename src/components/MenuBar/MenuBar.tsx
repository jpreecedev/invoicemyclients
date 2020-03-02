import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface MenuBarProps {
  inverted: boolean
}

const MenuBar: React.FC<MenuBarProps> = ({ inverted }) => {
  return (
    <Menu inverted={inverted} pointing={inverted} secondary={inverted} size="large">
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
  )
}

export { MenuBar }
