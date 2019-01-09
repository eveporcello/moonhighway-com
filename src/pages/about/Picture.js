import React from 'react'
import { css } from '@emotion/core'
import MDReactComponent from 'markdown-react-js'
import { fonts } from '../../lib/typography'

export default ({ children, src, link }) => (
  <div
    css={css`
      text-align: center;
      width: 100%;
      font-family: ${fonts.regularItalic}, sans-serif;
      margin: 30px 0 40px 0;
      p {
        opacity: 0.65;
        font-size: 16px;
      }
    `}
  >
    {link ? (
      <a href={link} target="_blank">
        <img
          src={src}
          alt={children}
          css={css`
            box-shadow: 0 10px 50px -15px rgba(0, 0, 0, 0.15);
            margin-bottom: 10px;
            border-radius: 5px;
            transition: all 200ms ease;
            ${link &&
              `
            :hover {
              transition: all 200ms ease;
              box-shadow:  0 10px 30px -10px rgba(0,0,0,0.2);
            }
            `};
          `}
        />
      </a>
    ) : (
      <img
        src={src}
        alt={children}
        css={css`
          box-shadow: 0 10px 50px -15px rgba(0, 0, 0, 0.15);
          width: 100%;
          margin-bottom: 10px;
          border-radius: 5px;
        `}
      />
    )}

    <MDReactComponent text={children} />
  </div>
)
