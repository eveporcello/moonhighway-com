import React from 'react'
import { css, keyframes } from '@emotion/core'

const line = keyframes`
  from {
    stroke-dashoffset: 52;
  }
  to {
    stroke-dashoffset: 0;
  }

`
const chevron = keyframes`
from {
    stroke-dashoffset: 0;
    stroke-dasharray:29;
}
50% {
  stroke-dasharray:24;
}
to {
    stroke-dashoffset: 58;
    stroke-dasharray: 29;
}
`

export const Arrow = ({ color = '#979797' }) => (
  <div
    css={css`
      transform: rotate(-90deg);
      zoom: 0.6;
      opacity: 0.9;
      .line,
      .chevron {
      }
      .line {
        animation: ${line} 3s 1.5s ease-in-out infinite;
      }
      .chevron {
        animation: ${chevron} 3s ease-in-out infinite;
      }
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="31"
      viewBox="0 0 24 31"
    >
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="3"
        transform="translate(1 1)"
      >
        <path className="line" strokeDasharray="26" d="M11,0.5 L11,28" />
        <path
          className="chevron"
          strokeDasharray="29"
          d="M0.754882813,17.7548828 L11,28 L21.2451172,17.7548828"
        />
        {/* <path className="line2" stroke-dasharray="26" d="M11,0.5 L11,28" />
        <path
          className="chevron2"
          stroke-dasharray="29"
          d="M0.754882813,17.7548828 L11,28 L21.2451172,17.7548828"
        /> */}
      </g>
    </svg>

    {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g fill="#111" fill-rule="evenodd">
        <path
          className="firstChevron"
          d="M9,9 C8.768,9 8.537,8.92 8.349,8.759 L0.59,2.109 L1.892,0.59 L9,6.683 L16.108,0.59 L17.41,2.109 L9.651,8.759 C9.463,8.92 9.232,9 9,9 Z"
          transform="translate(0 9)"
        />
        <path
          className="secondChevron"
          d="M9,9 C8.768,9 8.537,8.92 8.349,8.759 L0.59,2.109 L1.892,0.59 L9,6.683 L16.108,0.59 L17.41,2.109 L9.651,8.759 C9.463,8.92 9.232,9 9,9 Z"
        />
      </g>
    </svg> */}
  </div>
)
