import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { media } from '../helpers/helpers'

const HeroSection = styled.section`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.bg} 0%,
    ${({ theme }) => theme.warmGrey} 100%
  );
  padding: 60px 24px;
  position: relative;
  overflow: hidden;

  ${media.medium`
    min-height: 80vh;
    padding: 80px 24px;
  `}
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;

  ${media.medium`
    flex-direction: row;
    text-align: left;
    gap: 80px;
  `}
`

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.medium`
    gap: 32px;
  `}
`

const Eyebrow = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${media.medium`
    justify-content: flex-start;
  `}

  &::before {
    content: '';
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.accent};
  }
`

const Name = styled.h1`
  font-family: 'IBM Plex Mono', monospace;
  font-size: clamp(32px, 6vw, 56px);
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: -0.03em;
  line-height: 1.1;
`

const Tagline = styled.p`
  font-size: clamp(18px, 2.5vw, 22px);
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  max-width: 520px;

  ${media.medium`
    max-width: 100%;
  `}
`

const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.textMuted};

  ${media.medium`
    justify-content: flex-start;
  `}

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.accent};
  }
`

const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;

  ${media.small`
    flex-direction: row;
    gap: 16px;
  `}
`

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 15px;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    background: ${({ theme }) => theme.primaryLight};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(30, 58, 95, 0.25);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 15px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: rgba(30, 58, 95, 0.04);
  }
`

const ProfileImageContainer = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.primaryLight} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;

  ${media.medium`
    width: 360px;
    height: 360px;
  `}

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 28px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.accent} 0%,
      transparent 50%
    );
    z-index: -1;
  }
`

const ProfileImage = styled.img`
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border-radius: 20px;
  object-fit: cover;
  object-position: center top;
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.textMuted};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s ease;

  ${media.small`
    display: flex;
  `}

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  svg {
    width: 20px;
    height: 20px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(6px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`

type Props = {
  className?: string
}

const HeaderBanner: React.FC<Props> = ({ className }) => {
  const intl = useIntl()

  const handleScrollToWork = () => {
    const el = document.getElementById('work')
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleScrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <HeroSection className={className}>
      <HeroContent>
        <TextContent>
          <Eyebrow>
            {intl.formatMessage({ id: 'jobs', defaultMessage: 'Video Editor' })}
          </Eyebrow>

          <Name>JULIANE HENDERSHOT</Name>

          <Tagline>
            {intl.formatMessage({
              id: 'hero.tagline',
              defaultMessage:
                'Crafting compelling visual stories for brands, documentaries, and digital content with precision and creative flair.',
            })}
          </Tagline>

          <Location>
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
            {intl.formatMessage({
              id: 'berlinBased',
              defaultMessage: 'Montpellier / Berlin',
            })}
          </Location>

          <CTAGroup>
            <PrimaryButton
              href='/cv.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
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
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              {intl.formatMessage({
                id: 'hero.downloadCV',
                defaultMessage: 'Download CV',
              })}
            </PrimaryButton>

            <SecondaryButton type='button' onClick={handleScrollToContact}>
              {intl.formatMessage({
                id: 'hero.getInTouch',
                defaultMessage: 'Get in Touch',
              })}
            </SecondaryButton>
          </CTAGroup>
        </TextContent>

        <ProfileImageContainer>
          <ProfileImage src='/juliane.png' alt='Juliane Hendershot' />
        </ProfileImageContainer>
      </HeroContent>

      <ScrollIndicator onClick={handleScrollToWork}>
        <span>
          {intl.formatMessage({
            id: 'hero.scroll',
            defaultMessage: 'View Work',
          })}
        </span>
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
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </ScrollIndicator>
    </HeroSection>
  )
}

export default HeaderBanner
