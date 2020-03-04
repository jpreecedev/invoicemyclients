import React from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'
import { useAuthState } from 'react-firebase-hooks/auth'

import { ROUTES } from '../../routes'

const SignUpButton = () => {
  const [user] = useAuthState(firebase.auth())

  return (
    <>
      {!user && (
        <Link className="navbar-btn btn btn-sm btn-primary lift ml-auto" to={ROUTES.signup}>
          Sign Up
        </Link>
      )}
      {user && (
        <button
          className="navbar-btn btn btn-sm btn-primary lift ml-auto"
          onClick={() => firebase.auth().signOut()}
        >
          Log out
        </button>
      )}
    </>
  )
}

export { SignUpButton }
