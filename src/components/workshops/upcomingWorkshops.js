import React from 'react'
import Workshop from './workshop'
import slugify from '@sindresorhus/slugify'

function UpcomingWorkshops({ events }) {
  if (events.length) {
    return (
      <>
        {events.map(event => {
          return (
            <Workshop
              key={event.slug}
              title={event.title}
              remaining={event.remaining}
              startTime={event.startTime}
              endTime={event.endTime}
              url={event.url}
              date={event.date}
              slug={slugify(event.title)}
            />
          )
        })}
      </>
    )
  } else return null
}

export default UpcomingWorkshops
