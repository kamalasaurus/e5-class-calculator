import * as React from 'react'
import Layout from '../components/layout'
import FormComponent from '../components/form-component'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <FormComponent />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage