import React from 'react'
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom'

import { LandingPage } from '../../pages/Landing'
import { SignUpPage } from '../../pages/SignUp'
import { ROUTES } from '../../routes'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LandingPage}>
          <LandingPage />
        </Route>
        <Route path={ROUTES.SignUpPage}>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  )
}

export { App }
