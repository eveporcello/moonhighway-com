import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data: { site } }) => (
  <Layout site={site} noFooter>
    <h1>Contact</h1>
    <p>Contact form.</p>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
