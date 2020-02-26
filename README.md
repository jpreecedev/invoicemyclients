# InvoiceMyClients.com

## We make it quick, easy, and secure for your clients to pay your invoices

**InvoiceMyClients.com** is a busy freelancer friendly invoicing system that makes it easy to get paid quickly. We take care of invoicing your clients so you can get back to doing what you do best.

## Our features and MVP checklist

- [ ] A solid landing page with clear call-to-action
- [ ] An authentication system for registering, and logging in
- [ ] A dashboard that shows paid invoices vs outstanding invoices over time
- [ ] Invoice builder. Have the ability to create/edit/delete drafts and promote to full invoice.
- [ ] Full audit history. All creations/edits/payments etc should be tracked. Nags to be included.
- [ ] Integration with a cheap payment processor so the client can pay online.
- [ ] Ability to turn on nag emails to remind the customer to pay. Email templates should be customisable.
- [ ] Ability to add/edit/delete clients details including phone number, address, name etc
- [ ] Invoices to be automatically or manually reconciled once payment received (allow manual entry)
- [ ] Invoices can be downloaded as PDFs
- [ ] Comprehensive FAQ's and customer support sytem

## Pages

- [ ] Landing page
  - [ ] Hero / Sign up CTA
  - [ ] Features section
  - [ ] About us
  - [ ] Footer
- [ ] Login/registration page.
- [ ] Dashboard
  - [ ] Line chart - Revenue vs. income over time
- [ ] Clients
  - [ ] List of clients details (company name, contact name etc)
  - [ ] Add, edit, delete
  - [ ] Revenue, outstanding invoices \$ amount
- [ ] Invoices overview
  - [ ] Reconciliation / confirm payment received
- [ ] Invoice builder
  - [ ] Recent invoices underneath. Ability to copy details from list to builder
  - [ ] Send invoice
  - [ ] Set up nagging
  - [ ] Custom logo
  - [ ] Choose from one of several designs
  - [ ] Payment integration with SagePay or similar to accept payments online
  - [ ] Download PDF
- [ ] Nagging
  - [ ] Which invoices are/have been nagged
  - [ ] When to nag (time of day, frequency)
  - [ ] Ability to edit nag template
- [ ] History / audit
  - [ ] A record of every interaction with the site, including nags
- [ ] Customer support / FAQs
- [ ] Misc
  - [ ] Emails
    - [ ] Thank you for registering
    - [ ] Your invoice was paid
  - [ ] Privacy policy / terms of service
  - [ ] Changelog / roadmap
  - [ ] Cookie manager
  - [ ] Submit bug or feedback
  - [ ] Demo data

## Preferred tooling / services

- [ ] Full serverless
- [ ] MongoDB Stitch / Functions
- [ ] MongoDB Stitch static hosting
- [ ] MongoDB Stitch authentication providers
- [ ] Sentry for error tracking, Google Analytics
- [ ] Potentially use AWS SES for emails/notifications.
- [ ] Bit.ly integration or similar provider
- [ ] Create React App and UI-Kit Framework, Adobe XD for mockups

## Database Document Structure

Generic flags;

- [ ] Created, deleted, updated

Basic structure;

- [ ] User
  - [ ] Id, username, first name, last name, country, currency, preferences
  - [ ] Client `(Array)`
    - [ ] Name, contact details, currency, email
    - [ ] Invoice `(Array)`
      - [ ] Amount, line items, description, due date, logo, design
      - [ ] Nag `(Array)`
        - [ ] Sent, template, schedule
      - [ ] Payment
        - [ ] Transaction Id, amount, date
- [ ] Audit log
  - [ ] Action, date, entity, description
