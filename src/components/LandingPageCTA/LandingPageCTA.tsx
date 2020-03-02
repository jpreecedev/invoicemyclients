import React from 'react'
import { ArrowRight } from 'react-feather'

import illustration1Cropped from '../../assets/img/illustrations/illustration-1-cropped.png'
import illustration3Cropped from '../../assets/img/illustrations/illustration-3-cropped.png'

import { ROUTES } from '../../routes'

const LandingPageCTA = () => {
  return (
    <section
      className="py-10 py-md-13 bg-gray-200 bg-between"
      style={{ backgroundImage: `url(${illustration1Cropped}), url(${illustration3Cropped})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="font-weight-bold">Try InvoiceMyClients.com for free.</h2>

            <p className="font-size-lg text-muted mb-8 px-lg-9">
              We can help you save time, save money, and help make it easy for your clients to pay
              your invoices on time.
            </p>

            <a className="btn btn-primary lift mt-3" href={ROUTES.signup}>
              It&apos;s free to get started <ArrowRight className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { LandingPageCTA }
