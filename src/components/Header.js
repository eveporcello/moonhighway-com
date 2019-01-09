import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'

import { Container } from './markupHelpers'
import Logo from './Logo'

const Header = ({ dark }) => (
  <header
    css={css`
      width: 100%;
      padding: 30px 0 0 0;
      ${bpMaxMD} {
        padding: 30px 20px 0 20px;
      }
      flex-shrink: 0;
      background: ${dark ? 'none' : 'none'};
      position: absolute;
    `}
  >
    <Container>
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Link to="/">
          <Logo dark={!dark} />
        </Link>
        <div
          css={css`
            font-size: 16px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            a {
              color: #fbfbfb;
              text-decoration: none;
              & + a {
                margin-left: 32px;
              }
            }
          `}
        >
          <a href="">About</a>
          <a href="">Contact us</a>
        </div>
      </nav>
    </Container>
  </header>
)

export default Header
