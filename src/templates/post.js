import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { css } from '@emotion/core'
import { Container } from '../components/markupHelpers/'
import { bpMaxMD } from '../lib/breakpoints'
import SubscribeForm from '../components/SubscribeForm'
import Layout from '../components/Layout'
import moon from '../images/moonHeader.jpg'

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <div
        css={css`
          display: flex;
          z-index: 1;
          align-items: center;
          justify-content: center;
          img {
            top: 0;
            position: absolute;
            max-width: 550px;
          }
        `}
      >
        <img src={moon} alt="moon" />
      </div>
      <Container
        maxWidth={640}
        css={css`
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
