import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import { Container } from '../components/markupHelpers'

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
        border-radius: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 200px;
        cursor: pointer;
        border: none;
        height: 50px;
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
  border: 1px solid #d7d7d7;
  box-shadow: none;
  padding: 12px 16px;
  min-height: 50px;
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
  <Layout site={site} noFooter>
    <h1>Contact us</h1>
    <Container>
      <div
        css={css`
          border-radius: 5px;
          padding: 20px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.4);
        `}
      >
        {checkboxes.map(item => (
          <label>
            <input
              type="checkbox"
              value={item.value}
              name={item.name}
              css={css`
                -webkit-appearance: checkbox;
              `}
            />
            <span>{item.name}</span>
          </label>
        ))}
      </div>
      <div
        css={css`
          margin-top: 30px;
        `}
      >
        <form>
          <input
            type="email"
            placeholder="Your email address"
            css={css`
              ${InputStyles};
            `}
          />
          <textarea
            type="email"
            placeholder="Other thoughts or topics of interest?"
            rows="10"
            css={css`
              margin-top: 30px;
              ${InputStyles};
            `}
          />
          <SubmitBtn>Subscribe</SubmitBtn>
        </form>
      </div>
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
