import React from 'react'
import { format } from 'date-fns'

export default function TimeRange({ startTime, endTime }) {
  return (
    <time>
      {format(new Date(startTime), 'h:mma')} —{' '}
      {format(new Date(endTime), 'h:mma (ZZ)')}
    </time>
  )
}
