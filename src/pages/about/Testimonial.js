import React from 'react'
import { css } from '@emotion/core'
import MDReactComponent from 'markdown-react-js'
import { fonts } from '../../lib/typography'

export default ({ children, author }) => (
  <div
    css={css`
      font-family: ${fonts.semibold}, sans-serif;
      margin: 30px 0 40px 0;
      font-size: 1.1875rem;

      div {
        font-size: 0.9375rem;
        opacity: 0.6;
        margin-top: 5px;
        font-family: ${fonts.regularItalic}, sans-serif;
      }
    `}
  >
    {children && <MDReactComponent text={children} />}
    <div>{author}</div>
  </div>
)
