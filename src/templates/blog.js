import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Container } from '../components/markupHelpers'
import { bpMaxMD } from '../lib/breakpoints'

import Layout from '../components/Layout'
import Link from '../components/Link'

const Blog = ({
  data: { site, allMdx },
  pageContext: { pagination, categories },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const posts = page
    .map(id =>
      allMdx.edges.find(
        edge =>
          edge.node.id === id &&
          edge.node.parent.sourceInstanceName !== 'pages',
      ),
    )
    .filter(post => post !== undefined)

  return (
    <Layout site={site}>
      <Container
        maxWidth={920}
        css={css`
          margin: 40px 0 0 0;
          ${bpMaxMD} {
            margin: 0;
          }
          a,
          p {
            display: inline;
          }
          small {
            display: block;
            margin-bottom: 15px;
          }
        `}
      >
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            {post.frontmatter.banner && (
              <Img sizes={post.frontmatter.banner.childImageSharp.sizes} />
            )}
            <h2
              css={css`
                margin-top: 50px;
                margin-bottom: 10px;
              `}
            >
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
            </h2>
            <small>{post.frontmatter.date}</small>
            <p>{post.excerpt}</p>{' '}
            <Link to={post.fields.slug}>Continue Reading →</Link>
          </div>
        ))}
        <hr
          css={css`
            margin: 50px 0;
          `}
        />
        <div>
          {nextPagePath && <Link to={nextPagePath}>Next Page →</Link>}
          {previousPagePath && (
            <Link to={previousPagePath}>← Previous Page</Link>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 285)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
