import React from 'react'
import { css } from '@emotion/core'

const Logo = ({ width, dark }) => (
  <div
    css={css`
      width: ${width ? width : 87}px;
    `}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 53">
      <g
        fill={dark ? '#000' : '#fff'}
        fill-rule="evenodd"
        transform="translate(-1)"
      >
        <polygon points="21.489 7.923 21.489 28.692 16.726 28.692 16.726 19.028 13.957 25.203 9.194 25.203 6.425 19.055 6.425 28.692 1.662 28.692 1.662 7.923 6.425 7.923 11.575 19.415 16.726 7.923" />
        <path d="M9.40885696,42.4175824 L9.40885696,52.2087912 L7.84226355,52.2087912 L7.84226355,48.0050989 L3.53413169,48.0050989 L3.53413169,52.2087912 L1.96753828,52.2087912 L1.96753828,42.4175824 L3.53413169,42.4175824 L3.53413169,46.6343297 L7.84226355,46.6343297 L7.84226355,42.4175824 L9.40885696,42.4175824 Z M16.2844614,42.4175824 L16.2844614,52.2087912 L14.717868,52.2087912 L14.717868,42.4175824 L16.2844614,42.4175824 Z M31.6457802,47.3131868 C31.6457802,50.1591648 29.3350549,52.4698901 26.4890769,52.4698901 C23.6430988,52.4698901 21.3323736,50.1591648 21.3323736,47.3131868 C21.3323736,44.4672088 23.6430988,42.1564835 26.4890769,42.1564835 C27.9120659,42.1564835 29.2045054,42.7309011 30.1444615,43.6708571 L29.1000659,44.7021978 C28.4473186,43.9841758 27.5334725,43.5272527 26.5021318,43.5272527 C24.5177802,43.5272527 22.9120219,45.2243956 22.9120219,47.3131868 C22.9120219,49.401978 24.5177802,51.0991209 26.5021318,51.0991209 C28.2645494,51.0991209 29.7267032,49.7675165 30.0400219,48.0050989 L26.4890769,48.0050989 L26.4890769,46.6343297 L31.5935604,46.6343297 C31.6327252,46.8562637 31.6457802,47.0781978 31.6457802,47.3131868 Z M44.135011,42.4175824 L44.135011,52.2087912 L42.5684176,52.2087912 L42.5684176,48.0050989 L38.2602857,48.0050989 L38.2602857,52.2087912 L36.6936923,52.2087912 L36.6936923,42.4175824 L38.2602857,42.4175824 L38.2602857,46.6343297 L42.5684176,46.6343297 L42.5684176,42.4175824 L44.135011,42.4175824 Z M59.8749231,42.4175824 L61.5459561,42.4175824 L58.6347034,52.2087912 L57.0811649,52.2087912 L55.0315385,45.0938462 L52.9819121,52.2087912 L51.4283737,52.2087912 L48.5301759,42.4175824 L50.2012089,42.4175824 L52.2116704,49.4933626 L54.2612968,42.4175824 L55.8017803,42.4175824 L57.8514067,49.5064176 L59.8749231,42.4175824 Z M70.2492529,42.4175824 L74.1265716,52.2087912 L72.4294287,52.2087912 L71.4503078,49.6761319 L67.4293847,49.6761319 L66.4502639,52.2087912 L64.7661759,52.2087912 L68.6434946,42.4175824 L70.2492529,42.4175824 Z M67.9515825,48.3184176 L70.92811,48.3184176 L69.4398463,44.4802637 L67.9515825,48.3184176 Z M85.0883738,42.4175824 L86.9682859,42.4175824 L83.0648573,47.5220659 L83.0648573,52.2087912 L81.4982639,52.2087912 L81.4982639,47.509011 L77.6078903,42.4175824 L79.4878024,42.4175824 L82.2815606,46.086022 L85.0883738,42.4175824 Z" />
        <path
          fill-rule="nonzero"
          d="M33.885228,29.0301414 L35.1274789,28.0499077 C38.1857006,31.9255945 42.8362044,34.2307692 47.8681319,34.2307692 C56.8260691,34.2307692 64.0879121,26.9689263 64.0879121,18.010989 C64.0879121,9.05305175 56.8260691,1.79120879 47.8681319,1.79120879 C42.8751181,1.79120879 38.2567585,4.06060689 35.1962962,7.88546408 L33.9607265,6.89682207 C37.3183667,2.70056262 42.3892691,0.208791209 47.8681319,0.208791209 C57.7000142,0.208791209 65.6703297,8.17910665 65.6703297,18.010989 C65.6703297,27.8428714 57.7000142,35.8131868 47.8681319,35.8131868 C42.3465442,35.8131868 37.240407,33.2821625 33.885228,29.0301414 Z"
        />
        <path
          fill-rule="nonzero"
          d="M33.3893387,7.65100556 C32.7674091,8.51871739 32.22403,9.44120778 31.7668721,10.4076903 L33.1973346,11.0843162 C33.7367591,9.94391276 34.4081347,8.87048023 35.1962962,7.88546408 L34.6131742,7.41887857 C35.0671243,7.36002423 35.5300174,7.32967033 36,7.32967033 C41.8991294,7.32967033 46.6813187,12.1118596 46.6813187,18.010989 C46.6813187,23.9101184 41.8991294,28.6923077 36,28.6923077 C30.1008706,28.6923077 25.3186813,23.9101184 25.3186813,18.010989 C25.3186813,13.0124599 28.7521679,8.81586461 33.3893387,7.65100556 Z M30.4346251,14.3899013 C30.1901744,15.5726373 30.0659341,16.7840486 30.0659341,18.010989 C30.0659341,18.1686871 30.0679865,18.3261544 30.072085,18.4833648 L31.6539651,18.4421249 C31.6502249,18.2986576 31.6483516,18.1549381 31.6483516,18.010989 C31.6483516,16.891804 31.7615861,15.7877066 31.9842898,14.7101897 L30.4346251,14.3899013 Z M30.6593717,22.5855138 C31.0152277,23.9275404 31.5268965,25.2188303 32.1821677,26.4363413 L33.5755895,25.686394 C32.9788188,24.5775783 32.5129314,23.4018262 32.1889299,22.1799313 L30.6593717,22.5855138 Z"
        />
        <polygon points="87.381 7.923 87.381 28.692 82.618 28.692 74.864 16.895 74.864 28.692 70.101 28.692 70.101 7.923 74.864 7.923 82.618 19.692 82.618 7.923" />
      </g>
    </svg>
  </div>
)

export default Logo
