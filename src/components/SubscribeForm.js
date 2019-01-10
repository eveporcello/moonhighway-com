import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'

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

const SubscribeForm = () => (
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
        <input type="text" placeholder="Your first name" css={InputStyles} />
      </div>
      <div css={InputWrapperStyles}>
        <input type="text" placeholder="Your email address" css={InputStyles} />
      </div>
      <div css={InputWrapperStyles}>
        <SubmitBtn>Subscribe</SubmitBtn>
        <div
          css={css`
            opacity: 0.6;
            color: #090909;
            font-size: 12px;
            line-height: 1.25;
            margin-top: 15px;
          `}
        >
          We won't send you spam. Unsubscribe at any time.
        </div>
      </div>
    </div>
  </div>
)

export default SubscribeForm