import React from 'react'
// import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import styled from 'styled-components'
// import Button from '../components/Button'
import { usePOST } from '../hooks/api'

const Container = styled.div`
  max-width: 978px;
  width: 100%;
  margin-bottom: 80%;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.green};
  font-weight: bold;
  font-size: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Row = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: ${({ theme }) => theme.green};
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`

const baseInputStyles = `
  border: none;
  border-bottom: 1px solid #999;
  background-color: transparent;
  font-size: 1rem;
  padding: 0.25rem 0;
  outline: none;
`

const Input = styled.input`
  ${baseInputStyles}
`

const Textarea = styled.textarea`
  ${baseInputStyles}
  resize: vertical;
  min-height: 100px;
`

const SubmitButton = styled.button`
  margin-top: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  width: 92px;
  height: 48px;

  &:disabled {
    cursor: not-allowed;
  }
`

const Contact: React.FC = () => {
  const [token, setToken] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [state, setBody] = usePOST('/api/email')

  const handleOnVerify = (t: string): void => setToken(t)

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    setBody({ subject, email, message, token })
  }

  return (
    <Container>
      <Title id='contact'>Contact</Title>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Field>
            <Label htmlFor='subject'>Name</Label>
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
            <Label htmlFor='email'>Email</Label>
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
        <Field>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            id='message'
            name='message'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Field>
        <SubmitButton type='submit' disabled={!token}>
          Send
        </SubmitButton>
      </Form>
    </Container>
  )
}

export default Contact
