import styled from '@emotion/styled'
import { fonts } from '../../lib/typography'

export default styled.h1`
  font-family: ${fonts.bold}, sans-serif;
  italic {
    font-family: ${fonts.boldItalic}, sans-serif;
  }
  font-size: 30px;
  line-height: 1.1;
  margin-top: 25px;
  margin-bottom: 10px;
  padding-top: 30px;
  padding-bottom: 10px;
`
