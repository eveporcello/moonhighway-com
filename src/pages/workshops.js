import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { Container } from '../components/markupHelpers/'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'

export default function Workshops({ data: { site, workshops } }) {
  return (
    <Layout site={site} noFooter>
      <h1>Workshops</h1>
      {workshops.edges.map(({ node: workshop }) => (
        <div key={workshop.id}>
          <Link to={workshop.fields.slug}>{workshop.frontmatter.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    workshops: allMdx(filter: { fields: { isWorkshop: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
