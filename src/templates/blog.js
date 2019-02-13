import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Container } from '../components/markupHelpers'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { rhythm } from '../lib/typography'
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
      <SEO />
      <Container
        maxWidth={920}
        css={css`
          margin: 50px 0 0 0;
          ${bpMaxMD} {
            margin: 0;
          }
          ${bpMaxSM} {
            margin-top: 30px;
          }
          a,
          p {
            display: inline;
          }
          small {
            display: block;
            margin-bottom: 15px;
          }
          .gatsby-image-wrapper {
            width: 340px;
          }
          h2 {
            margin-top: 0;
          }
        `}
      >
        {posts.map(({ node: post }) => (
          <div
            className="post"
            key={post.id}
            css={css`
              display: flex;
              align-items: center;
              flex-direction: row;
              margin-bottom: ${rhythm(2)};
              ${bpMaxMD} {
                flex-direction: column;
                .gatsby-image-wrapper {
                  margin-bottom: 30px;
                }
              }
            `}
          >
            {post.frontmatter.banner &&
              post.fields.slug && (
                <Link
                  to={`/${post.fields.slug}`}
                  aria-label={`View "${post.frontmatter.title}" article`}
                >
                  <Img sizes={post.frontmatter.banner.childImageSharp.sizes} />
                </Link>
              )}
            {post.frontmatter.banner &&
              !post.frontmatter.slug && (
                <Img sizes={post.frontmatter.banner.childImageSharp.sizes} />
              )}
            <div
              css={css`
                margin-left: ${post.frontmatter.banner ? '30px' : '0'};
                ${bpMaxMD} {
                  margin-left: 0;
                }
              `}
            >
              <h2
                css={css`
                  margin-top: 50px;
                  margin-bottom: 10px;
                `}
              >
                <Link
                  aria-label={`View "${post.frontmatter.title}" article`}
                  to={`/${post.fields.slug}`}
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <small>{post.frontmatter.date}</small>
              <p>{post.excerpt}</p>{' '}
              <Link
                to={`/${post.fields.slug}`}
                aria-label={`view "${post.frontmatter.title}" article`}
              >
                Continue Reading →
              </Link>
            </div>
          </div>
        ))}

        <div>
          {nextPagePath && (
            <Link to={nextPagePath} aria-label="view next page">
              Next Page →
            </Link>
          )}
          {previousPagePath && (
            <Link to={previousPagePath} aria-label="view previous page">
              ← Previous Page
            </Link>
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
