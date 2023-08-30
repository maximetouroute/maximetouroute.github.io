import React from 'react';
import { Link, graphql } from 'gatsby';
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot';
import SEO from '../bits/SEO/SEO';
import PostGrid from '../bits/Max/PostGridFlat/PostGridFlat';
import { CSSObject } from '@emotion/react';
import { Theme } from '@mui/material';
import { useState } from 'react';
import { themedACSS } from '../bits/styles/styles';
import Hero from '../bits/Max/MaxHero/Hero';
import PostFilterer from '../bits/Max/MaxPostFilterer/PostFilterer';

import { indexPageStrings } from '../locales/strings';
import demoVideo from './mixVitrine.webm';
import demoVideoSafari from './mixVitrineSafari.mp4';
import AppStoreBadges from './../bits/Rev/AppStoreBadges/AppStoreBadges';
import subjectRaw from './subjectRAW.webm';
import subjectAlpha from './subjectALPHA.webm';
import subjectMix from './subjectMIX.webm';
import { PARTNERS_LOGOS, CLIENTS_LOGOS } from '../logos';
import subjectRawSafariIos from './subjectRAWSafari.mp4';
import subjectAlphaSafariIos from './subjectALPHASafari.mp4';
import subjectMixSafariIos from './subjectMIXSafari.mp4';
import RevealityLogo from '../bits/Rev/RevealityLogo/RevealityLogo';
import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  joinBetaCallCSS,
  subjectTitleCSS,
  subjectVideoCSS,
  punchlineCSS,
  mainVideoCSS,
  clientsLogoGridCSS,
  clientLogoCSS,
  imageBackgroundCSS,
  mainViewCSS,
  mainViewInsideCSS,
  logoAndVideoContainerCSS,
  logoContainerCSS,
  punchlineParagraphCSS,
  mainVideoContainerCSS,
  howDoesItWorkCSS,
  howDoesItWorkPartCSS,
  iframeVideoContainerCSS,
  iframeCSS,
  badgeContainerCSS
} from '../styles';

// const moreProjectsCSS = (theme: Theme): CSSObject => {
//   return {
//     fontSize: '1.5rem',
//     display: 'grid',
//     justifySelf: 'center',
//     justifyItems: 'center',

//     a: {
//       textAlign: 'center',
//       margin: '1rem',
//       marginTop: '4rem',
//       ...themedACSS(theme.palette.primary.main),
//     },
//   }
// }

export default function Index({ data, pageContext: { langCode }, location }) {
  const posts = data.allMdx.edges;
  const LOCAL = indexPageStrings[langCode];
  // const postsInMyLang = posts.filter(
  //   (post) => post.node.frontmatter.language === langCode
  // );
  // const [filteredPosts, setFilteredPosts] = useState<any>(postsInMyLang);

  return (
    <LayoutRoot language={langCode} location={{ ...location }}>
      <SEO title={'Home'} langCode={langCode} />
      <div css={mainViewCSS}>
        <div css={mainViewInsideCSS}>
          <div css={logoAndVideoContainerCSS}>
            <div css={logoContainerCSS}>
              <RevealityLogo />
            </div>

            <h1 css={punchlineCSS}>{LOCAL['punchline']}</h1>
            <p css={punchlineParagraphCSS}>{LOCAL['descriptionPunchline']}</p>
            <p></p>
            <div
              css={badgeContainerCSS}
            >
              <h3 css={joinBetaCallCSS}>{LOCAL['getApp']}</h3>
              <AppStoreBadges/>
            </div>
          </div>

          <div css={mainVideoContainerCSS}>
            <video autoPlay muted loop playsInline css={mainVideoCSS}>
              <source src={demoVideo} type="video/webm" />
              <source src={demoVideoSafari} type="video/mp4" />
            </video>
          </div>
        </div>

        <h1 css={{ ...punchlineCSS, marginTop: '8rem', marginBottom: '2rem' }}>
          {LOCAL['howdoesitwork']}
        </h1>
        <div css={howDoesItWorkCSS}>
          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{LOCAL['shoot']}</h3>

            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectRaw} type="video/webm" />
              <source src={subjectRawSafariIos} type="video/mp4" />
            </video>
          </div>
          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{LOCAL['weProcess']}</h3>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectAlpha} type="video/webm" />
              <source src={subjectAlphaSafariIos} type="video/mp4" />
            </video>
          </div>

          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{LOCAL['reproject']}</h3>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectMix} type="video/webm" />
              <source src={subjectMixSafariIos} type="video/mp4" />
            </video>
          </div>
        </div>

        <h2>{LOCAL['imaginationLimit']}</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h3 css={joinBetaCallCSS}>{LOCAL['getApp']}</h3>
          <AppStoreBadges/>
        </div>

        <div css={responsiveContainerCSS}>
          <div css={iframeVideoContainerCSS}>
            <iframe
              css={iframeCSS}
              src="https://www.youtube.com/embed/I7a_KLPCZgs?rel=0&color=white&modestbranding=1"
              title="How to create with Reveality (Video)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h3 css={punchlineCSS}>Ils travaillent avec nous</h3>
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
                );
              })}
            </div>
          </div>
        </div>

        <h3 css={punchlineCSS}>Ils nous accompagnent</h3>
        <div css={responsiveContainerCSS}>
          <div css={responsiveContainerInsideCSS}>
            <div css={clientsLogoGridCSS}>
              {PARTNERS_LOGOS.map((logo) => {
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
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </LayoutRoot>
  )
}

export const portfolioPostsQuery = graphql`
query IndexQuery {
  allMdx(
    sort: {frontmatter: {priority: ASC}}
    filter: {frontmatter: {category: {eq: "portfolio"}}}
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
          tags
          image {
            colors {
              ...GatsbyImageColors
            }
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
