import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { Container } from '../components/markupHelpers/'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import Item from '../components/Item'

import ReactTraining from '../data/reactTrainings'

export default function ReactPace({ data: { site } }) {
  return (
    <Layout site={site}>
      <section
        css={css`
          padding: 0;
          ${bpMaxMD} {
            padding: 0 40px;
          }
          ${bpMaxSM} {
            padding: 0 20px;
          }
        `}
      >
        {ReactTraining.map(training => (
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
