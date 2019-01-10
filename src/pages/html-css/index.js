import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import { Container } from '../../components/markupHelpers'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'
import Item from '../../components/Item'

import HeaderImage from '../../images/html-stack.svg'
import HtmlCss from '../../data/htmlCssTrainings'
import Categories from '../../data/categories'

export default function HtmlPage({ data: { site } }) {
  return (
    <Layout site={site}>
      <div
        css={css`
          position: absolute;
          top: -80px;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          h1 {
            font-size: 24px;
            text-align: center;
            margin-top: -30px;
          }
        `}
      >
        <img src={HeaderImage} alt={Categories[2].title} />
        <h1>{Categories[2].title}s</h1>
      </div>
      <section
        css={css`
          padding: 300px 0 50px 0;
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
