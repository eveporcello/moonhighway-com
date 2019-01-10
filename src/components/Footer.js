import React from 'react'
import { css } from '@emotion/core'
import Link from './Link'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import { fonts } from '../lib/typography'

import { Container } from './markupHelpers'
import Logo from './Logo'

import categories from '../data/categories'

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
        margin: 0;
        box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.15);
        border-radius: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
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

const InputWrapperStyles = css`
  width: 32.5%;
  flex-shrink: 0;
  ${bpMaxSM} {
    width: 100%;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`
const InputStyles = css`
  width: 100%;
  display: block;
  border: 1px solid #d7d7d7;
  box-shadow: none;
  padding: 12px 16px;
  height: 50px;
  transition: 100ms;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    transition: 100ms;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`

const Footer = () => (
  <footer
    css={css`
      width: 100%;
      margin-top: 70px;
      background: #fafafa;
      flex-shrink: 0;
      h4 {
        font-size: 20px;
        font-family: ${fonts.bold}, sans-serif;
      }
    `}
  >
    <Container
      maxWidth={1000}
      css={css`
        background: white;
        box-shadow: 0 10px 50px -10px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        padding-top: 80px;
        padding-bottom: 80px;
        ${bpMaxSM} {
          padding-top: 40px;
          padding-bottom: 40px;
        }
      `}
    >
      <Container maxWidth={900}>
        <div>
          <h4>Subscribe to get our latest content by email</h4>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              ${bpMaxSM} {
                flex-direction: column;
                max-width: 400px;
                margin: 0 auto;
              }
            `}
          >
            <div css={InputWrapperStyles}>
              <input
                type="text"
                placeholder="Your first name"
                css={InputStyles}
              />
            </div>
            <div css={InputWrapperStyles}>
              <input
                type="text"
                placeholder="Your email address"
                css={InputStyles}
              />
            </div>
            <div css={InputWrapperStyles}>
              <SubmitBtn>Subscribe</SubmitBtn>
              <div
                css={css`
                  opacity: 0.6;
                  color: #090909;
                  font-size: 12px;
                  line-height: 1.25;
                  margin-top: 20px;
                `}
              >
                We won't send you spam. Unsubscribe at any time.
              </div>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: flex-start;
            margin-top: 80px;
            a {
              color: #090909;
            }
          `}
        >
          <div>
            <h4>
              <Link to="/#trainings">Trainings</Link>
            </h4>
            {categories.map(category => (
              <div
                key={category.title}
                css={css`
                  margin: 10px 0;
                  .active {
                    opacity: 0.8;

                    font-family: ${fonts.semibold}, sans-serif;
                    ::before {
                      content: '→';
                      padding-right: 10px;
                    }
                  }
                `}
              >
                <Link to={category.slug} activeClassName="active">
                  {category.title}
                </Link>
              </div>
            ))}
          </div>
          <div
            css={css`
              margin-left: 100px;
            `}
          />
        </div>
      </Container>
    </Container>
    <div
      css={css`
        padding: 70px 0;
      `}
    >
      <Container maxWidth={900}>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
              display: block;
              color: rgba(0, 0, 0, 0.9);
            }
            address {
              margin: 0;
              font-style: normal;
            }
            color: rgba(0, 0, 0, 0.5);
            font-size: 13px;
            line-height: 1.65;
          `}
        >
          <Link to="/">
            <Logo width={90} dark />
          </Link>
          <div>
            {' '}
            <a href="mailto:info@moonhighway.com?subject=Hello!">
              info@moonhighway.com
            </a>
            <a href="tel:530-523-3084">(530) 523 - 3084</a>
            Moon Highway, LLC
            <br />
            PO BOX 1578
            <address>Tahoe City, CA 96145</address>
          </div>
        </div>
      </Container>
    </div>
  </footer>
)

export default Footer
