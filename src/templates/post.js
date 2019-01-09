import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { css } from '@emotion/core'

import Layout from '../components/Layout'

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <div
        css={css`
          max-width: 640px;
          display: flex;
          flex-direction: column;
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
        <h1>{mdx.frontmatter.title}</h1>
        <h2>{mdx.frontmatter.date}</h2>
        {mdx.frontmatter.banner && (
          <Img
            sizes={mdx.frontmatter.banner.childImageSharp.sizes}
            alt={site.siteMetadata.keywords.join(', ')}
          />
        )}
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        banner {
          childImageSharp {
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        slug
        keywords
      }
      code {
        body
      }
    }
  }
`
