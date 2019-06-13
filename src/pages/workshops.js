import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import { fonts } from '../lib/typography'
import Link from '../components/Link'
import { Container } from '../components/markupHelpers/'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import Earth from '../images/earth.png'
import {
  WorkshopEventsProvider,
  useWorkshopEvents,
} from '../components/workshops/context'
import UpcomingWorkshops from '../components/workshops/upcomingWorkshops'

export default function RemoteWorkshopsPage(props) {
  return (
    <WorkshopEventsProvider>
      <Workshops {...props} />
    </WorkshopEventsProvider>
  )
}

function Workshops({ data: { site, workshops } }) {
  const { events } = useWorkshopEvents()
  return (
    <Layout
      site={site}
      styles={css`
        flex-grow: 0;
      `}
    >
      <div
        css={css`
          margin-bottom: 2rem;
          padding: 2rem;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-image: url(${Earth});
          background-size: 360px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          ${bpMaxSM} {
            background-size: 280px;
            height: 350px;
            margin-bottom: 1rem;
          }
        `}
      >
        <h1
          css={css`
            font-size: 3.75rem;
            font-weight: bold;
            line-height: 1;
            font-family: ${fonts.bold}, sans-serif;
            letter-spacing: -0.15rem;
            ${bpMaxSM} {
              font-size: 3rem;
            }
          `}
        >
          Remote Workshops
        </h1>
      </div>
      <Container maxWidth={640}>
        <UpcomingWorkshops events={events} />
      </Container>
      {/*
      {workshops.edges.map(({ node: workshop }) => (
        <div key={workshop.id}>
          <Link to={`/${workshop.fields.slug}`}>
            {workshop.frontmatter.title}
          </Link>
        </div>
      ))}
      */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    workshops: allMdx(filter: { fields: { isWorkshop: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
