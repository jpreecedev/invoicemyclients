import React from 'react'

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
              <a className="btn btn-primary" href="#!">
                Back to safety
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ErrorPage }
