import React from 'react'
import { css } from '@emotion/core'
import { fonts } from '../../lib/typography'
import Link from '../../components/Link'
import { bpMaxMD } from '../../lib/breakpoints'

export default ({ title, length, image, link }) => (
  <Link
    to={link}
    css={css`
      text-decoration: none !important;
    `}
    aria-label={`View ${title} course on linkedin learning`}
  >
    <div
      css={css`
        font-family: ${fonts.semibold}, sans-serif;
        font-size: 1.1875rem;
        color: rgba(0, 0, 0, 0.9);
        background: #ffffff;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 10px 50px -15px rgba(0, 0, 0, 0.15);
        transition: box-shadow 200ms ease;
        :hover {
          box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.25);
          transition: box-shadow 200ms ease;
        }
        div {
          padding: 20px;
          min-height: 150px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
        img {
          width: 100%;
          height: auto;
          max-width: 300px;
          ${bpMaxMD} {
            max-width: 100%;
          }
          margin: 0;
        }
        p {
          font-size: 16px;
          opacity: 0.7;
          font-family: ${fonts.regular}, sans-serif;
        }
        h3 {
          margin: 0;
        }
      `}
    >
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{length}</p>
      </div>
    </div>
  </Link>
)
