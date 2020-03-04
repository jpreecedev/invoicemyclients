import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { LandingPage } from '../../pages/Landing'
import { SignUpPage } from '../../pages/SignUp'
import { ROUTES } from '../../routes'

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
      </Switch>
    </Router>
  )
}

export { App }
