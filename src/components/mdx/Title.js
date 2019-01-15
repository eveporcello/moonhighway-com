import styled from '@emotion/styled'
import { fonts } from '../../lib/typography'
import { bpMaxSM } from '../../lib/breakpoints'

export default styled.h1`
  font-family: ${fonts.bold}, sans-serif;
  em {
    font-family: ${fonts.boldItalic}, sans-serif;
  }
  font-size: 30px;
  line-height: 1.1;
  margin-top: 25px;
  margin-bottom: 10px;
  padding-top: 30px;
  padding-bottom: 10px;
  ${bpMaxSM} {
    margin-top: 0;
  }
`
