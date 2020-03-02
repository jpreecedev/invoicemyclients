import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../routes'

const Pricing = () => {
  return (
    <section className="py-8 mt-10 mb-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="card shadow-lg mb-6 mb-md-0">
              <div className="card-body">
                <div className="text-center mb-3">
                  <span className="badge badge-pill badge-primary-soft">
                    <span className="h6 text-uppercase">Free</span>
                  </span>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="price display-2 mb-0">$0.00</span>
                </div>

                <p className="text-center text-muted mb-5">Free Forever</p>

                <div className="d-flex">
                  <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p>Every feature, free for life.</p>
                </div>
                <div className="d-flex">
                  <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p className="mb-5">Never pay a penny.</p>
                </div>

                <Link to={ROUTES.signup} className="btn btn-block btn-primary">
                  Sign Up Now <i className="fe fe-arrow-right ml-3"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="card shadow-lg mb-md-0">
              <div className="card-body">
                <div className="text-center mb-3">
                  <span className="badge badge-pill badge-primary-soft">
                    <span className="h6 text-uppercase">Pay As You Get Paid</span>
                  </span>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="price display-2 mb-0" data-annual="49" data-monthly="69">
                    From 2.4%
                  </span>
                </div>

                <p className="text-center text-muted mb-5">Pay when your client pays you</p>

                <div className="d-flex">
                  <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p>2.4% for European Payments</p>
                </div>
                <div className="d-flex">
                  <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p className="mb-5">3.9% for International Payments</p>
                </div>

                <Link to={ROUTES.signup} className="btn btn-block btn-primary-soft">
                  Sign Up Now <i className="fe fe-arrow-right ml-3"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Pricing }
