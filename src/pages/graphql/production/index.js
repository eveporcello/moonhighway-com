import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../../../components/Layout'
import { Container } from '../../../components/markupHelpers'
import { bpMaxSM, bpMaxMD } from '../../../lib/breakpoints'
import Topics from '../../../components/Topics'
import graphqlForEveryone from '../../../images/graphql/graphql-for-everyone.svg'
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
          <h1>Production Ready GraphQL</h1>
          <h5>Length 1 day</h5>
          <p>
            <img src={graphqlForEveryone} style={{ float: 'right' }} alt="" />
            What makes an expert? Is it working on the bleeding edge? Is it
            knowing the tools? Is it having strong opinions? On this day, the
            journey to a greater GraphQL begins. We are going to introduce the
            challenges exist out there on the bleeding edge. We are going to
            introduce the swords that can be used to slay those challenges. We
            are going to fuel you with the knowledge to develop your own strong
            opinions. We are going to learn to gracefully orchestrate hundreds
            (thousands?) of different services and APIs. Everyone seems to want
            to know about schema stitching, so we are going to make sure you do
            that before you leave too.
          </p>
          <h2 style={{ clear: 'right' }}>Authorization &amp; Subscriptions</h2>
          <h5>First Thing</h5>
          <p>
            Production apps tend to have users, so we'll need to know how to
            handle their accounts in order to be production ready. We'll start
            the day by looking at techniques for managing users and handling
            authorization with GraphQL. We'll examine code for both username and
            password authorization as well as OAuth with GitHub. Once we have
            identified users, it will be time to see what they are doing in real
            time. For that, we'll need to understand what WebSockets are and how
            they are utilized by GraphQL subscriptions. At this point, you will
            need to fight the urge to rush home to implement accounts on your
            side project, because there is more good stuff to come in the day's
            schedule.
          </p>
          <Topics
            topics={[
              'Authorization Techniques',
              'Implementing Github OAuth',
              'Handling Authorization Headers',
              'Adding Authorized Users to Context',
              'WebSocket Overview',
              'Connecting and Disconnecting Subscriptions',
              'Publishing Subscription Data',
            ]}
          />
          <h2>GraphQL Tools</h2>
          <h5>Before Lunch</h5>
          <p>
            If you want to be faster and more efficient than your competitors at
            building secure, reliable, full stack GraphQL applications, you are
            going to need to lean on tooling that is already in the ecosystem.
            In this segment, we introduce dozens of GraphQL tools and goodies
            for JavaScript developers. Along the way, we will also present the
            challenges that these tools were designed to solve. Students will
            leave this portion of the class with an oversized toolbelt full of
            tools that they can use to solve problems.
          </p>
          <Topics
            topics={[
              'Handling File Uploads',
              'Incorporating Directives',
              'Using the Apollo DevTools',
              'Handling Errors',
              'Wrangling Caching and Batching',
              'Working with the Apollo Engine',
              'Advanced Apollo Client Techniques',
              'Using Security Tools',
              'What you can do with the Apollo CLI',
              'Incorporating the Apollo VSCode Extension',
            ]}
          />
          <h2>API Orchestration</h2>
          <h5>After Lunch</h5>
          <p>
            Orchestration is the task of organizing many services under a single
            API. GraphQL is uniquely positioned to be the ultimate gateway layer
            in your organization's architecture. The techniques that we put to
            practice in this section are all designed to demonstrate how to use
            GraphQL at scale. Many of us work on applications with millions,
            even billions, of users we'll need to understand how to scale
            GraphQL services for the real world.
          </p>
          <Topics
            topics={[
              'Scaling Overview',
              'Running multiple instances of GraphQL',
              'Introducing Microservices',
              'Understanding API Orchestration',
              'GraphQL APIs as Microservices',
              'How to stitch together schemas',
              'Schema stitching challenges',
            ]}
          />
          <h2>Lab: Schema Stitching</h2>
          <h5>End of the Day</h5>
          <p>
            Finally, schema stitching! Students will put their new skills to the
            test by stitching together data from two different GraphQL
            microservices. If there is additional time, students will
            incorporate weather data from a third service.
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
