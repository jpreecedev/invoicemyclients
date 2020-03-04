import React from 'react'

import { NavBar } from '../../components/NavBar'

const DashboardPage = () => {
  return (
    <>
      <NavBar />
      <main className="container mt-10">
        <div className="row">
          <div className="col-12">
            <h1>Welcome, User!</h1>
          </div>
        </div>
      </main>
    </>
  )
}

export { DashboardPage }
