import React from 'react'
import { css } from '@emotion/core'
import MDReactComponent from 'markdown-react-js'
import linkedin from './icon-linkedin.svg'
import twitter from './icon-twitter.svg'
import github from './icon-github.svg'
import banner from './linkedinBanner.png'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'

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
      width: 120%;
      margin-left: -10%;
      ${bpMaxMD} {
        width: 110%;
        margin-left: -5%;
      }
      ${bpMaxSM} {
        width: 100%;
        margin-left: 0;
        flex-direction: column;
      }
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <img
        src={image}
        css={css`
          border-radius: 3px;
          box-shadow: 0 20px 45px -15px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 230px;
          height: auto;
        `}
        alt={title}
      />
      <img
        src={banner}
        css={css`
          max-width: 160px;
        `}
        alt="LinkedIn Learning Insider"
      />
    </div>
    <div
      css={css`
        padding-left: 80px;
        ${bpMaxMD} {
          padding-left: 40px;
        }
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
          <img src={linkedin} alt={`${title}'s LinkedIn`} />
        </a>
        <a href={twitterUrl}>
          <img src={twitter} alt={`${title}'s Twitter`} />
        </a>
        <a href={githubUrl}>
          <img src={github} alt={`${title}'s GitHub`} />
        </a>
      </div>
      <MDReactComponent text={children} />
    </div>
  </div>
)
