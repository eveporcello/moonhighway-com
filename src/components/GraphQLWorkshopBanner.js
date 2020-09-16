import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import {bpMaxSM} from 'lib/breakpoints'
import {fonts} from 'lib/typography'
import Link from 'components/Link'
import pinkfire from '../images/graphql-workshop/pinkfire.png'

const CK_ID = 1659077

export default function GraphQLWorkshopBanner({
  title = `Become a GraphQL Boss`,
  button = `Sign Me Up`,
  byline = `Want to learn to build fullstack applications with fast, modern APIs? Our upcoming workshop will fulfil all your grandest GraphQL desires – from schemas to subscriptions and back again.`,
  background = 'linear-gradient(180deg, #F13C89 0%, #E63175 100%)',
}) {
  return (
    <Container>
      <Banner
        css={css({
          background,
        })}
      >
        <Content>
          <Link
            css={css({
              color: '#fcfcfc',
            })}
            to="https://www.graphqlworkshop.com/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="445"
              height="45"
              viewBox="0 0 445 45"
            >
              <path
                fill="#FFE0EC"
                fill-rule="evenodd"
                d="M22.5,0 C24.709139,0 26.5,1.790861 26.5,4 C26.5,4.0511328 26.4990406,4.10204152 26.4971387,4.15270913 L35.8403956,9.54676096 C36.5722458,8.60554615 37.7154065,8 39,8 C41.209139,8 43,9.790861 43,12 C43,13.8801183 41.7028621,15.4572738 39.9546928,15.8853601 L39.9546928,27.1146399 C41.7028621,27.5427262 43,29.1198817 43,31 C43,33.209139 41.209139,35 39,35 C38.0372208,35 37.1538876,34.659851 36.4636192,34.0931716 L26.3550495,39.9291571 C26.4495178,40.2699832 26.5,40.6290962 26.5,41 C26.5,43.209139 24.709139,45 22.5,45 C20.290861,45 18.5,43.209139 18.5,41 C18.5,40.6294581 18.5503837,40.2706839 18.6446741,39.9301547 L8.5353808,34.0939923 C7.84525932,34.6601794 6.96231434,35 6,35 C3.790861,35 2,33.209139 2,31 C2,29.1198817 3.29713789,27.5427262 5.0453072,27.1146399 L5.0453072,15.8853601 C3.29713789,15.4572738 2,13.8801183 2,12 C2,9.790861 3.790861,8 6,8 C7.28459352,8 8.42775416,8.60554615 9.15960442,9.54676096 L18.503,4.151 L18.5,4 C18.5,1.85780461 20.1839685,0.108921124 22.3003597,0.00489530723 L22.5,0 Z M9.82826462,32.1628067 L9.77135902,32.3362534 C9.75570453,32.3804343 9.73929568,32.4242583 9.72214796,32.46771 L19.6467561,38.196608 C20.3724874,37.4580524 21.3827518,37 22.5,37 C23.6172482,37 24.6275126,37.4580524 25.3532439,38.196608 L35.277852,32.46771 C35.2385593,32.3681436 35.2031461,32.2666223 35.1717988,32.1633323 C29.722063,33.0542689 25.4981512,33.5 22.5,33.5 C19.5018488,33.5 15.277937,33.0542689 9.82826462,32.1628067 Z M22.5,10.5 L21,22.7881356 L19.8690219,32.0532101 C20.6230073,32.1844034 21.5,32.25 22.5,32.25 C23.5,32.25 24.3771207,32.1854517 25.131362,32.0563552 L24,22.7881356 L22.5,10.5 Z M19.1042349,6.11496947 L9.95496913,11.3978057 C9.98462578,11.5942184 10,11.7953138 10,12 C10,13.8476435 8.74728533,15.4026999 7.0448717,15.8621533 L7.0448717,27.1378467 C7.63273212,27.2965006 8.1669709,27.585793 8.61452433,27.9726603 C10.966916,24.7151694 13.178118,21.3903523 15.25,18 C17.3917189,14.4953692 19.2989778,11.060766 20.9717769,7.69619054 C20.1962079,7.3767293 19.5437467,6.81915262 19.1042349,6.11496947 Z M25.895146,6.11596112 C25.4583134,6.81539654 24.8113529,7.37009739 24.0426323,7.69169585 C25.7909426,11.1994674 27.6940327,14.6356899 29.75,18 C31.7388112,21.2544184 33.9529205,24.5761281 36.3923277,27.965129 C36.8397838,27.582223 37.3705166,27.2957873 37.9541281,27.1381168 L37.9541281,15.8618832 C36.252224,15.4020907 35,13.8472817 35,12 C35,11.7956643 35.0153216,11.5949071 35.0448786,11.3988147 L25.895146,6.11596112 Z"
              />
              <text style={{fontWeight: 'bold'}} fill="#FFE0EC" x="58" y="27">
                GraphQLWorkshop.com
              </text>
            </svg>
          </Link>
          <Title>{title}</Title>
          <Byline>{byline}</Byline>
          <p style={{opacity: 0.7}}>
            Find out more and get notified when we launch
          </p>
          <Form
            action={`https://app.convertkit.com/forms/${CK_ID}/subscriptions`}
            method="post"
          >
            <Label for="first_name">
              First name
              <Field
                required
                aria-label="Your first name"
                name="fields[first_name]"
                id="first_name"
                placeholder="Preferred name"
                type="text"
              />
            </Label>
            <Label for="email_address">
              Email
              <Field
                required
                aria-label="Your email address"
                name="email_address"
                id="email_address"
                placeholder="Email address"
                type="email"
              />
            </Label>
            <Button href="https://www.graphqlworkshop.com/">{button}</Button>
          </Form>
        </Content>
        <Box>
          <img
            style={{padding: '2em'}}
            alt="A pink campfire with the GraphQL logo"
            src={pinkfire}
          />
          <h3>Coming Early 2021</h3>
        </Box>
      </Banner>
    </Container>
  )
}

