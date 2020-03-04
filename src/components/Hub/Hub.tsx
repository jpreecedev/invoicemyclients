import React from 'react'

import { Trello, Edit2, AlertCircle, Lock, DollarSign, Clipboard } from 'react-feather'

const data = [
  [
    {
      title: 'Invoicing Made Easy',
      message: 'We provide an intuitive, simple to use invoice builder with attractive designs',
      icon: <Trello />
    },
    {
      title: 'Nagging',
      message: 'We politely but firmly remind your client that their invoice is due, or overdue.',
      icon: <AlertCircle />
    },
    {
      title: 'Secure',
      message:
        'We use a secure third-party payment processor to ensure the best security and legal compliance.',
      icon: <Lock />
    }
  ],
  [
    {
      title: 'Track Your Revenue',
      message: 'Use our attractive charts to easily track your revenue and income over time.',
      icon: <DollarSign />
    },
    {
      title: 'Full Audit History',
      message:
        'We keep detailed logs about every edit, update, and payment you receive for easier record keeping',
      icon: <Clipboard />
    },
    {
      title: 'Fully Customisable',
      message:
        "Don't like our email templates? Never fear, full customisation is here! Tweak to your hearts content.",
      icon: <Edit2 />
    }
  ]
]

const Hub = () => {
  return (
    <section className="py-8 bg-gray-200 mt-5 pt-9 pt-md-11 mt-8 mt-md-11">
      <h2 className="text-center font-weight-bold mb-8">
        InvoiceMyClients.com, where speed and security matters.
      </h2>
      <div className="container">
        {data.map((row, rowIndex) => {
          return (
            <div className="row mb-5" key={rowIndex}>
              {row.map((feature, featureIndex) => {
                return (
                  <div className="col-12 col-md-4 text-center" key={featureIndex}>
                    <div className="icon text-primary mb-3">{feature.icon}</div>

                    <h3>{feature.title}</h3>

                    <p className="text-muted mb-6 mb-md-0">{feature.message}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { Hub }
