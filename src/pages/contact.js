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
      <input
        type="email"
        placeholder="Your email address"
        css={css`
          margin-top: 30px;
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
