import React from 'react'
import { Link, graphql } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import SEO from '../bits/SEO/SEO'
import PostGrid from '../bits/PostGridFlat/PostGridFlat'
import { Theme, useTheme, CSSObject, ThemeProvider } from '@emotion/react'
import { themedACSS } from '../bits/styles/styles'
import { strings } from '../locales/strings'
const homeCSS = {
  marginTop: '4rem',
}

const moreProjectsCSS = (theme: Theme): CSSObject => {
  return {
    fontSize: '1.5rem',
    display: 'grid',
    justifySelf: 'center',
    justifyItems: 'center',

    a: {
      textAlign: 'center',
      margin: '1rem',
      marginTop: '4rem',
      ...themedACSS(theme.palette.primary.main),
    },
  }
}

export default function Index({ data, pageContext: { langCode }, location }) {
  // const LOCAL = indexPageStrings[langCode];
  const posts = data.allMdx.edges
  const postsInMyLang = posts.filter(
    (post) => post.node.frontmatter.language === langCode
  )

  return (
    <MainLayout language={langCode} location={{ ...location }}>
      <SEO title={'Home'} langCode={langCode} />
      <div css={homeCSS}>
        <PostGrid posts={postsInMyLang} />
        <div css={(theme) => moreProjectsCSS(theme)}>
          <Link to="/about">{strings['aboutMe'][langCode]}</Link>
        </div>
      </div>
    </MainLayout>
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
