import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.bg};
  padding: 2.5rem 0 1.5rem 0;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.dgray};
`

const FooterTitle = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.green};
  letter-spacing: 0.05em;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-left: 2rem;
`

const FooterLine = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.fg};
  margin: 0 2rem 1rem 2rem;
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  font-size: 0.95rem;
`

const FooterLinks = styled.div`
  a {
    color: ${({ theme }) => theme.dgray};
    text-decoration: none;
    margin-left: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterTitle>JULIANE HENDERSHOT</FooterTitle>
    <FooterLine />
    <FooterBottom>
      <div>© 2025 Juliane Hendershot. All rights reserved.</div>
      <FooterLinks>
        <a href='#' tabIndex={0}>
          Privacy Policy
        </a>{' '}
        |
        <a href='#' tabIndex={0}>
          Legal Notices
        </a>
      </FooterLinks>
    </FooterBottom>
  </FooterContainer>
)

export default Footer
