import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { Container } from '../components/markupHelpers'

export default function Index({ data: { site } }) {
  return (
    <Layout site={site} dark>
      <Container>Page content</Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
