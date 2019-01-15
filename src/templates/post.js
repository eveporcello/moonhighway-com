import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import { Container } from '../components/markupHelpers/'
import { bpMaxMD } from '../lib/breakpoints'
import SubscribeForm from '../components/SubscribeForm'
import Layout from '../components/Layout'
import moon from '../images/moonHeader.webp'

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />
      <div
        css={css`
          display: flex;
          z-index: 1;
          align-items: center;
          justify-content: center;
          top: 0;
          position: absolute;
          height: 130px;
          width: 100%;
          background: url(${moon}) no-repeat;
          background-size: 550px;
          background-position: top center;
        `}
      />
      <Container
        maxWidth={640}
        css={css`
          z-index: 999;
          margin-top: 8vh;
          margin-bottom: 100px;
          ${bpMaxMD} {
            margin-top: 30px;
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
      </Container>
      <SubscribeForm />
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
