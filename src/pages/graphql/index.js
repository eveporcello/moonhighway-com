import React from 'react'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import { Container } from 'components/markupHelpers'
import { bpMaxSM, bpMaxMD } from 'lib/breakpoints'
import Item from 'components/Item'
import GraphQLTraining from 'data/graphqlTrainings'
import Categories from 'data/categories'
import TrainingInfo from 'components/TrainingInfo'
import HeaderImage from 'images/graphql-stack.svg'

export default function GraphQLPage() {
  return (
    <Layout>
      <div
        css={css`
          position: absolute;
          top: -35px;
          display: flex;
          align-items: center;
          flex-direction: column;
          ${bpMaxSM} {
            position: static;
            transform: scale(0.85);
          }
          img {
            display: block;
          }
          h1 {
            font-size: 24px;
            text-align: center;
            margin-top: -30px;
          }
        `}
      >
        <img src={HeaderImage} alt={Categories[0].title} />
        <h1>{Categories[0].title}</h1>
      </div>
      <Container>
        <section
          css={css`
            padding: 300px 0 50px 0;
            ${bpMaxMD} {
              padding: 250px 0 50px 0;
            }
            ${bpMaxSM} {
              padding: 10px 0;
            }
          `}
        >
          {GraphQLTraining.map(training => (
            <Item
              key={training.tags}
              title={training.title}
              description={training.description}
              thumb={training.thumb}
              button={training.button}
              length={training.length}
              tags={training.tags}
              slug={training.slug}
            />
          ))}
          <TrainingInfo
            title="GraphQL"
            description={Categories[0].description}
          />
        </section>
      </Container>
    </Layout>
  )
}
