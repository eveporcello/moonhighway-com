import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import { Container } from '../../components/markupHelpers'
import { bpMaxSM, bpMaxMD } from '../../lib/breakpoints'
import MDReactComponent from 'markdown-react-js'
import Item from '../../components/Item'
import { fonts, rhythm } from '../../lib/typography'

import HeaderImage from '../../images/javascript-stack.svg'
import JsNodeTraining from '../../data/javascriptNodeTrainings'
import Categories from '../../data/categories'
import TrainingInfo from '../../components/TrainingInfo'

export default function JsPage({ data: { site } }) {
  return (
    <Layout site={site}>
      <div
        css={css`
          position: absolute;
          top: -80px;
          display: flex;
          flex-direction: column;
          img {
            display: block;
            ${bpMaxSM} {
              visibility: hidden;
              display: none;
            }
          }
          h1 {
            font-size: 24px;
            text-align: center;
            margin-top: -30px;
          }
        `}
      >
        <img src={HeaderImage} alt={Categories[1].title} />
        <h1>{Categories[1].title}s</h1>
      </div>
      <Container>
        <section
          css={css`
            padding: 300px 0 20px 0;
            ${bpMaxMD} {
              padding: 250px 0 50px 0;
            }
            ${bpMaxSM} {
              padding: 10px 0;
            }
          `}
        >
          {JsNodeTraining.map(training => (
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
          <TrainingInfo
            title={`JavaScript & Node.js & GraphQL`}
            description={Categories[1].description}
          />
        </section>
      </Container>
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
