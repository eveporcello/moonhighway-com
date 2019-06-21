import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import SEO from 'components/SEO'
import { css } from '@emotion/core'
import { Container } from 'components/markupHelpers'
import { bpMaxSM, bpMaxMD } from 'lib/breakpoints'
import { fonts } from 'lib/typography'
import { get } from 'lodash'
import Layout from 'components/Layout'
import Link from 'components/Link'
import isEmpty from 'lodash/isEmpty'
import {
  WorkshopEventsProvider,
  useWorkshopEvents,
} from 'components/workshops/context'
import Workshop from 'components/workshops/workshop'
import WorkshopInterestForm from 'components/workshops/workshopInterestForm'

export default function WorkshopPage(props) {
  return (
    <WorkshopEventsProvider>
      <WorkshopTemplate {...props} />
    </WorkshopEventsProvider>
  )
}

function WorkshopTemplate({ data: { mdx } }) {
  const { title } = mdx.fields
  const { ckTag } = mdx.frontmatter
  const { events: allEvents, isLoading } = useWorkshopEvents()

  const events = allEvents.filter(event => {
    return event.title.toLowerCase() === title.toLowerCase()
  })
  const soldOut = !isEmpty(events) && events[0].remaining <= 0

  return (
    <Layout frontmatter={mdx.frontmatter}>
      <SEO
        frontmatter={mdx.frontmatter}
        metaImage={get(mdx, 'frontmatter.banner.childImageSharp.sizes.src')}
        isBlogPost
      />
      <Container
        maxWidth={640}
        css={css`
          z-index: 999;
          margin-top: 40px;
          margin-bottom: 40px;
          ${bpMaxMD} {
            margin-bottom: 20px;
          }
        `}
      >
        <h1
          css={css`
            text-align: center;
            font-size: 40px;
            margin-bottom: 16px;
            ${bpMaxSM} {
              font-size: 30px;
            }
          `}
        >
          {mdx.frontmatter.title}
        </h1>
        <h5
          css={css`
            text-align: center;
            font-size: 18px;
            font-family: ${fonts.regular};
            font-weight: 100;
            margin-bottom: 48px;
            opacity: 0.75;
          `}
        >
          Remote Workshop
        </h5>

        {mdx.frontmatter.banner && (
          <Img sizes={mdx.frontmatter.banner.childImageSharp.sizes} />
        )}

        {isLoading
          ? 'Loading workshop details...'
          : events.map(scheduledEvent => {
              /* const discount = get(scheduledEvent, 'discounts.early', false) */
              return (
                <Workshop
                  key={scheduledEvent && scheduledEvent.slug}
                  date={scheduledEvent && scheduledEvent.date}
                  startTime={scheduledEvent && scheduledEvent.startTime}
                  endTime={scheduledEvent && scheduledEvent.endTime}
                  url={scheduledEvent && scheduledEvent.url}
                  remaining={scheduledEvent && scheduledEvent.remaining}
                />
              )
            })}

        <MDXRenderer>{mdx.code.body}</MDXRenderer>
        {allEvents.length > 1 && (
          <div
            css={css`
              padding-top: 48px;
            `}
          >
            <Link
              css={css`
                color: inherit;
                background: #f1f1f1;
                border-radius: 3px;
                padding: 20px 25px;
              `}
              aria-label="View all remote workshops"
              to="/workshops/"
            >
              ← All Workshops
            </Link>
          </div>
        )}

        {(!isLoading && isEmpty(events)) ||
          (soldOut && (
            <WorkshopInterestForm subscribeToTag={ckTag} title={title} />
          ))}
      </Container>
    </Layout>
  )
}

export const workshopQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        ckTag
        date(formatString: "MMMM DD, YYYY")
        banner {
          childImageSharp {
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        slug
        description
        keywords
      }
      fields {
        title
      }
      code {
        body
      }
    }
  }
`
