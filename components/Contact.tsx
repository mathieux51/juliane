import React from 'react'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import styled, { css } from 'styled-components'
import Button from '../components/Button'
import P from '../components/P'
import { usePOST } from '../hooks/api'

const Container = styled.div.attrs({ className: 'w100' })`
  padding: 0 2rem;
`

const Title = styled.h2`
  margin-top: 2rem;
  font-size: 1.5rem;
`

const inpuStyles = css`
  height: 2.5rem;
  padding: 1rem;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.16);
  border: 0;
  border-radius: 4px;
`

const Form = styled.form.attrs({ className: 'flex fxd-c' })``
const ErrorMessage = styled.span`
  color: red;
  display: none;
`
const SubjectContainer = styled.div.attrs({ className: 'flex fxd-c' })`
  margin: 1rem 0;
`
const SubjetLabel = styled.label.attrs({ className: '' })``
const SubjetInput = styled.input.attrs({ className: '' })`
  ${inpuStyles}
  margin-top: 0.5rem;
`

const EmailContainer = styled.div.attrs({ className: 'flex fxd-c' })`
  margin: 1rem 0;
`
const EmailLabel = styled.label.attrs({ className: '' })``
const EmailInput = styled.input.attrs({ className: '' })`
  ${inpuStyles}
  margin-top: 0.5rem;
`

const MessageContainer = styled.div.attrs({ className: 'flex fxd-c' })`
  margin: 1rem 0;
`
const MessageLabel = styled.label.attrs({ className: '' })``
const MessageTextarea = styled.textarea.attrs({ className: '' })`
  ${inpuStyles}
  margin-top: 0.5rem;
  height: 5rem;
`

const SubmitButton = styled(Button)`
  margin-top: 1rem;
  border: 1px solid #2bcdc3;
  color: #2bcdc3;
  border-radius: 8px;
  height: 2.75rem;
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`

const Contact: React.FC = () => {
  const [token, setToken] = React.useState<string>('')
  const handleOnVerify = (t: string): void => setToken(t)

  //  Subject
  const [subject, setSubject] = React.useState('')
  const handleOnSubjectChange = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => setSubject(evt.target.value)

  // Email
  const [email, setEmail] = React.useState('')
  const handleOnEmailChange = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => setEmail(evt.target.value)

  // Message
  const [message, setMessage] = React.useState('')
  const handleOnMessageChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ): void => setMessage(evt.target.value)

  const [state, setBody] = usePOST('/api/email')
  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    evt.stopPropagation()
    setBody({
      subject,
      email,
      message,
      token,
    })
  }
  return (
    <Container>
      <Title>
        <a href='#contact' id='contact'>
          Contact
        </a>
      </Title>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt omnis
        magnam voluptatum aut veniam libero hic.
      </P>
      <Form onSubmit={handleOnSubmit}>
        <SubjectContainer>
          <SubjetLabel htmlFor='subject'>
            Subject
            <ErrorMessage>(required)</ErrorMessage>
          </SubjetLabel>
          <SubjetInput
            type='text'
            name='subject'
            id='subject'
            required
            pattern='.{3,}'
            onChange={handleOnSubjectChange}
            value={subject}
          />
        </SubjectContainer>
        <EmailContainer>
          <EmailLabel htmlFor='email'>
            Your E-mail
            <ErrorMessage>(required)</ErrorMessage>
          </EmailLabel>
          <EmailInput
            type='email'
            name='email'
            id='email'
            required
            value={email}
            onChange={handleOnEmailChange}
          />
        </EmailContainer>
        <MessageContainer>
          <MessageLabel htmlFor='message'>
            Message
            <ErrorMessage>(required)</ErrorMessage>
          </MessageLabel>

          <MessageTextarea
            rows={4}
            cols={50}
            name='message'
            id='message'
            required
            value={message}
            onChange={handleOnMessageChange}
          />
        </MessageContainer>
        <GoogleReCaptcha onVerify={handleOnVerify} />
        {token && (
          <SubmitButton type='submit' disabled={state.isLoading}>
            Submit
          </SubmitButton>
        )}
      </Form>
    </Container>
  )
}
export default Contact
