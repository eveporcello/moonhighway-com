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
      font-size: 1.1875rem;
      margin-left: 35px;
      ${bpMaxMD} {
        margin: 10px 0;
      }
      ${bpMaxSM} {
        margin: 10px 0 10px 45px;
        padding-right: 30px;
      }
      ::before {
        content: '';
        background-image: url(${Quote});
        width: 25px;
        height: 19px;
        position: absolute;
        margin-top: 5px;
        margin-left: -45px;
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
