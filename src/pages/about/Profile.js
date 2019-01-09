import React from 'react'
import { css } from '@emotion/core'
import MDReactComponent from 'markdown-react-js'
import linkedin from './icon-linkedin.svg'
import twitter from './icon-twitter.svg'
import github from './icon-github.svg'
import { bpMaxSM } from '../../lib/breakpoints'

export default ({
  children,
  image,
  title,
  linkedinUrl,
  twitterUrl,
  githubUrl,
}) => (
  <div
    css={css`
      display: flex;
      align-items: flex-start;
      align-self: center;
      margin: 80px 0;
      margin-left: auto;
      margin-right: auto;
      width: 130%;
      margin-left: -15%;
      ${bpMaxSM} {
        width: 100%;
        margin-left: 0;
        flex-direction: column;
      }
      img {
      }
    `}
  >
    <img
      src={image}
      css={css`
        border-radius: 3px;
        box-shadow: 0 20px 45px -15px rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 200px;
        height: auto;
      `}
    />
    <div
      css={css`
        padding-left: 30px;
        ${bpMaxSM} {
          padding: 0;
        }
      `}
    >
      <h2
        css={css`
          margin-bottom: 15px;
        `}
      >
        {title}
      </h2>
      <div
        css={css`
          display: flex;
          align-items: flex-start;
          a {
            margin-bottom: 20px;
          }
          img {
            margin: 0 15px 0 0;
            max-width: 24px;
          }
        `}
      >
        <a href={linkedinUrl}>
          <img src={linkedin} />
        </a>
        <a href={linkedinUrl}>
          <img src={twitter} />
        </a>
        <a href={linkedinUrl}>
          <img src={github} />
        </a>
      </div>
      <MDReactComponent text={children} />
    </div>
  </div>
)
