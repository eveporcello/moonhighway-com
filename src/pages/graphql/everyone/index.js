import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../../../components/Layout'
import { Container } from '../../../components/markupHelpers'
import { bpMaxSM, bpMaxMD } from '../../../lib/breakpoints'
import Topics from '../../../components/Topics'
import usingGraphQL from '../../../images/graphql/using-graphql.svg'
import HeaderImage from '../../../images/graphql-stack.svg'
import Categories from '../../../data/categories'
import TrainingInfo from '../../../components/TrainingInfo'

export default function GraphQLPage({ data: { site } }) {
  return (
    <Layout site={site}>
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
          <h1>GraphQL is for Everyone</h1>
          <h5>Length 1/2 day</h5>
          <p>
            <img src={usingGraphQL} style={{ float: 'right' }} alt="" />
            In GraphQL the "Q" stands for Query, which means _to question_.
            Developers and Engineers are not the only people with questions.
            Everyone has questions, everyone needs answers. In this course,
            everyone learns GraphQL, a special way to ask the internet
            questions. We are going to learn how to ask the internet all sorts
            of questions at once and allow it to provide all of the answers in a
            single response. We'll also learn how to design a schema, the rules
            that a server must follow when answering questions. This morning, or
            afternoon, or evening but preferably morning... on this morning
            everyone learns to communicate with APIs, everyone learns how to
            retrieve and change domain data, everyone learns to be more
            effective.
          </p>
          <h2 style={{ clear: 'right' }}>GraphQL Query Language</h2>
          <h5>First Thing</h5>
          <p>
            GraphQL comes with its own language for sending queries, the GraphQL
            Query Language. We start the course out by covering this language in
            detail. In this section, everyone will learn how to use GraphQL
            Playground to inspect and query GraphQL endpoints. Students will
            experiment with GraphQL by writing robust and complex queries,
            sending mutations, and listening for data changes with
            subscriptions.
          </p>
          <Topics
            topics={[
              'Why We Use GraphQL',
              'Using GraphiQL and GraphQL Playground',
              'Building GraphQL Queries',
              'Changing Data with Mutations',
              'Using Arguments and Variables',
              'Listening for Changes with Subscriptions',
              'Reviewing a Schema with Introspection',
            ]}
          />
          <h2>Designing GraphQL Schemas</h2>
          <h5>Before Lunch</h5>
          <p>
            GraphQL actually comes with two of its own languages: the Query
            Language and the Schema Definition Language or SDL. After the
            morning break, we will dive head first into the Schema Definition
            Language starting with the syntax, then by designing our own
            schemas. In this segment, we will learn techniques for designing
            schemas that clearly define business domains. Once complete we will
            have the skills to help design the domain and retrieve data from it.
            We'll feel like more effective and valuable team members.
          </p>
          <Topics
            topics={[
              'Schema Definition Language',
              'Designing your Own Schemas',
              'Connecting Types with Fields',
              'Connections with Through Types',
              'Effectively Designing Mutations',
              'Effectively Documenting a Schema',
              'Strategies for Approaching Design',
            ]}
          />
          <TrainingInfo
            title="GraphQL"
            description={Categories[0].description}
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
