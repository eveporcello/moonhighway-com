import React from 'react';
import { css } from '@emotion/core';
import Layout from 'components/Layout';
import { Container } from 'components/markupHelpers';
import { bpMaxSM, bpMaxMD } from 'lib/breakpoints';
import Topics from 'components/Topics';
import HeaderImage from 'images/graphql-stack.svg';
import Categories from 'data/categories';
import TrainingInfo from 'components/TrainingInfo';
import graphqlForEveryone from 'images/graphql/graphql-for-everyone.png';

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
          <img src={graphqlForEveryone} alt="" />
          <h1>GraphQL is for Everyone Workshops</h1>
          <h2>Free Webinars Once a Month!</h2>
          <p>
            No matter what your job role is, it's likely that you'll need to
            understand how GraphQL works and how you can get data from GraphQL
            APIs. In this online workshop series, you'll learn the basics of
            GraphQL in two parts: The Query Language and The Schema Definition
            Language.
          </p>
          <p>
            Managers, developers, QA, designers, anyone who works with data:
            these sessions are for you.
          </p>
          <hr />
          <h2>
            <span role="img">💐</span> Online Workshop: GraphQL is for Everyone
          </h2>
          <h5>Length: 1 Hour, Free</h5>
          <h5>
            <span role="img">🎟</span> Register Now!
          </h5>
          <ul>
            <li>
              <a href="https://zoom.us/webinar/register/WN_BKNP8olpRbiT2sxT9SfOVw">
                March 3, 2020, 9:00AM Pacific
              </a>
            </li>
            <li>
              <a href="https://zoom.us/webinar/register/WN_ChjHRwgUTGGZSoG_SIQhhA">
                April 14, 2020, 7:00AM Pacific
              </a>
            </li>
          </ul>
          <p>
            If you're looking to start working with GraphQL, this webinar is the
            place to start. In this hour, we'll cover the basics of GraphQL and
            learn how to send queries to get data from GraphQL endpoints. Expect
            some hands-on activities and resources for taking the next steps.
          </p>
          <Topics
            topics={[
              'Why We Use GraphQL',
              'Using GraphiQL and GraphQL Playground',
              'Building GraphQL Queries',
              'Changing Data with Mutations',
              'Using Arguments and Variables',
              'Listening for Changes with Subscriptions',
              'Reviewing a Schema with Introspection'
            ]}
          />
          <h2>
            <span role="img">🦄</span> Online Workshop: Schema Design is for
            Everyone
          </h2>
          <h5>Length: 2 Hours, $149</h5>
          <h5>
            <span role="img">🎟</span> Register Now!
          </h5>
          <ul>
            <li>
              <a href="https://ti.to/moonhighway/graphql-schema-design">
                April 10, 2020, 9AM Pacific
              </a>
            </li>
            <li>
              <a href="https://ti.to/moonhighway/graphql-schemas">
                June 12, 2020, 9AM Pacific
              </a>
            </li>
          </ul>
          <p>
            A strong GraphQL schema is the foundation of any GraphQL API
            project. It's a document that describes your API's types. It's a
            blueprint for building applications. It's a contract that offers a
            shared understanding to developers, managers, and QA, so they can
            build the right products the first time with focus and clarity.
          </p>
          <p>
            In this online course, you'll learn to build readable, scalable,
            well-documented schemas with GraphQL's schema definition language.
            We'll cover real-world examples and best practices that you can
            apply immediately to your own schema design projects. Learn to speak
            the language of GraphQL fluently, no matter your job role.
          </p>
          <Topics
            topics={[
              'Designing a Schemas',
              'Creating Types',
              'Nullable vs. Non-nullable Fields',
              'Connecting Types',
              'Filters and Pagination',
              'Interfaces and Unions',
              'Custom Scalars',
              'Schema Documentation'
            ]}
          />

          <TrainingInfo
            title="GraphQL"
            description={Categories[0].description}
          />
        </section>
      </Container>
    </Layout>
  );
}
