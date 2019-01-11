import React from 'react'
import { css } from '@emotion/core'
import { fonts, rhythm } from '../lib/typography'
import { bpMaxSM } from '../lib/breakpoints'
import MDReactComponent from 'markdown-react-js'

const TrainingInfo = ({ description, title }) => (
  <div>
    <hr
      css={css`
        background: rgba(0, 0, 0, 0.07);
        margin: ${rhythm(3)} 0 ${rhythm(3)} 0;
        ${bpMaxSM} {
          margin: 40px 0 40px 0;
        }
      `}
    />
    <div
      css={css`
        display: flex;
        ${bpMaxSM} {
          flex-direction: column;
        }
      `}
    >
      <div>
        <h3
          css={css`
            font-size: 2.4rem;
            margin-bottom: 0;
          `}
        >
          {title}
        </h3>
        {description && (
          <MDReactComponent
            text={description}
            css={css`
              ${bpMaxSM} {
                max-width: 100%;
                padding-right: 0;
              }
              padding-right: ${rhythm(2)};
            `}
          />
        )}
      </div>
      <div
        css={css`
          padding-left: ${rhythm(2)};
          ${bpMaxSM} {
            padding-left: 0;
            margin-top: ${rhythm(2)};
          }
        `}
      >
        <blockquote
          css={css`
            margin: 0;
            margin-top: ${rhythm(1)};
            font-family: ${fonts.regularItalic}, sans-serif;
            font-size: 1.2rem;
          `}
        >
          "Great job of both answering questions & keeping the pace moving in
          class!"
          <span
            css={css`
              margin-top: ${rhythm(0.5)};
              opacity: 0.6;
              font-size: 15px;

              display: block;
              font-family: ${fonts.regular}, sans-serif;
            `}
          >
            JavaScript Kickoff Student
          </span>
        </blockquote>
        <h5
          css={css`
            font-size: 18px;
            margin-top: ${rhythm(2.68)};
            margin-bottom: ${rhythm(0.5)};
          `}
        >
          Custom Curriculums
        </h5>
        <p
          css={css`
            font-size: 17px;
          `}
        >
          Any of our classes can be customized to fit your specific needs. We
          can create the perfect {title} training course for your team. Our
          materials are designed to be isolated, combined, and rearranged to
          create the perfect class.
        </p>
      </div>
    </div>
  </div>
)

export default TrainingInfo
