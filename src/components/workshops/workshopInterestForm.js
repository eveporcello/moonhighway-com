import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { bpMaxSM } from 'lib/breakpoints'
import { fonts } from 'lib/typography'

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

function PostSubmissionMessage() {
  return (
    <div>
      <h3>Great, one last thing...</h3>
      <p>
        We just sent you an email with the confirmation link.
        <b>Please check your inbox!</b>
      </p>
    </div>
  )
}

const SubscribeFormWrapper = styled.div({
  padding: '72px',
  [bpMaxSM]: {
    padding: '32px',
  },
  borderRadius: '5px',
  marginTop: '64px',
  background: 'white',
})

const StyledForm = styled(Form)`
  margin: 0;
  label {
    margin: 10px 0;
  }
  .field-error {
    display: block;
    font-size: 80%;
  }
  input,
  label {
    width: 100%;
    font-size: 16px;
  }
  ${bpMaxSM} {
    flex-direction: column;
    align-items: flex-start;
    width: auto;

    input {
      margin: 5px 0 0 0 !important;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
  button {
    margin-top: 32px;
    font-size: 16px;
    line-height: 1.25;
    font-family: ${fonts.semibold}, sans-serif;
    padding: 20px 25px;
    background-image: linear-gradient(45deg, #4c3dff 0%, #ae41ff 100%);
    color: white;
    box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: none;
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
  margin-bottom: 16px;
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

function fetchReducer(state, { type, response, error }) {
  switch (type) {
    case 'fetching': {
      return { error: null, response: null, pending: true }
    }
    case 'success': {
      return { error: null, response, pending: false }
    }
    case 'error': {
      return { error, response: null, pending: false }
    }
    default:
      throw new Error(`Unsupported type: ${type}`)
  }
}

function useFetch({ url, body }) {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    error: null,
    response: null,
    pending: false,
  })
  const bodyString = JSON.stringify(body)

  React.useEffect(() => {
    if (url && bodyString) {
      dispatch({ type: 'fetching' })
      fetch(url, {
        method: 'post',
        body: bodyString,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(r => r.json())
        .then(
          response => dispatch({ type: 'success', response }),
          error => dispatch({ type: 'error', error }),
        )
    }
  }, [url, bodyString])

  return state
}

function WorkshopInterestForm({ style, subscribeToTag, title }) {
  const [values, setValues] = React.useState()
  const { pending, response, error } = useFetch({
    url: `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`,
    body: values,
  })

  const errorMessage = error ? 'Something went wrong!' : null
  const submitted = Boolean(response)

  const successful = response && response.status === 'success'

  return (
    <SubscribeFormWrapper style={style}>
      {!successful && (
        <div
          css={css`
            h2 {
              margin-bottom: 16px;
              line-height: 1.25;
              letter-spacing: -0.025rem;
              font-size: 2.25rem;
              ${bpMaxSM} {
                font-size: 1.85rem;
              }
              strong {
                font-family: ${fonts.bold};
              }
            }
            p {
              margin-bottom: 24px;
            }
          `}
        >
          <h2>
            Be the first to know when <strong>{title}</strong> is scheduled.
          </h2>
          <p>
            Get exclusive access to the best prices, discounts, and guarantee
            your spot at this workshop.
          </p>
        </div>
      )}

      {!successful && (
        <Formik
          initialValues={{
            email_address: '',
            first_name: '',
            tags: [subscribeToTag],
          }}
          validationSchema={SubscribeSchema}
          onSubmit={setValues}
          render={() => (
            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <StyledForm>
                <div>
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <label htmlFor="first_name">First name</label>
                    <ErrorMessage
                      name="first_name"
                      component="span"
                      className="field-error"
                    />
                  </div>
                  <Field
                    id="first_name"
                    aria-required="false"
                    name="first_name"
                    placeholder="Jane"
                    type="text"
                    css={InputStyles}
                  />
                </div>

                <div>
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <label htmlFor="email">Email</label>
                    <ErrorMessage
                      name="email_address"
                      component="span"
                      className="field-error"
                    />
                  </div>
                  <Field
                    id="email"
                    aria-required="true"
                    name="email_address"
                    placeholder="jane@acme.com"
                    type="email"
                    css={InputStyles}
                  />
                </div>

                <button data-element="submit" type="submit">
                  {!pending && 'Reserve Your Spot'}
                  {pending && 'Submitting...'}
                </button>
              </StyledForm>
            </div>
          )}
        />
      )}
      {submitted && !pending && <PostSubmissionMessage response={response} />}
      {errorMessage && <div>{errorMessage}</div>}
    </SubscribeFormWrapper>
  )
}

export default WorkshopInterestForm
