import React from 'react'

import { FacebookLoginButton } from '../FacebookLoginButton'
import { GoogleLoginButton } from '../GoogleLoginButton'

const SignInForm = () => {
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
              <FacebookLoginButton additionalClasses="mb-3" />
              <GoogleLoginButton />
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
