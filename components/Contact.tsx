import React from 'react'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import styled, { DefaultTheme } from 'styled-components'
import { usePOST } from '../hooks/api'
import { useIntl } from 'react-intl'

const Outer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 70vh;
  background: ${({ theme }) => theme.bg};
  padding: 60px 0 0 0;
  max-width: 1000px;
  width: 100%;
`

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 14px;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.green};
  font-weight: bold;
  font-size: 2rem;
  font-family: 'IBM Plex Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 3.5rem;
  text-align: left;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 900px;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: nowrap;
  width: 100%;
`

const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 250px;
`

const Label = styled.label`
  color: #888;
  font-size: 0.95rem;
  margin-bottom: 0.7rem;
  font-weight: 500;
`

const baseInputStyles = ({ theme }: { theme: DefaultTheme }) => `
  border: none;
  border-bottom: 1px solid #999;
  background-color: transparent;
  font-size: 1.05rem;
  padding: 0.35rem 0;
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-bottom: 2px solid ${theme.green};
  }
`

const Input = styled.input(baseInputStyles)

const Textarea = styled.textarea(baseInputStyles)

const SubmitButton = styled.button`
  margin-top: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  letter-spacing: 2px;
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  min-width: 92px;
  height: 48px;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

const Contact: React.FC = () => {
  const intl = useIntl()
  const [token, setToken] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [, setBody] = usePOST('https://julianehendershot.com/api/email')

  // Load from localStorage on mount
  React.useEffect(() => {
    setSubject(localStorage.getItem('contact_subject') || '')
    setEmail(localStorage.getItem('contact_email') || '')
    setMessage(localStorage.getItem('contact_message') || '')
  }, [])

  // Save to localStorage on change
  React.useEffect(() => {
    localStorage.setItem('contact_subject', subject)
  }, [subject])

  React.useEffect(() => {
    localStorage.setItem('contact_email', email)
  }, [email])

  React.useEffect(() => {
    localStorage.setItem('contact_message', message)
  }, [message])

  const handleOnVerify = (t: string): void => setToken(t)

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    setBody({ subject, email, message, token })
  }

  return (
    <Outer>
      <Container>
        <Title id='contact'>
          {intl.formatMessage({ id: 'contact', defaultMessage: 'Contact' })}
        </Title>
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <Field>
              <Label htmlFor='subject'>
                {intl.formatMessage({ id: 'name', defaultMessage: 'Name' })}
              </Label>
              <Input
                id='subject'
                name='subject'
                type='text'
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Field>
            <Field>
              <Label htmlFor='email'>
                {intl.formatMessage({ id: 'email', defaultMessage: 'Email' })}
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
          </Row>
          <Row style={{ maxWidth: '50%' }}>
            <Field style={{ flex: 1 }}>
              <Label htmlFor='message'>
                {intl.formatMessage({
                  id: 'message',
                  defaultMessage: 'Message',
                })}
              </Label>
              <Input
                id='message'
                name='message'
                type='text'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
          </Row>
          <GoogleReCaptcha onVerify={handleOnVerify} />
          <SubmitButton type='submit' disabled={!token}>
            {intl.formatMessage({ id: 'send', defaultMessage: 'Send' })}
          </SubmitButton>
        </Form>
      </Container>
    </Outer>
  )
}

export default Contact
