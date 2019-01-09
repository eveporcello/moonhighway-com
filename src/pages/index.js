import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { Container } from '../components/markupHelpers/'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import Item from '../components/Item'

import imgMoon from '../images/moon.jpg'
import categories from '../data/categories'

const Button = props => {
  const { children, ...restProps } = props
  return (
    <Link
      {...restProps}
      css={css`
        padding: 13px 20px;
        background: white;
        color: black;
        margin: 0;
        box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        display: inline-flex;
        align-items: center;
      `}
    >
      <span>{children}</span>
      <span
        css={css`
          margin-left: 20px;
        `}
      >
        →
      </span>
    </Link>
  )
}

const Hero = () => (
  <section
    css={css`
      width: 100%;
      background: #090909;
      padding: 30px 0 50px 0;
      height: 75vh;
      display: flex;
      ${bpMaxMD} {
        padding: 20px 0 40px 0;
        height: 80vh;
      }
      ${bpMaxSM} {
        height: auto;
        padding: 10px 0 30px 0;
      }
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-grow: 1;
          ${bpMaxSM} {
            flex-direction: column-reverse;
            align-items: center;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            width: 50%;
            flex-shrink: 0;
            ${bpMaxSM} {
              width: 100%;
              margin-top: 60px;
            }
          `}
        >
          <h2
            css={css`
              color: #fff;
              font-size: 2.4rem;
              line-height: 1.5;
              margin: 0;
              max-width: 540px;
              ${bpMaxSM} {
                line-height: 1.4;
                font-size: 1.6rem;
              }
            `}
          >
            The cutting edge JavaScript training for engineers of all skill
            levels
          </h2>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: flex-end;
            ${bpMaxSM} {
              justify-content: center;
            }
          `}
        >
          <img
            src={imgMoon}
            alt=""
            css={css`
              display: block;
              max-width: 85%;
              margin: 0;
            `}
          />
        </div>
      </div>
      <div
        css={css`
          align-self: flex-start;
          color: white;
          cursor: pointer;
          margin-top: 40px;
        `}
      >
        View our trainings ↓
      </div>
    </Container>
  </section>
)

export default function Index({ data: { site } }) {
  return (
    <Layout site={site} dark>
      <Hero />
      <section
        css={css`
          padding: 80px 0;
          ${bpMaxMD} {
            padding: 40px 0;
          }
          ${bpMaxSM} {
            padding: 20px 0;
          }
        `}
      >
        <div
          css={css`
            max-width: 920px;
            margin: 0 auto;
          `}
        >
          {categories.map(category => (
            <Item
              key={category.title}
              title={category.title}
              description={category.description}
              thumb={category.thumb}
              button={category.button}
              length={category.length}
              tags={category.tags}
            />
          ))}
        </div>
      </section>
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
