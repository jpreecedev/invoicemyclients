import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ROUTES } from '../../routes'
import { LandingPage } from '../../pages/Landing'
import { SignUpPage } from '../../pages/SignUp'
import { ErrorPage } from '../../pages/Error'
import { DashboardPage } from '../../pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.home}>
          <LandingPage />
        </Route>
        <Route path={ROUTES.signup}>
          <SignUpPage />
        </Route>
        <Route path={ROUTES.nav.dashboard}>
          <DashboardPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export { App }
