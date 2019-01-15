import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import { Container } from '../components/markupHelpers'
import { bpMaxSM } from '../lib/breakpoints'
import { Circles } from '../images/Circles'

const checkboxes = [
  {
    name: 'HTML',
    value: 'html',
  },
  {
    name: 'CSS',
    value: 'css',
  },
  {
    name: 'JavaScript',
    value: 'javascript',
  },
  {
    name: 'Node.js',
    value: 'nodejs',
  },
  {
    name: 'React',
    value: 'react',
  },
  {
    name: 'Flux',
    value: 'flux',
  },
  {
    name: 'Redux',
    value: 'redux',
  },
  {
    name: 'Continuous Delivery',
    value: 'continuousDelivery',
  },
  {
    name: 'TDD, BDD',
    value: 'tddBdd',
  },
  {
    name: 'Git',
    value: 'git',
  },
]

const SubmitBtn = props => {
  const { children, ...restProps } = props
  return (
    <button
      {...restProps}
      css={css`
        font-size: 16px;
        line-height: 1.25;
        padding: 12px 16px;
        background: black;
        color: white;
        margin: 30px 0 0 0;
        box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 180px;
        cursor: pointer;
        border: none;
        height: 50px;
        align-self: center;
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
    </button>
  )
}

const InputStyles = css`
  width: 100%;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-shadow: none;
  padding: 12px 16px;
  min-height: 50px;
  margin-top: 8px;
  transition: 100ms;
  box-sizing: border-box;
  resize: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    transition: 100ms;
  }
  &:focus {
    outline: none;
    border: 1px solid #adadad;
    box-sizing: border-box;

    &::placeholder {
      color: transparent;
    }
  }
`

export default ({ data: { site } }) => (
  <Layout site={site}>
    <Circles />
    <Container
      maxWidth={480}
      css={css`
        margin-top: 8vh;
        ${bpMaxSM} {
          padding-top: 30px;
          margin-top: 0;
          h1 {
            font-size: 24px;
            padding: 0 50px;
          }
        }
        h1 {
          text-align: center;
          padding-bottom: 20px;
        }
      `}
    >
      <h1>What are you interested in learning?</h1>
      <div
        css={css`
          border-radius: 5px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          grid-gap: 12px;
        `}
      >
        {checkboxes.map(item => (
          <label
            key={item.name}
            css={css`
              padding: 10px 15px;
              background: white;
              border-radius: 3px;
              cursor: pointer;
              display: flex;
              align-items: center;
              box-shadow: 0 3px 20px -5px rgba(0, 0, 0, 0.1);
            `}
          >
            <input
              type="checkbox"
              value={item.value}
              name={item.name}
              css={css`
                -webkit-appearance: checkbox;
                margin-right: 8px;
                margin-bottom: 1px;
              `}
            />
            <span>{item.name}</span>
          </label>
        ))}
      </div>

      <form>
        <div
          css={css`
            margin-top: 30px;
            display: flex;
            flex-direction: column;
          `}
        >
          <label>
            Your email address
            <input
              type="email"
              placeholder="example@email.com"
              aria-label="your email address"
              aria-required="true"
              css={css`
                ${InputStyles};
                margin-bottom: 30px;
              `}
            />
          </label>
          <label>
            Other thoughts or topics of interest?
            <textarea
              type="email"
              aria-label="other thoughts or topics of interest?"
              aria-required="false"
              rows="10"
              css={css`
                ${InputStyles};
                resize: vertical;
              `}
            />
          </label>
          <SubmitBtn>Send</SubmitBtn>
        </div>
      </form>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