const Container = styled.div({
  padding: '0 1rem',
  maxWidth: 800,
  width: '100%',
})

const Banner = styled.div({
  display: 'flex',
  borderRadius: 8,
  margin: '2rem auto 0 auto',
  [bpMaxSM]: {
    flexDirection: 'column',
  },
})

const Content = styled.div({
  width: '100%',
  padding: '40px 0 40px 40px',
  color: '#fcfcfc',
  [bpMaxSM]: {
    padding: '32px 20px',
  },
})

const Title = styled.h3({
  fontSize: 28,
  lineHeight: '32px',
  fontFamily: fonts.bold,
  marginTop: '1rem',
  marginBottom: 0,
  color: '#fcfcfc',
})

const Byline = styled.p({
  margin: '0.75rem 0',
  paddingBottom: '1rem',
  fontSize: 18,
  opacity: 0.9,
  maxWidth: '400px',
  [bpMaxSM]: {
    maxWidth: '100%',
  },
})

const Button = styled.button({
  marginTop: '0.75rem',
  cursor: 'pointer',
  padding: '10px 16px',
  backgroundImage: 'linear-gradient(180deg, #fcfcfc 0%, #F8F5F6 100%)',
  borderRadius: '5px',
  fontSize: '17px',
  color: '#DE3571',
  fontFamily: fonts.semibold,
  border: 'none',
  transition: 'all 300ms ease',
  ':hover': {
    transition: 'all 300ms ease',
    border: 'none !important',
    textDecoration: 'none',
    transform: 'scale(1.03)',
    boxShadow: '0px 14px 10px -8px #C1205C',
  },
})

const Box = styled.div({
  width: '100%',
  maxWidth: 340,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  padding: '0 20px',
  [bpMaxSM]: {
    maxWidth: '100%',
    flexDirection: 'column-reverse',
  },
  // border: '1px solid white',
  height: '100%',
  h3: {
    fontSize: 24,
    color: '#fcfcfc',
    margin: 0,
    marginBottom: '1.6em',
    [bpMaxSM]: {
      marginBottom: 0,
    },
  },
  img: {
    margin: 0,
    padding: '2.4em',
    paddingBottom: '1em',
    [bpMaxSM]: {
      paddingTop: '0.6em',
      paddingBottom: '2em',
      maxHeight: '420px',
    },
  },
})

const Form = styled.form({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 380,
  alignItems: 'flex-start',
  [bpMaxSM]: {
    alignItems: 'center',
    maxWidth: '100%',
  },
})

const Label = styled.label({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
})

const Field = styled.input({
  margin: '0.3em 0',
  padding: '0.6em',
  border: 'none',
  borderRadius: '4px',
  height: '45px',
  transition: 'all 200ms',
  width: '100%',
})
