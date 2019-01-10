import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../lib/breakpoints'

const Container = props => {
  const { maxWidth = 900, noPadding = false, ...restProps } = props
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + (noPadding ? 0 : 80)}px;
        padding: 0 ${noPadding ? 0 : '40px'};
        ${bpMaxSM} {
          max-width: ${maxWidth + (noPadding ? 0 : 80)}px;
          padding: 0 ${noPadding ? 0 : '20px'};
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
