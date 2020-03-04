import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 py-md-11 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="text-white">InvoiceMyClients.com</p>
            <a
              href="https://jpreecedev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700"
            >
              &copy; Jon Preece Development Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
