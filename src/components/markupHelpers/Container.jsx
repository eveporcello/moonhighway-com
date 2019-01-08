import React from 'react'
import { css } from '@emotion/core'

const Container = props => {
  const { maxWidth = 1110, noPadding = false, className } = props
  return (
    <div
      css={css(
        {
          width: '100%',
          margin: '0 auto',
          maxWidth: maxWidth + 32,
          padding: `0 ${noPadding ? 0 : '1rem'}`,
        },
        className,
      )}
    >
      {props.children}
    </div>
  )
}

export default Container
