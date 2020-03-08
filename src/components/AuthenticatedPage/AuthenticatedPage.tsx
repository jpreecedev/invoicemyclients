import React from 'react'
import firebase from 'firebase/app'
import { Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { NavBar } from '../../components/NavBar'
import { ROUTES } from '../../routes'

interface AuthenticatedPageProps {
  title: string
}

const AuthenticatedPage: React.FC<AuthenticatedPageProps> = ({ children, title }) => {
  const [user, initialising] = useAuthState(firebase.auth())
  return (
    <>
      {!initialising && !user && <Redirect to={ROUTES.dashboard} />}
      <NavBar />
      <main className="mt-5 mb-10 pb-10">
        <h1 className="container">
          <div className="row">
            <h1>{title}</h1>
          </div>
          <div className="row">{children}</div>
        </h1>
      </main>
    </>
  )
}

export { AuthenticatedPage }
