import React from 'react'
import Link from '../components/Link'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import MDReactComponent from 'markdown-react-js'

const ItemInfo = styled.div`
  width: 100%;
  opacity: 0.9;
  font-size: 17px;
  color: #090909;
  letter-spacing: 0;
  line-height: 26px;
  ${bpMaxSM} {
    width: auto;
  }
`

const ItemBox = styled.div`
  & + & {
    margin-top: 100px;
  }
  display: flex;
  align-items: center;
  ${bpMaxMD} {
    align-items: flex-start;
  }
  ${bpMaxSM} {
    align-items: center;
  }
  justify-content: center;
  flex-direction: row;
  width: 100%;
  max-width: 920px;
  :nth-of-type(odd) {
    flex-direction: row-reverse;
    .info {
      padding-left: 0px;
      padding-right: 80px;
      ${bpMaxMD} {
        padding-right: 40px;
      }
    }
  }
  .info {
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${bpMaxMD} {
      padding-left: 40px;
    }
  }
  ${bpMaxSM} {
    .info {
      padding: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${bpMaxSM} {
      align-items: center;
    }
    width: 100%;
    margin-bottom: 50px;
    flex-direction: column;
    :nth-of-type(odd) {
      flex-direction: column;
      .info {
        padding: 0;
      }
    }
    .image {
      margin-bottom: 30px;
      ${bpMaxMD} {
        margin-top: 20px;
      }
    }
  }
  img {
    display: block;
    margin: 0;
    width: 100%;
    max-width: 320px;
    height: auto;
  }
  .image {
    ${bpMaxMD} {
      margin-top: 30px;
    }
    overflow: none;
    box-shadow: 0 15px 80px -20px rgba(0, 0, 0, 0.15);
    transition: all 250ms ease-in-out;
    border-radius: 5px;
    overflow: hidden;
    background: white;
    :hover,
    :focus {
      box-shadow: 0 10px 50px -20px rgba(0, 0, 0, 0.35);
      transition: all 250ms ease-in-out;
      outline: none;
    }
  }
  .button {
    cursor: pointer;
    > span > p {
      padding: 13px 20px;
      background: white;
      color: black;
      margin: 0;
      margin-top: 15px;
      box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.15);
      border-radius: 3px;
      strong {
        padding-left: 20px;
        text-decoration: none;
      }
    }
  }
  p {
    margin-bottom: 20px;
    ${bpMaxMD} {
      margin-bottom: 20px;
    }
  }
`

const Item = ({
  title,
  description,
  thumb,
  length,
  button,
  tags = [],
  slug,
}) => {
  return (
    <ItemBox>
      <div
        css={css`
          flex-shrink: 0;
        `}
      >
        <div className="image">
          <Link to={slug}>
            <img src={thumb} alt={title} />
          </Link>
        </div>
      </div>

      <ItemInfo className="info">
        <h1>
          <Link to={slug}>{title}</Link>
        </h1>
        {length && (
          <h5
            css={css`
              margin-bottom: 10px;
            `}
          >
            Length: {length} {length <= 1 ? 'day' : 'days'}
          </h5>
        )}
        <MDReactComponent text={description} />
        {tags && (
          <div
            css={css`
              h5 {
                margin-bottom: 10px;
                opacity: 0.9;
                font-size: 14px;
              }
            `}
          >
            <h5>Topics</h5>
            <div
              css={css`
                //margin-bottom: 50px;
                display: flex;
                flex-wrap: wrap;
              `}
            >
              {tags.map(tag => (
                <span
                  css={css`
                    font-size: 15px;
                    margin: 0px 8px 8px 0;
                    padding: 5px 10px;
                    border-radius: 3px;
                    background: white;
                    box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.2);
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        {button && (
          <Link to={slug} className="button">
            <MDReactComponent text={button} />
          </Link>
        )}
      </ItemInfo>
    </ItemBox>
  )
}

export default Item
