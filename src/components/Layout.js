import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
import { css, Global } from '@emotion/core'

import mdxComponents from './mdx'
import Header from './Header'
import Footer from './Footer'

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    background: #fafafa;
  }

  ${() => {
    /* Override PrismJS Defaults */ return null
  }} pre {
    background-color: #061526 !important;
    border-radius: 4px;
    font-size: 14px;
    padding: 5px;
  }

  .gatsby-highlight-code-line {
    background-color: #4f424c;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }
`

export default ({ site, frontmatter = {}, children, dark }) => {
  const {
    title,
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <Fragment>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
        `}
      >
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Global styles={globalStyles} />
        <Header dark={dark} />
        <MDXProvider components={mdxComponents}>
          <Fragment>
            <div
              css={css`
                flex-grow: 1;
                width: 100%;
              `}
            >
              {children}
            </div>
          </Fragment>
        </MDXProvider>
        <Footer />
      </div>
    </Fragment>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author
      keywords
    }
  }
`
