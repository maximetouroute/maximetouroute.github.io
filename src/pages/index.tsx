import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import LayoutRoot from '../bits/Rev/LayoutRoot/LayoutRoot'
import SEO from '../bits/SEO/SEO'
import Hero from '../bits/Rev/Hero/Hero'
import { indexPageStrings } from '../locales/strings'
import AppStoreBadges from './../bits/Rev/AppStoreBadges/AppStoreBadges'
import Partners from '../bits/Rev/Partners/Partners'
import { PARTNERS_LOGOS, CLIENTS_LOGOS } from '../logos'
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
} from '../styles'
import TheApp from '../bits/Rev/TheApp/TheApp'
import PostGrid from '../bits/Rev/PostGridFlat/PostGridFlat'
import { StringList } from '../bits/types'
import { useTheme } from '@mui/material'
import AdvancedUsers from '../bits/Rev/AdvancedUsers/AdvancedUsers'
import AboutUs from '../bits/Rev/AboutUs/AboutUs'

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

const strings: StringList = {
  madeWith: {
    ['en']: 'Made with Reveality',
    ['fr']: 'Fait avec Reveality',
  },
}
export default function Index({ data, pageContext: { langCode }, location }) {
  const theme = useTheme()
  const posts = data.allMdx.edges
  // const LOCAL = indexPageStrings[langCode];
  const postsInMyLang = posts.filter(
    (post) => post.node.frontmatter.language === langCode
  )

  return (
    <LayoutRoot language={langCode} location={{ ...location }}>
      <SEO title={'Home'} langCode={langCode} useRobotoFont={true} />
      <Hero langCode={langCode} />

      <div css={mainViewCSS}>
        <h2 css={punchlineCSS(theme)}> {strings['madeWith'][langCode]}</h2>
        <PostGrid posts={postsInMyLang} langCode={langCode} />
      </div>
      <TheApp langCode={langCode} />

      <AboutUs langCode={langCode} />
      <Partners langCode={langCode} />

      <AdvancedUsers langCode={langCode} />
    </LayoutRoot>
  )
}

export const portfolioPostsQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { frontmatter: { priority: ASC } }
      filter: { frontmatter: { category: { eq: "portfolio" } } }
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
