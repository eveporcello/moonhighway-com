import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../../lib/breakpoints'

const Container = props => {
  const { maxWidth = 1142, noPadding = false, ...restProps } = props
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + 80}px;
        padding: 0 ${noPadding ? 0 : '40px'};
        ${bpMaxSM} {
          max-width: ${maxWidth + 40}px;
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
