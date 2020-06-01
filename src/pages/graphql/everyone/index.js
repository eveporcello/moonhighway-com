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
              <a href="https://us02web.zoom.us/webinar/register/WN_h3VjhqkeSRiL-Hh_nAlesg">
                July 7, 2020, 9:30AM Pacific
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
          <TrainingInfo
            title="GraphQL"
            description={Categories[0].description}
          />
        </section>
      </Container>
    </Layout>
  );
}
