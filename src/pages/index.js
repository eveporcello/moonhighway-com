import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'

export default function Index({ data: { site } }) {
  return (
    <Layout site={site}>
      <div
        css={css`
          flex-grow: 1;
          width: 100%;
        `}
      >
        Page content
      </div>
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
