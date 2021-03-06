import React from 'react'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import { Container } from 'components/markupHelpers'
import { bpMaxSM, bpMaxMD } from 'lib/breakpoints'
import Item from 'components/Item'

import HeaderImage from 'images/react-stack.svg'
import ReactTraining from 'data/reactTrainings'
import Categories from 'data/categories'
import TrainingInfo from 'components/TrainingInfo'

export default function ReactPage() {
  return (
    <Layout>
      <div
        css={css`
          position: absolute;
          top: -80px;
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
        <img src={HeaderImage} alt={Categories[1].title} />
        <h1>{Categories[1].title}</h1>
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
          {ReactTraining.map(training => (
            <Item
              key={training.tags}
              title={training.title}
              description={training.description}
              thumb={training.thumb}
              button={training.button}
              length={training.length}
              tags={training.tags}
            />
          ))}
          <TrainingInfo
            title="React.js"
            description={Categories[1].description}
          />
        </section>
      </Container>
    </Layout>
  )
}
