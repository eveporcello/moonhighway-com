import React from 'react'
import { css } from '@emotion/core'
import { bpMaxMD } from 'lib/breakpoints'
import Container from 'components/markupHelpers/Container'
import SEO from 'components/SEO'
import Layout from 'components/Layout'
import moon from 'images/moonHeader.jpg'

function MarkdownPage({ children, pageContext: { frontmatter } }) {
  return (
    <>
      <SEO frontmatter={frontmatter} />

      <Layout>
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
            margin-top: 7vh;
            margin-bottom: 40px;
            ${bpMaxMD} {
              margin-top: 60px;
              margin-bottom: 20px;
            }
          `}
        >
          {children}
        </Container>
      </Layout>
    </>
  )
}

export default MarkdownPage
