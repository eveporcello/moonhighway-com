import React from 'react'
import { css } from '@emotion/core'

import { Container } from './markupHelpers'
import Logo from './Logo'

const Header = ({ logoDark }) => (
  <header
    css={css`
      width: 100%;
      padding: 55px 0;
      flex-shrink: 0;
    `}
  >
    <Container>
      <Logo dark={logoDark} />
    </Container>
  </header>
)

export default Header
