import React from 'react'
import { Link } from 'react-router-dom'

import { siteConfig } from '../../site-config'
import { ROUTES } from '../../routes'
import { SignUpButton } from '../SignUpButton'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to={ROUTES.home}>
          {siteConfig.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fe fe-x"></i>
          </button>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link" to={ROUTES.nav.dashboard}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to={ROUTES.nav.clients}>
                Clients
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to={ROUTES.nav.invoices}>
                Invoices
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to={ROUTES.nav.nagging}>
                Nagging
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to={ROUTES.nav.support}>
                Support
              </Link>
            </li>
          </ul>

          <SignUpButton />
        </div>
      </div>
    </nav>
  )
}

export { NavBar }
