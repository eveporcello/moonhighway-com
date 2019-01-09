import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import AboutCopy from '../data/about.mdx'

export default ({ data: { site } }) => (
  <div>
    <Layout site={site}>
      <h1>About</h1>
      <p>Work in progress</p>
      <section
        css={css`
          p,
          h1,
          h2,
          h3,
          h4,
          blockquote {
            max-width: 640px;
          }
        `}
      >
        <AboutCopy />
      </section>
    </Layout>
  </div>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
