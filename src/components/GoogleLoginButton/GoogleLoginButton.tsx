import React from 'react'
import clsx from 'clsx'
import { Button, Icon } from 'semantic-ui-react'

import styles from './styles.module.css'

const GoogleLoginButton = () => (
  <Button fluid size="big" className={clsx(styles.space, 'google plus')}>
    <Icon name="google" />
    Log In Using Google
  </Button>
)

export { GoogleLoginButton }
