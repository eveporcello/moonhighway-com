import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import { bpMaxSM, bpMaxMD } from '../lib/breakpoints'
import { fonts } from '../lib/typography'

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = ({ response }) => {
  return (
    <div>
      Thanks! {/* Double opt in */}
      Please confirm your subscription and you'll be on your way.
      {/* Single opt in
      You've been added to the list. */}
    </div>
  )
}

class SubscribeForm extends Component {
  state = {
    submitted: false,
  }

  async handleSubmit(values) {
    this.setState({ submitted: true, loading: true })
    try {
      const response = await fetch(
        `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`,
        {
          method: 'post',
          body: JSON.stringify(values, null, 2),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      const responseJson = await response.json()

      this.setState({
        submitted: true,
        loading: false,
        response: responseJson,
        errorMessage: null,
      })
    } catch (error) {
      this.setState({
        submitted: false,
        loading: false,
        errorMessage: 'Something went wrong!',
      })
    }
  }

  render() {
    const { submitted, loading, response, errorMessage } = this.state
    const successful = response && response.status === 'success'
    return (
      <div>
        {!successful && <h4>Subscribe to get our latest content by email</h4>}
        {!successful && (
          <Formik
            initialValues={{
              email_address: '',
              first_name: '',
            }}
            validationSchema={SubscribeSchema}
            onSubmit={values => this.handleSubmit(values)}
            render={({ errors, touched }) => (
              <Form
                css={css`
                  display: flex;
                  justify-content: space-between;
                  ${bpMaxSM} {
                    flex-direction: column;
                    max-width: 400px;
                  }
                `}
              >
                <div css={InputWrapperStyles}>
                  <label htmlFor="first_name">
                    <p>Your first name</p>
                    <Field
                      aria-label="your first name"
                      aria-required="false"
                      type="text"
                      placeholder="Your first name"
                      name="first_name"
                      css={InputStyles}
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      css={errorStyles}
                    />
                  </label>
                </div>

                <div css={InputWrapperStyles}>
                  <label htmlFor="email">
                    <p>Your email address</p>
                    <Field
                      aria-label="your email address"
                      aria-required="true"
                      name="email_address"
                      placeholder="Your email address"
                      type="email"
                      css={InputStyles}
                    />
                    <ErrorMessage
                      name="email_address"
                      component="div"
                      css={errorStyles}
                    />
                  </label>
                </div>
                <div css={InputWrapperStyles}>
                  <SubmitBtn data-element="submit" type="submit">
                    {!loading && 'Subscribe'}
                    {loading && 'Submitting...'}
                  </SubmitBtn>
                  <div
                    css={css`
                      opacity: 0.6;
                      color: #090909;
                      font-size: 12px;
                      line-height: 1.25;
                      margin-top: 15px;
                    `}
                  >
                    We won't send you spam. Unsubscribe at any time.
                  </div>
                </div>
              </Form>
            )}
          />
        )}
        {submitted && !loading && <PostSubmissionMessage response={response} />}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    )
  }
}

const SubmitBtn = props => {
  const { children, ...restProps } = props
  return (
    <button
      {...restProps}
      css={css`
        font-size: 16px;
        line-height: 1.25;
        padding: 12px 16px;
        background: black;
        color: white;
        margin: 0;
        box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        cursor: pointer;
        border: none;
        height: 50px;
      `}
    >
      <span>{children}</span>
      <span
        css={css`
          margin-left: 20px;
        `}
      >
        →
      </span>
    </button>
  )
}

const InputWrapperStyles = css`
  p {
    display: none;
    visibility: hidden;
  }
  width: 32.5%;
  flex-shrink: 0;
  ${bpMaxSM} {
    width: 100%;
    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }
`
const InputStyles = css`
  width: 100%;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  background: #fafafa;
  box-shadow: none;
  padding: 12px 16px;
  height: 50px;
  transition: 100ms;
  box-sizing: border-box;
  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
    transition: 100ms;
  }
  &:focus {
    outline: none;
    border: 1px solid #adadad;
    box-sizing: border-box;

    &::placeholder {
      color: transparent;
    }
  }
`

const errorStyles = css`
  color: red;
  font-size: 12px;
  line-height: 1.25;
  margin-top: 15px;
`

export default SubscribeForm
