import React from 'react'
import { Link, graphql } from 'gatsby'
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot'
import SEO from '../bits/SEO/SEO'
import { educationPageStrings } from '../locales/strings'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded'

import SchoolIcon from '@mui/icons-material/School'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'

import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  joinBetaCallCSS,
  subjectTitleCSS,
  punchlineFeatureCSS,
  clientsLogoGridCSS,
  clientLogoCSS,
  imageBackgroundCSS,
  iconContainerCSS,
  thirdPageContainerCSS,
  subtextCSS,
  revLinkCSS,
  badgeContainerCSS,
} from '../styles'

import { CLIENTS_LOGOS } from '../logos'
import AppStoreBadges from '../bits/Rev/AppStoreBadges/AppStoreBadges'
import { useTheme } from '@mui/material'

const MAILCHIMP_URL =
  'https://reveality.us5.list-manage.com/subscribe/post?u=8b4e477d425a1fcb90d90a287&amp;id=7331d8e0bb'

export default function Index({ data, pageContext: { langCode }, location }) {
  const theme = useTheme()
  const LOCAL = educationPageStrings[langCode]
  const posts = data.allMdx.edges
  const localesOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <LayoutRoot language={langCode} location={{ ...location }}>
      <SEO title={'Education'} langCode={langCode} useRobotoFont={true} />
      <div
        css={{
          ...responsiveContainerCSS,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1
          css={{
            ...subjectTitleCSS(theme),
            textAlign: 'center',
            marginTop: '4rem',
          }}
        >
          {LOCAL['punchline']}
        </h1>

        <div css={responsiveContainerCSS}>
          <div
            css={{
              ...responsiveContainerInsideCSS,
              display: 'block',
              paddingBottom: '56.25%',
              position: 'relative',
              height: '0px',
              overflow: 'hidden',
              margin: '0px',
              marginBottom: '4rem',
            }}
          >
            <iframe
              css={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
              }}
              src="https://www.youtube.com/embed/I7a_KLPCZgs?rel=0&color=white&modestbranding=1"
              title="How to create with Reveality (Video)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div css={responsiveContainerCSS}>
          <div
            css={{
              ...responsiveContainerInsideCSS,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <TouchAppOutlinedIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span css={{ marginTop: '1em' }}>
                  {LOCAL['Simple, Intuitif']}
                </span>
              </h3>
              <p css={subtextCSS}>{LOCAL[`smartApp`]}</p>
            </div>

            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <FlashOnRoundedIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>{LOCAL[`Flow Rapide`]}</span>
              </h3>
              <p css={subtextCSS}>{LOCAL[`5mns`]}</p>
            </div>

            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <PlayCircleFilledIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>
                  {LOCAL['restitutionTitle']}
                </span>
              </h3>
              <p css={subtextCSS}>{LOCAL[`restitution`]}</p>
            </div>

            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <HomeRoundedIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>{LOCAL[`athomeTitle`]}</span>
              </h3>
              <p css={subtextCSS}>{LOCAL[`athome`]}</p>
            </div>

            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <BuildOutlinedIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>
                  {LOCAL[`easySetupTitle`]}
                </span>
              </h3>
              <p css={subtextCSS}>{LOCAL[`easySetUp`]}</p>
            </div>
            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <SchoolIcon fontSize="large" style={{ color: '#649de3' }} />
                <span style={{ marginTop: '1em' }}>
                  {LOCAL['teacherModeTitle']}
                </span>
              </h3>
              <p css={subtextCSS}>{LOCAL[`teacherMode`]}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '4rem',
            marginBottom: '8rem',
          }}
        >
          <h3 css={joinBetaCallCSS}>{LOCAL['getApp']}</h3>
          <AppStoreBadges />
        </div>

        <h2 css={{ ...subjectTitleCSS, textAlign: 'center' }}>
          {LOCAL['partners']}
        </h2>

        <div css={responsiveContainerCSS}>
          <div css={responsiveContainerInsideCSS}>
            <div css={clientsLogoGridCSS}>
              {CLIENTS_LOGOS.map((logo) => {
                return (
                  <a
                    key={logo.siteUrl}
                    css={{
                      ...clientLogoCSS,
                      ...imageBackgroundCSS(logo.imageUrl),
                      transform: `scale(${logo.scale ? logo.scale : 1})`,
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={logo.siteUrl}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div css={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Link to={'/'} css={revLinkCSS(theme)}>
            {LOCAL[`Retour à l'accueil`]}
          </Link>
        </div>
      </div>
    </LayoutRoot>
  )
}

export const indexPageQuery = graphql`
  query EducQuery {
    backgrounds: allFile(filter: { absolutePath: { regex: "/backgrounds/" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: "event" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            category
            subtitle
            language
            image {
              childImageSharp {
                gatsbyImageData(height: 500, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
