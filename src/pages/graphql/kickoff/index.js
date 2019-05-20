import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../../../components/Layout'
import { Container } from '../../../components/markupHelpers'
import { bpMaxSM, bpMaxMD } from '../../../lib/breakpoints'
import Topics from '../../../components/Topics'
import graphqlWorkshop from '../../../images/graphql/graphql-workshop.svg'
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
          <h1>GraphQL Kickoff</h1>
          <h5>Length 1 day</h5>
          <p>
            <img src={graphqlWorkshop} style={{ float: 'right' }} alt="" />
            In GraphQL the "Q" stands for Query, which means _to question_. In
            this course, we're going to learn GraphQL, a special way to ask
            internet servers questions. We are going to learn how to ask these
            special servers all sorts of questions at once and allow them to
            provide all of the answers in a single response. We'll set up our
            own GraphQL servers that can answer questions that originate with
            any client. On this day, we're building GraphQL servers. We're
            building confidence. We're building better developers.
          </p>
          <h2 style={{ clear: 'right' }}>GraphQL Query Language</h2>
          <h5>First Thing</h5>
          <p>
            GraphQL comes with its own language for sending queries, the GraphQL
            Query Language. We start the course out by covering this language in
            detail. In this section, students will learn how to use GraphQL
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
            schemas that clearly define business domains.
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
          <h2>Apollo Server</h2>
          <h5>After Lunch</h5>
          <p>
            Now that we understand the query language, how to design a schema,
            and we are fresh from lunch, it's time to build an actual GraphQL
            API. In this section, we will build a GraphQL API using Apollo
            Server. We will start from scratch. Together we'll design a schema,
            stand up a server with mocks, and build the resolvers that make it
            work.
          </p>
          <Topics
            topics={[
              'Why We Need a Server Implementation',
              'Creating an Apollo Server',
              'Configuring the Server',
              'Building Resolvers',
              'Handling Arguments',
              'Building Mutation Resolvers',
              'Understanding Context',
            ]}
          />
          <h2>Lab: Build an API</h2>
          <h5>End of the Day</h5>
          <p>
            At this point, students will know how to build and launch GraphQL
            APIs. They will be a force to be reckoned with, and they will be
            confident about their new powers. They are going to want to take
            them out for a spin, and we have the ultimate challenge lined up for
            them.
          </p>
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
