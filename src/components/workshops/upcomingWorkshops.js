import React from 'react'
import get from 'lodash/get'
import { css } from '@emotion/core'
import { fonts } from 'lib/typography'
import Link from 'components/Link'
import { Container } from 'components/markupHelpers'
import Workshop from './workshop'
import slugify from '@sindresorhus/slugify'

function UpcomingWorkshops({ events }) {
  if (events.length) {
    return (
      <div>
        {events.map(event => {
          return (
            <Workshop
              key={event.slug}
              title={event.title}
              seatsRemaining={event.remaining}
              startTime={event.startTime}
              endTime={event.endTime}
              url={event.url}
              date={event.date}
              slug={slugify(event.title)}
            />
          )
        })}
      </div>
    )
  } else return null
}

export default UpcomingWorkshops
