import React from 'react'
import { css } from '@emotion/core'

export default function({ topics = [] }) {
  return (
    <>
      <h3>Topics</h3>
      <div
        css={css`
          //margin-bottom: 50px;
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {topics.map(tag => (
          <span
            key={tag}
            css={css`
              font-size: 15px;
              margin: 0px 8px 8px 0;
              padding: 5px 10px;
              border-radius: 3px;
              background: white;
              box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.2);
            `}
          >
            {tag}
          </span>
        ))}
      </div>
      <hr />
    </>
  )
}
