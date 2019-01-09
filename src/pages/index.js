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
      width: 100vw;
      background: #090909;
      color: white;
      padding: 20px 0;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 80px;
      ${bpMaxMD} {
        padding: 20px 20px;
        margin-bottom: 40px;
      }
      ${bpMaxSM} {
        height: auto;
        padding: 100px 10px 30px 10px;
        margin-bottom: 20px;
      }
    `}
  >
    <Container>
      <div
        css={css`
          display: flex;
          ${bpMaxSM} {
            flex-direction: column-reverse;
            align-items: center;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: 50%;
            height: 90vh;
            flex-shrink: 0;
            ${bpMaxSM} {
              width: 100%;
              height: auto;
            }
          `}
        >
          <h2
            css={css`
              color: #fff;
              font-size: 2.4rem;
              line-height: 1.5;
              padding-top: 35vh;
              margin: 0;
              max-width: 540px;
              ${bpMaxSM} {
                line-height: 1.4;
                font-size: 1.6rem;
                padding: 30px 0 10px 0;
              }
            `}
          >
            The cutting edge JavaScript training for engineers of all skill
            levels
          </h2>
          <p
            css={css`
              padding-bottom: 50px;
              ${bpMaxSM} {
                padding-top: 30px;
                padding-bottom: 0;
              }
            `}
          >
            View our trainings ↓
          </p>
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
              max-width: 90%;
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
      <section
        css={css`
          padding: 0;
          ${bpMaxMD} {
            padding: 0 40px;
          }
          ${bpMaxSM} {
            padding: 0 20px;
          }
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
