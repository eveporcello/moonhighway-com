import React from 'react'
import { format } from 'date-fns'

export default function TimeRange({ startTime, endTime }) {
  return (
    <time>
      {format(new Date(startTime), 'h:mm a')} —{' '}
      {format(new Date(endTime), 'h:mm a (ZZ)')}
    </time>
  )
}
