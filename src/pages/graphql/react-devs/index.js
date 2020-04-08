import React from 'react';
import { css } from '@emotion/core';
import Layout from 'components/Layout';
import { Container } from 'components/markupHelpers';
import { bpMaxSM, bpMaxMD } from 'lib/breakpoints';
import Topics from 'components/Topics';
import HeaderImage from 'images/react-stack.svg';
import Categories from 'data/categories';
import TrainingInfo from 'components/TrainingInfo';

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
          <h1>Live Online Workshop: GraphQL for React Developers</h1>
          <h5>Length: 2 Hours</h5>
          <p>
            GraphQL is changing the way that we think about data in our
            applications. So what does this mean for React developers?
          </p>
          <p>
            In this two-hour, hands-on workshop, we’ll start with a look at
            GraphQL's core concepts. Then we’ll learn how to fetch data from a
            GraphQL API with lightweight clients. From there, we’ll get into
            Apollo Client and how to use hooks for data fetching in components.
          </p>
          <h5>
            <span role="img">🎟</span> Reserve Your Spot Today! Two sessions
            available!
          </h5>
          <ul>
            <li>
              <a href="https://zoom.us/webinar/register/WN_lsbF5pphSfGkntzQ9TsHDw">
                Register for May 13, 2020, 9:00AM Pacific Time
              </a>
            </li>
            <li>
              <a href="https://zoom.us/webinar/register/WN_45b2PzfURaqoNStiv3sr6A">
                Register for May 19, 2020, 9:00PM Pacific Time
              </a>
            </li>
          </ul>
          <p>
            If you're not able to attend either of these sessions live, still
            sign up to receive the recording.
          </p>
          <Topics
            topics={[
              'GraphQL Overview',
              'Understanding GraphQL Schemas',
              'Setting Up Apollo Client',
              'Fetching Data in React Components',
              'Working with the useQuery Hook'
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
