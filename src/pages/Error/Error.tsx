import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

const ErrorPage: React.FC = () => {
  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-12 col-md-6 py-8 py-md-11">
            <h1 className="display-3 font-weight-bold text-center">Error.</h1>

            <p className="mb-5 text-center text-muted">
              We ran into an issue, for which we apologise. We have logged the error and we will
              investigate soon.
            </p>

            <div className="text-center">
              <Link to={ROUTES.dashboard} className="btn btn-primary">
                Back to safety
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ErrorPage }
