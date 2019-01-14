import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'

export default ({ children, colWidth = '240px', marginTop = '50px' }) => (
  <div
    css={css`
      margin-top: ${marginTop};
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(${colWidth}, 1fr));
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
