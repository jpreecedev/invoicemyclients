import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import { ROUTES } from '../../routes'
import { LandingPage } from '../../pages/Landing'
import { SignUpPage } from '../../pages/SignUp'
import { ErrorPage } from '../../pages/Error'
import { DashboardPage } from '../../pages/Dashboard'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

const AuthenticatedRoute: React.FC<RouteProps> = props => {
  const [user] = useAuthState(firebase.auth())
  if (user) {
    return <Route {...props} />
  }
  return <Redirect to={ROUTES.signup} />
}

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.home}>
          <LandingPage />
        </Route>
        <Route path={ROUTES.signup}>
          <SignUpPage />
        </Route>
        <AuthenticatedRoute path={ROUTES.nav.dashboard}>
          <DashboardPage />
        </AuthenticatedRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export { App }
