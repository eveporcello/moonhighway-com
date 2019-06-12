import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { fonts } from 'lib/typography'
import { format } from 'date-fns'
import Link from 'components/Link'
import TimeRange from './timeRange'
import { Calendar, Clock, Ticket, Location } from 'components/Icons'

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 1.2;
`

function Workshop({ title, startTime, endTime, seatsRemaining, url, slug }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        * {
          font-family: ${fonts.bold}, sans-serif;
        }
        h2 {
          font-size: 2.3rem;
        }
        .button {
          padding: 20px 25px;
          background: black;
          color: white;
          margin-right: 16px;
        }
        a {
          color: inherit;
          padding: 20px 25px;
          background: white;
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
      {title && <h2>{title}</h2>}
      <Detail>
        {Calendar}
        <time>
          {format(new Date(startTime), 'dddd,')}
          <br />
          {format(new Date(startTime), 'MMM Do, YYYY')}
        </time>
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
        <span>{seatsRemaining} spots remaining</span>
      </Detail>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-top: 32px;
        `}
      >
        <Link className="button" to={url}>
          {seatsRemaining > 0 ? 'Secure your seat' : 'Sold Out!'}
        </Link>
        <Link to={slug}>Topics & More</Link>
      </div>
    </div>
  )
}
export default Workshop
