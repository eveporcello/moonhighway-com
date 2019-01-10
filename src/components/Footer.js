import React from 'react'
import { css } from '@emotion/core'
import Link from './Link'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import { fonts } from '../lib/typography'

import { Container } from './markupHelpers'
import Logo from './Logo'

import categories from '../data/categories'

const Footer = () => (
  <footer
    css={css`
      width: 100%;
      margin-top: 70px;
      background: #fafafa;
      flex-shrink: 0;
      a {
        color: inherit;
      }
      h4 {
        font-size: 20px;
        font-family: ${fonts.bold}, sans-serif;
      }
    `}
  >
    <div
      css={css`
        background: white;
        box-shadow: 0 10px 50px -10px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        max-width: 1080px;
        margin-left: auto;
        margin-right: auto;
        ${bpMaxMD} {
          max-width: auto;
        }
      `}
    >
      <Container maxWidth={900}>
        <div
          css={css`
            display: flex;
            align-items: flex-start;
            padding: 70px 0;
          `}
        >
          <div>
            <Link to="/#trainings">
              <h4
                css={css`
                  margin-top: 10px;
                `}
              >
                Trainings
              </h4>
            </Link>
            {categories.map(category => (
              <div
                key={category.title}
                css={css`
                  margin: 10px 0;
                  .active {
                    opacity: 0.8;

                    font-family: ${fonts.semibold}, sans-serif;
                    ::before {
                      content: '→';
                      padding-right: 10px;
                    }
                  }
                `}
              >
                <Link to={category.slug} activeClassName="active">
                  {category.title}
                </Link>
              </div>
            ))}
          </div>
          <div
            css={css`
              margin-left: 100px;
            `}
          />
        </div>
      </Container>
    </div>
    <div
      css={css`
        padding: 70px 0;
      `}
    >
      <Container maxWidth={900}>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
              display: block;
              color: rgba(0, 0, 0, 0.9);
            }
            address {
              margin: 0;
              font-style: normal;
            }
            color: rgba(0, 0, 0, 0.5);
            font-size: 13px;
            line-height: 1.65;
          `}
        >
          <Link to="/">
            <Logo width={90} dark />
          </Link>
          <div>
            {' '}
            <a href="mailto:info@moonhighway.com?subject=Hello!">
              info@moonhighway.com
            </a>
            <a href="tel:530-523-3084">(530) 523 - 3084</a>
            Moon Highway, LLC
            <br />
            PO BOX 1578
            <address>Tahoe City, CA 96145</address>
          </div>
        </div>
      </Container>
    </div>
  </footer>
)

export default Footer
