import React from 'react'
import firebase from 'firebase/app'
import { useAuthState } from 'react-firebase-hooks/auth'

import { NavBar } from '../../components/NavBar'

const DashboardPage = () => {
  const [user] = useAuthState(firebase.auth())
  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1>Welcome, {user?.displayName}!</h1>
          </div>
        </div>
      </main>
    </>
  )
}

export { DashboardPage }
