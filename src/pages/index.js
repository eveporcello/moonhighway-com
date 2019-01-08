import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { Container } from '../components/markupHelpers'

import imgMoon from '../images/moon.jpg'

const Hero = () => (
  <section
    css={css`
      background: #090909;
      padding: 20px 0 70px 0;
    `}
  >
    <Container>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            width: 50%;
            flex-shrink: 0;
          `}
        >
          <h2
            css={css`
              color: #fff;
              font-size: 40px;
              line-height: 1.5;
              margin: 0;
            `}
          >
            The cutting edge JavaScript training for engineers of all skill
            levels
          </h2>
        </div>
        <div>
          <img
            src={imgMoon}
            alt=""
            css={css`
              display: block;
              max-width: 100%;
            `}
          />
        </div>
      </div>
    </Container>
  </section>
)

export default function Index({ data: { site } }) {
  return (
    <Layout site={site} dark>
      <Hero />
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
