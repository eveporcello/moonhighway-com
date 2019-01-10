import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { Container } from './markupHelpers'
import Logo from './Logo'

const Header = ({ dark }) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 30px 0 0 0;
      background: ${dark ? '#090909' : 'none'};
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
              color: ${dark ? '#fbfbfb' : 'rgba(0,0,0,0.85)'};
              text-decoration: none;
              & + a {
                margin-left: 32px;
              }
            }
          `}
        >
          <Link to="/about">About</Link>
          <Link to="#">Contact us</Link>
        </div>
      </nav>
    </Container>
  </header>
)

export default Header
