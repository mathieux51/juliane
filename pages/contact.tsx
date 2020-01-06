import React from 'react'
import styled, { css } from 'styled-components'
import { NextPageContext } from 'next'
import { languageFromContext } from '../helpers/helpers'
import Button from '../components/Button'
import P from '../components/P'

// .visuallyhidden {
//   border: 0;
//   clip: rect(0 0 0 0);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   width: 1px;
// }

const Container = styled.div``

const Title = styled.h1`
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
  margin: 1rem;
`
const SubjetLabel = styled.label.attrs({ className: '' })``
const SubjetInput = styled.input.attrs({ className: '' })`
  ${inpuStyles}
  margin-top: 0.5rem;
`

const EmailContainer = styled.div.attrs({ className: 'flex fxd-c' })`
  margin: 1rem;
`
const EmailLabel = styled.label.attrs({ className: '' })``
const EmailInput = styled.input.attrs({ className: '' })`
  ${inpuStyles}
  margin-top: 0.5rem;
`

const MessageContainer = styled.div.attrs({ className: 'flex fxd-c' })`
  margin: 1rem;
`
const MessageLabel = styled.label.attrs({ className: '' })``
const MessageTextarea = styled.textarea.attrs({ className: '' })`
  ${inpuStyles}
  margin-top: 0.5rem;
  height: 5rem;
`

const SubtmitButton = styled(Button)`
  margin-top: 1rem;
  border: 1px solid #2bcdc3;
  color: #2bcdc3;
  border-radius: 8px;
  height: 2.75rem;
`

export default class extends React.PureComponent {
  static async getInitialProps(ctx: NextPageContext) {
    return { language: languageFromContext(ctx) }
  }
  render() {
    return (
      <Container>
        <Title>Contact</Title>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          omnis magnam voluptatum aut veniam libero hic molestiae, quidem quam
          asperiores iste ratione voluptas totam, sequi iure aliquam obcaecati,
          assumenda perspiciatis!
        </P>
        <Form>
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
            />
          </SubjectContainer>
          <EmailContainer>
            <EmailLabel htmlFor='email'>
              Your E-mail
              <ErrorMessage>(required)</ErrorMessage>
            </EmailLabel>
            <EmailInput type='email' name='email' id='email' required />
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
            />
          </MessageContainer>
          <SubtmitButton type='submit'>Submit</SubtmitButton>
        </Form>
      </Container>
    )
  }
}
