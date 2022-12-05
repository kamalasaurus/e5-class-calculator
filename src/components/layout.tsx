import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/" className="text-indigo-600 underline">Home</Link></li>
          <li><Link to="/about" className="text-indigo-600 underline">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout