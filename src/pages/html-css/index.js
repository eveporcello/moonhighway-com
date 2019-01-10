import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import { Container } from '../../components/markupHelpers'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'
import Item from '../../components/Item'

import HtmlCss from '../../data/htmlCssTrainings'

export default function HtmlPage({ data: { site } }) {
  return (
    <Layout site={site}>
      <section
        css={css`
          padding: 100px 0 50px 0;
          ${bpMaxMD} {
            padding: 50px 100px;
          }
          ${bpMaxSM} {
            padding: 10px 20px;
          }
        `}
      >
        {HtmlCss.map(training => (
          <Item
            key={training.title}
            title={training.title}
            description={training.description}
            thumb={training.thumb}
            button={training.button}
            length={training.length}
            tags={training.tags}
          />
        ))}
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
