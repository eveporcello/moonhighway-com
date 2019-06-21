import React from 'react'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import { Container } from 'components/markupHelpers'
import { bpMaxSM, bpMaxMD } from 'lib/breakpoints'
import Topics from 'components/Topics'
import HeaderImage from 'images/graphql-stack.svg'
import Categories from 'data/categories'
import TrainingInfo from 'components/TrainingInfo'
import graphqlTheNextParts from 'images/graphql/graphql-the-next-parts.svg'

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
          <h1>Fullstack GraphQL</h1>
          <h5>Length 1 day</h5>
          <p>
            <img src={graphqlTheNextParts} style={{ float: 'right' }} alt="" />
            The GraphQL API is only half of the picture. Sure, it answers
            questions, but who is asking the questions? A client is any
            application that consumes data from your API. Today, we're going to
            build clients. We're gonna examine the challenges to building
            clients. And we're going to look at the tools that were designed to
            crush those challenges. Along the way you will learn more GraphQL,
            you will get stronger with JavaScript, and you're going to learn
            React.
          </p>
          <h2 style={{ clear: 'right' }}>Unions &amp; Interfaces</h2>
          <h5>First Thing</h5>
          <p>
            The day begins with an in-depth overview of unions and interfaces.
            These are advanced GraphQL techniques for modeling domain objects.
            We'll learn how to identify and write queries for unions and
            interfaces using fragments. We'll build unions and interfaces into
            our own API. We'll understand why we use them, when to use them, and
            how to implement them effectively.
          </p>
          <Topics
            topics={[
              'When to use unions?',
              'Handling an agenda with unions',
              'Handling search results with a union',
              'When to use interfaces?',
              'Handling an agenda with interfaces',
              'Improving the Pet Library with interfaces',
              'Understanding the `__resolveType` resolver',
            ]}
          />
          <h2>Apollo Client</h2>
          <h5>Before Lunch</h5>
          <p>
            After the break, we'll turn to the consumer of GraphQL, the client.
            A GraphQL client can be any type of application that consumes the
            data on your API. Clients include web sites, but they also include
            native apps, virtual reality applications, even command line
            applications. Any client that supports JavaScript can take advantage
            of Apollo Client, a tool that helps us work faster and more
            efficiently by managing network requests and caching data. In this
            next block, we're going to learn to use it.
          </p>
          <Topics
            topics={[
              'GraphQL Requests with HTTP',
              'Using the Apollo Client to send Queries',
              'Understanding the `gql` function and ASTs',
              'Mutating data with the Apollo Client',
              'Working with the `InMemoryCache`',
              'Changing local data stored in the Cache',
              'Handling Network Requests with `ApolloLink`',
            ]}
          />
          <h2>Apollo And React</h2>
          <h5>After Lunch</h5>
          <p>
            Currently, React is the most popular library for building user
            interfaces. Since we wrote our first book on React, twice, we're
            going to use it to build a client. Together we are going to build a
            robust web client that uses the latest React goodies like Hooks,
            Context, and Suspense. If you have never used React before, don't
            worry we've got you covered. At the end of this segment, you will
            feel confident about being able to build your own web client.
          </p>
          <Topics
            topics={[
              'General React Overview',
              'Create React App',
              'Building UI components with React',
              'Consuming data with the `useQuery` Hook',
              'Changing data with the `useMutation` Hook',
              'Understanding Context',
              'Interacting with Apollo Client Directly',
            ]}
          />
          <h2>Lab: Build an API</h2>
          <h5>End of the Day</h5>
          <p>
            With all their new knowledge, students will want to write code,
            they'll want to build apps. We're going to let them do it. In this
            section we are going to build a client for a GraphQL API. We'll
            provide the API, or you can use your own. Students can build a web
            client with React, Vanilla JavaScript, or their favorite UI library.
            If you don't have a favorite UI library, because you are a backend
            developer, you'll get to build a CLI.
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
