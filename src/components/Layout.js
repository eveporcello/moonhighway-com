import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/core'
import { fonts } from '../lib/typography'
import { bpMaxSM } from '../lib/breakpoints'

import mdxComponents from './mdx'
import Header from './Header'
import Footer from './Footer'

export const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: ${fonts.regular}, sans-serif;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    background: #fafafa;
    color: #090909;
    //scroll-behavior: smooth;
    max-width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.semibold}, sans-serif;
    font-weight: bold;
    a {
      color: inherit;
    }
  }
  h3 {
    margin-top: 30px;
    font-size: 20px;
    font-family: ${fonts.bold}, sans-serif;
  }
  p {
    margin: 0 0 20px 0;
    &:last-child {
      margin: 0;
    }
    em {
      font-family: ${fonts.regularItalic}, sans-serif;
    }
    strong {
      em {
        font-family: ${fonts.semiboldItalic}, sans-serif;
      }
    }
  }
  blockquote {
    text-align: center;
    font-size: 22px;
    p {
      padding-top: 15px;
      font-size: 22px !important;
      font-family: ${fonts.regularItalic}, sans-serif;
    }
  }
  ul,
  ol {
    list-style-position: inside;
    margin: 25px 0;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: blue;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #c4c4c4;
      outline: none;
    }
  }
  hr {
    margin-top: 50px;
  }
  input,
  textarea,
  button {
    -webkit-appearance: none;
  }

  ${() => {
    /* Override PrismJS Defaults */ return null
  }} pre {
    overflow-x: auto;
    background-color: #061526 !important;
    border-radius: 4px;
    font-size: 14px;
    padding: 20px;
    margin: 30px 0;
    ${bpMaxSM} {
      padding: 10px;
    }
    /* Track */
    ::-webkit-scrollbar {
      width: 100%;
      height: 7px;
      border-radius: 0 0 4px 4px;
    }
    ::-webkit-scrollbar-track {
      background: #061526;
      border-radius: 0 0 4px 4px;
      border: 1px solid hsla(0, 0%, 0%, 0.2);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
  }
  .gatsby-highlight-code-line {
    background-color: #4f424c;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }
  code {
    font-size: 95%;
    color: black;
    background: hsla(0, 0%, 0%, 0.05);
    padding: 2px 5px;
    border-radius: 2px;
  }
`

function Layout({
  data,
  frontmatter = {},
  children,
  dark,
  noFooter,
  noSubscribeForm,
  noNav,
}) {
  const {
    site: {
      siteMetadata: {
        description: siteDescription,
        keywords: siteKeywords,
        title: siteTitle,
      },
    },
  } = data

  const {
    keywords = siteKeywords,
    description = siteDescription,
    title = siteTitle,
  } = frontmatter

  return (
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
        <div
          css={css`
            flex-grow: 1;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            ${bpMaxSM} {
              justify-content: flex-start;
                        
          `}
        >
          {children}
        </div>
      </MDXProvider>
      {!noFooter && <Footer noSubscribeForm={noSubscribeForm} noNav={noNav} />}
    </div>
  )
}

export default function LayoutWithSiteData(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              keywords
            }
          }
        }
      `}
      render={data => <Layout data={data} {...props} />}
    />
  )
}
