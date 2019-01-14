import React from 'react'
import { css } from '@emotion/core'
import MDReactComponent from 'markdown-react-js'
import { fonts } from '../../lib/typography'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'

export default ({ children, maxWidth = '240px' }) => (
  <div
    css={css`
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(${maxWidth}, 1fr));
      grid-gap: 20px;
      width: 120%;
      margin-left: -10%;
      ${bpMaxMD} {
        width: 110%;
        margin-left: -5%;
      }
      ${bpMaxSM} {
        width: 100%;
        margin-left: 0;
      }
    `}
  >
    {children}
  </div>
)
