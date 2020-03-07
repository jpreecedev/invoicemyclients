import React from 'react'
import firebase from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect } from 'react-router-dom'

import { ROUTES } from '../../routes'

const uiConfig = {
  signInFlow: '',
  signInSuccessUrl: '/dashboard',
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
}

const SignInForm = () => {
  const [user, initialising, error] = useAuthState(firebase.auth())

  if (initialising) {
    return null
  }

  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-12 col-md-6 py-8 py-md-11 mb-10">
            <h1 className="mb-0 font-weight-bold text-center">Sign In or Register</h1>

            <p className="mb-6 text-center text-muted">
              To ensure maximum security and simplicity, we recommend signing up/logging in using a
              secure authentication provider.
            </p>

            <div className="mb-8">
              {!user && <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />}
              {user && (
                <>
                  <Redirect to={ROUTES.nav.dashboard} />
                  <p className="text-center">One sec whilst we redirect you...</p>
                </>
              )}
              {error && <div className="alert alert-danger">Sorry something went wrong</div>}
            </div>

            <small className="d-block text-center text-muted">
              If you do not already have an account, we will create one for you.
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export { SignInForm }
