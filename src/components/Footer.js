import React from 'react'
import { css } from 'emotion'

import { Container } from './markupHelpers'
import Logo from './Logo'

const Footer = () => (
  <footer
    className={css`
      width: 100%;
      padding: 95px 0;
      background: #fafafa;
      flex-shrink: 0;
    `}
  >
    <Container>
      <Logo width={67} dark />
    </Container>
  </footer>
)

export default Footer
