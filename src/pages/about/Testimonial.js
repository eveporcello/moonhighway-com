import React from 'react'
import { css } from '@emotion/core'
import MDReactComponent from 'markdown-react-js'
import { fonts } from '../../lib/typography'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'
import Quote from './quote.svg'

export default ({ children, author }) => (
  <div
    css={css`
      font-family: ${fonts.semibold}, sans-serif;
      margin: 20px 0;
      font-size: 18px;
      padding-left: 25px;
      margin-left: 40px;
      ${bpMaxMD} {
        margin: 10px 0;
        padding-left: auto;
      }
      ${bpMaxSM} {
        margin: 10px 0 10px 0;
      }
      ::before {
        content: '';
        background-image: url(${Quote});
        width: 20px;
        height: 16px;
        position: absolute;
        margin-top: 5px;
        margin-left: -30px;
        background-size: cover;
      }
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
