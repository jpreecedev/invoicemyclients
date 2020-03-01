import React from 'react'
import clsx from 'clsx'
import { Button, Icon } from 'semantic-ui-react'

import styles from './styles.module.css'

const FacebookLoginButton = () => {
  return (
    <Button fluid size="big" className={clsx(styles.space, 'facebook')}>
      <Icon name="facebook" />
      Log In Using Facebook
    </Button>
  )
}

export { FacebookLoginButton }
