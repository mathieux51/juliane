import dynamic from 'next/dynamic'
import React from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { media } from '../helpers/helpers'

const Youtube = dynamic(() => import('./Youtube'))
const Vimeo = dynamic(() => import('./Vimeo'))
const Video = dynamic(() => import('./Video'))

const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  padding: 80px 24px;

  ${media.medium`
    padding: 120px 24px;
  `}
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
  text-align: center;

  ${media.medium`
    margin-bottom: 64px;
  `}
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
  justify-content: center;
  gap: 8px;

  &::before,
  &::after {
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

const SectionDescription = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${media.small`
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  `}

  ${media.medium`
    gap: 32px;
  `}
`

const VideoCard = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  }
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.charcoal};
`

const VideoInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const VideoTitle = styled.h3`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
`

const VideoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const VideoCategory = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`

const VideoClient = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.textMuted};
`

const StyledYoutube = styled(Youtube)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledVimeo = styled(Vimeo)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledVideo = styled(Video)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

type VideoItem = {
  type: 'youtube' | 'vimeo' | 'video'
  id?: string
  src?: string
  backgroundImage?: string
  title: string
  category: string
  client: string
}

const videoData: VideoItem[] = [
  {
    type: 'vimeo',
    id: '598756966',
    backgroundImage: 'expert-talks-diagana.png',
    title: 'Expert Talks - Diagana',
    category: 'Interview',
    client: 'Expert Talks',
  },
  {
    type: 'youtube',
    id: 'OLKjzVnu9Tk',
    title: 'Butch Vig Documentary',
    category: 'Documentary',
    client: 'Music Production',
  },
  {
    type: 'youtube',
    id: 'q6crsrAmDLQ',
    title: 'Retro Promo',
    category: 'Commercial',
    client: 'Brand Campaign',
  },
  {
    type: 'vimeo',
    id: '561815901',
    backgroundImage: 'user-story.png',
    title: 'User Story',
    category: 'Corporate',
    client: 'Tech Company',
  },
  {
    type: 'video',
    src: 'humanoo.mp4',
    backgroundImage: 'humanoo.png',
    title: 'Humanoo',
    category: 'App Promo',
    client: 'Humanoo',
  },
  {
    type: 'vimeo',
    id: '630805272',
    backgroundImage: 'boost-up.png',
    title: 'Boost Up',
    category: 'Corporate',
    client: 'Startup',
  },
  {
    type: 'vimeo',
    id: '598755066',
    backgroundImage: 'expert-talks-carre.png',
    title: 'Expert Talks - Carre',
    category: 'Interview',
    client: 'Expert Talks',
  },
  {
    type: 'youtube',
    id: 'wE72A-bV_HQ',
    title: 'Christmas Ham',
    category: 'Creative',
    client: 'Personal Project',
  },
]

type Props = {
  className?: string
}

const Videos: React.FC<Props> = ({ className }) => {
  const intl = useIntl()

  const renderVideo = (video: VideoItem) => {
    switch (video.type) {
      case 'youtube':
        return <StyledYoutube id={video.id!} title={video.title} />
      case 'vimeo':
        return (
          <StyledVimeo
            id={video.id!}
            backgroundImage={video.backgroundImage!}
          />
        )
      case 'video':
        return (
          <StyledVideo
            src={video.src!}
            backgroundImage={video.backgroundImage!}
          />
        )
    }
  }

  return (
    <Section id='work' className={className}>
      <Container>
        <SectionHeader>
          <SectionLabel>
            {intl.formatMessage({
              id: 'work.label',
              defaultMessage: 'Portfolio',
            })}
          </SectionLabel>
          <SectionTitle>
            {intl.formatMessage({
              id: 'work.title',
              defaultMessage: 'Selected Work',
            })}
          </SectionTitle>
          <SectionDescription>
            {intl.formatMessage({
              id: 'work.description',
              defaultMessage:
                'A curated selection of video editing projects spanning documentaries, commercials, and creative content.',
            })}
          </SectionDescription>
        </SectionHeader>

        <VideoGrid>
          {videoData.map((video, index) => (
            <VideoCard key={index}>
              <VideoWrapper>{renderVideo(video)}</VideoWrapper>
              <VideoInfo>
                <VideoTitle>{video.title}</VideoTitle>
                <VideoMeta>
                  <VideoCategory>{video.category}</VideoCategory>
                  <VideoClient>{video.client}</VideoClient>
                </VideoMeta>
              </VideoInfo>
            </VideoCard>
          ))}
        </VideoGrid>
      </Container>
    </Section>
  )
}

export default Videos
