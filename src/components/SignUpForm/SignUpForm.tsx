import React from 'react'

import { useBodyClass } from '../../hooks'
import { SectionContainer } from '../SectionContainer'
import { FacebookLoginButton } from '../FacebookLoginButton'
import { GoogleLoginButton } from '../GoogleLoginButton'

import styles from './styles.module.css'

const SignUpForm = () => {
  useBodyClass(styles.centered)

  return (
    <SectionContainer
      id="signup"
      title="Sign Up / Log In"
      subtitle="To ensure maximum security and simplicity, we recommend signing up/logging in using a secure
    authentication provider"
      sectionClassNames={styles.section}
    >
      <FacebookLoginButton />
      <GoogleLoginButton />
      <small>
        If you do not already have an account, we will create one automatically for you.
      </small>
    </SectionContainer>
  )
}

export { SignUpForm }
