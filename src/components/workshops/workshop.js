import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { fonts } from 'lib/typography'
import { format } from 'date-fns'
import Link from 'components/Link'
import TimeRange from './timeRange'
import { bpMaxSM } from 'lib/breakpoints'
import { Calendar, Clock, Ticket, Location } from 'components/Icons'

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 1.2;
`

function Workshop({ title, startTime, endTime, remaining, url, slug }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 32px;
        padding: 60px;
        ${bpMaxSM} {
          padding: 30px;
        }
        background: white;
        border-radius: 5px;
        box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.1);
        h2 {
          font-size: 2rem;
          margin-bottom: 2.5rem;
          line-height: 1;
          letter-spacing: -0.075rem;
          font-family: ${fonts.bold}, sans-serif;
        }
        .button {
          padding: 20px 25px;
          background: black;
          font-family: ${fonts.semibold};
          ${remaining > 0 &&
            'background-image: linear-gradient(45deg, #4C3DFF 0%, #AE41FF 100%)'};
          color: white;
          margin-right: 16px;
          border-radius: 3px;
          ${bpMaxSM} {
            flex-grow: 1;
            margin-right: 0;
          }
        }
        .button-secondary {
          color: inherit;
          padding: 20px 25px;
          background: #f1f1f1;
          border-radius: 3px;
        }
        .remaining {
          margin-right: 5px;
          color: ${remaining <= 5 && remaining > 0 ? '#4C3DFF' : 'inherit'};
          font-family: ${fonts.semibold};
        }
        a {
          color: inherit;
        }
        svg {
          margin-right: 16px;
        }
        small {
          font-size: 16px;
          font-family: ${fonts.regular}, sans-serif;
        }
      `}
    >
      {title && (
        <Link to={slug}>
          <h2>{title}</h2>
        </Link>
      )}
      <Detail>
        {Calendar}
        <time>{format(new Date(startTime), 'dddd, MMMM Do, YYYY')}</time>
      </Detail>
      <Detail>
        {Clock}
        {startTime ? (
          <TimeRange startTime={startTime} endTime={endTime} />
        ) : (
          <time>TBA</time>
        )}
      </Detail>
      <Detail>
        {Location}
        <span>
          Zoom <small>You'll receive a link via email.</small>
        </span>
      </Detail>
      <Detail>
        {Ticket}
        <span className="remaining">{remaining}</span>
        <span>spots remaining</span>
      </Detail>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-top: 32px;
          ${bpMaxSM} {
            flex-direction: column;
            align-items: flex-start;
            min-width: 100%;
            a {
              width: 100%;
              text-align: center;
            }
            a:first-of-type {
              margin-bottom: 16px;
            }
          }
        `}
      >
        {remaining === 0 && (
          <span
            css={css`
              margin-right: 24px;
              ${bpMaxSM} {
                margin-right: 0;
                margin-bottom: 16px;
              }
            `}
          >
            Sold out!
          </span>
        )}
        {remaining > 0 && (
          <Link className="button" to={url}>
            Secure your seat
          </Link>
        )}
        {slug && (
          <Link className="button-secondary" to={slug}>
            Topics & Details
          </Link>
        )}
      </div>
    </div>
  )
}
export default Workshop
