import React from 'react'

import { siteConfig } from '../../site-config'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          {siteConfig.title}
        </a>

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
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Clients
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Invoices
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Nagging
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>

          <a className="navbar-btn btn btn-sm btn-primary lift ml-auto" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  )
}

export { NavBar }
