import React from 'react'
import { css } from '@emotion/core'

import { Container } from './markupHelpers'
import Logo from './Logo'

const Header = ({ dark }) => (
  <header
    css={css`
      width: 100%;
      padding: 55px 0;
      flex-shrink: 0;
      background: ${dark ? '#090909' : 'none'};
    `}
  >
    <Container>
      <Logo dark={!dark} />
    </Container>
  </header>
)

export default Header
