import React from 'react'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import styled from 'styled-components'
import { usePOST } from '../hooks/api'
import { useIntl } from 'react-intl'
import { media } from '../helpers/helpers'

const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.white};
  padding: 80px 24px;

  ${media.medium`
    padding: 120px 24px;
  `}
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  ${media.medium`
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
  `}
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const SectionLabel = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.accent};
  }
`

const SectionTitle = styled.h2`
  font-family: 'IBM Plex Mono', monospace;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: -0.02em;
  line-height: 1.2;
`

const Description = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
`

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 15px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.primary};
    flex-shrink: 0;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const FormCard = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 20px;
  padding: 32px;

  ${media.medium`
    padding: 40px;
  `}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${media.small`
    grid-template-columns: 1fr 1fr;
  `}
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};
`

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.white};
  font-size: 15px;
  padding: 14px 16px;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(30, 58, 95, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textLight};
  }
`

const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.white};
  font-size: 15px;
  padding: 14px 16px;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
  resize: vertical;
  min-height: 140px;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(30, 58, 95, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textLight};
  }
`

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 15px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  align-self: flex-start;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.primaryLight};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(30, 58, 95, 0.25);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const SuccessMessage = styled.div`
  background: ${({ theme }) => theme.success};
  color: ${({ theme }) => theme.white};
  padding: 16px 20px;
  border-radius: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`

const Contact: React.FC = () => {
  const intl = useIntl()
  const [token, setToken] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [, setBody] = usePOST('https://julianehendershot.com/api/email')

  React.useEffect(() => {
    setSubject(localStorage.getItem('contact_subject') || '')
    setEmail(localStorage.getItem('contact_email') || '')
    setMessage(localStorage.getItem('contact_message') || '')
  }, [])

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
    setIsSubmitted(true)
    // Clear form
    setSubject('')
    setEmail('')
    setMessage('')
    localStorage.removeItem('contact_subject')
    localStorage.removeItem('contact_email')
    localStorage.removeItem('contact_message')
  }

  return (
    <Section id='contact'>
      <Container>
        <LeftColumn>
          <SectionLabel>
            {intl.formatMessage({
              id: 'contact.label',
              defaultMessage: 'Get in Touch',
            })}
          </SectionLabel>

          <SectionTitle>
            {intl.formatMessage({
              id: 'contact.title',
              defaultMessage: "Let's work together",
            })}
          </SectionTitle>

          <Description>
            {intl.formatMessage({
              id: 'contact.description',
              defaultMessage:
                "Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.",
            })}
          </Description>

          <ContactInfo>
            <ContactItem href='mailto:contact@julianehendershot.com'>
              <svg
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              contact@julianehendershot.com
            </ContactItem>

            <ContactItem as='span'>
              <svg
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              Montpellier, France / Berlin, Germany
            </ContactItem>
          </ContactInfo>

          <SocialLinks>
            <SocialLink
              href='https://www.linkedin.com/in/julianehendershot/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <svg fill='currentColor' viewBox='0 0 24 24'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
            </SocialLink>

            <SocialLink
              href='https://www.instagram.com/jr_hendershot/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <svg fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
              </svg>
            </SocialLink>
          </SocialLinks>
        </LeftColumn>

        <FormCard>
          {isSubmitted ? (
            <SuccessMessage>
              <svg
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              {intl.formatMessage({
                id: 'contact.success',
                defaultMessage:
                  'Thank you! Your message has been sent. I will get back to you soon.',
              })}
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleOnSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor='subject'>
                    {intl.formatMessage({
                      id: 'name',
                      defaultMessage: 'Name',
                    })}
                  </Label>
                  <Input
                    id='subject'
                    name='subject'
                    type='text'
                    required
                    placeholder={intl.formatMessage({
                      id: 'contact.namePlaceholder',
                      defaultMessage: 'Your name',
                    })}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor='email'>
                    {intl.formatMessage({
                      id: 'email',
                      defaultMessage: 'Email',
                    })}
                  </Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    required
                    placeholder={intl.formatMessage({
                      id: 'contact.emailPlaceholder',
                      defaultMessage: 'your@email.com',
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor='message'>
                  {intl.formatMessage({
                    id: 'message',
                    defaultMessage: 'Message',
                  })}
                </Label>
                <TextArea
                  id='message'
                  name='message'
                  required
                  placeholder={intl.formatMessage({
                    id: 'contact.messagePlaceholder',
                    defaultMessage: 'Tell me about your project...',
                  })}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormGroup>

              <GoogleReCaptcha onVerify={handleOnVerify} />

              <SubmitButton type='submit' disabled={!token}>
                <svg
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
                {intl.formatMessage({
                  id: 'send',
                  defaultMessage: 'Send Message',
                })}
              </SubmitButton>
            </Form>
          )}
        </FormCard>
      </Container>
    </Section>
  )
}

export default Contact
