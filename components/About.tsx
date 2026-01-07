import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
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
    grid-template-columns: 1fr 1.5fr;
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

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  ${media.small`
    grid-template-columns: repeat(3, 1fr);
  `}
`

const SkillCard = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`

const SkillIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }
`

const SkillName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;
`

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.borderLight};

  ${media.small`
    gap: 24px;
  `}
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
`

const StatNumber = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  letter-spacing: -0.02em;
`

const StatLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${media.small`
    font-size: 13px;
  `}
`

const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ServiceTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: ${({ theme }) => theme.bg};
  border-radius: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.accent};
  }
`

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const About: React.FC = () => {
  const intl = useIntl()

  const skills = [
    { name: 'Premiere Pro', icon: 'video' },
    { name: 'DaVinci Resolve', icon: 'video' },
    { name: 'After Effects', icon: 'motion' },
    { name: 'Final Cut Pro', icon: 'video' },
    { name: 'Audition', icon: 'audio' },
    { name: 'Color Grading', icon: 'color' },
  ]

  const services = [
    'Commercial Editing',
    'Documentary',
    'Music Videos',
    'Social Media Content',
    'Corporate Videos',
    'Motion Graphics',
  ]

  const renderSkillIcon = () => (
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
        d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
      />
    </svg>
  )

  const renderCheckIcon = () => (
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
  )

  return (
    <Section id='about'>
      <Container>
        <LeftColumn>
          <SectionLabel>
            {intl.formatMessage({
              id: 'about.label',
              defaultMessage: 'About Me',
            })}
          </SectionLabel>

          <SectionTitle>
            {intl.formatMessage({
              id: 'about.title',
              defaultMessage: 'Bringing stories to life through video',
            })}
          </SectionTitle>

          <Description>
            {intl.formatMessage({
              id: 'about.description',
              defaultMessage:
                'With years of experience in video editing, I specialize in creating engaging visual content that captures attention and communicates effectively. From brand videos to documentaries, I bring technical expertise and creative vision to every project.',
            })}
          </Description>

          <StatsRow>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel>
                {intl.formatMessage({
                  id: 'about.stat.projects',
                  defaultMessage: 'Projects',
                })}
              </StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5+</StatNumber>
              <StatLabel>
                {intl.formatMessage({
                  id: 'about.stat.years',
                  defaultMessage: 'Years',
                })}
              </StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>20+</StatNumber>
              <StatLabel>
                {intl.formatMessage({
                  id: 'about.stat.clients',
                  defaultMessage: 'Clients',
                })}
              </StatLabel>
            </StatItem>
          </StatsRow>
        </LeftColumn>

        <RightColumn>
          <div>
            <SectionLabel style={{ marginBottom: '20px' }}>
              {intl.formatMessage({
                id: 'about.skills',
                defaultMessage: 'Tools & Skills',
              })}
            </SectionLabel>
            <SkillsGrid>
              {skills.map((skill) => (
                <SkillCard key={skill.name}>
                  <SkillIcon>{renderSkillIcon()}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>

          <ServicesSection>
            <SectionLabel>
              {intl.formatMessage({
                id: 'about.services',
                defaultMessage: 'Services',
              })}
            </SectionLabel>
            <ServicesList>
              {services.map((service) => (
                <ServiceTag key={service}>
                  {renderCheckIcon()}
                  {service}
                </ServiceTag>
              ))}
            </ServicesList>
          </ServicesSection>
        </RightColumn>
      </Container>
    </Section>
  )
}

export default About
