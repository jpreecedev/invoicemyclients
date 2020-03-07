import React from 'react'
import firebase from 'firebase/app'
import { Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { NavBar } from '../../components/NavBar'
import { ROUTES } from '../../routes'

const AuthenticatedPage: React.FC = ({ children }) => {
  const [user, initialising] = useAuthState(firebase.auth())
  return (
    <>
      {!initialising && !user && <Redirect to={ROUTES.nav.dashboard} />}
      <NavBar />
      <main className="container mt-5">
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </main>
    </>
  )
}

export { AuthenticatedPage }
