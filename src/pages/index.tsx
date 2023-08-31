import React from 'react';
import { Link, graphql } from 'gatsby';
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot';
import SEO from '../bits/SEO/SEO';
import Hero from '../bits/Rev/Hero/Hero';
import { indexPageStrings } from '../locales/strings';
import AppStoreBadges from './../bits/Rev/AppStoreBadges/AppStoreBadges';

import { PARTNERS_LOGOS, CLIENTS_LOGOS } from '../logos';
import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  joinBetaCallCSS,
  punchlineCSS,
  clientsLogoGridCSS,
  clientLogoCSS,
  imageBackgroundCSS,
  mainViewCSS,
  iframeVideoContainerCSS,
  iframeCSS,
} from '../styles';
import TheApp from '../bits/Rev/TheApp/TheApp';

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
      <SEO title={'Home'} langCode={langCode} useRobotoFont={true}/>
      <Hero langCode={langCode}/>
      <div css={mainViewCSS}>

      <TheApp langCode={langCode}/>


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
