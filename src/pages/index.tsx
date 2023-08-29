import React from 'react';
import { Link, graphql } from 'gatsby';
import LayoutRoot from '../components/LayoutRoot/LayoutRoot';
import SEO from '../bits/SEO/SEO';
import PostGrid from '../bits/PostGridFlat/PostGridFlat';
import { CSSObject } from '@emotion/react';
import { Theme } from '@mui/material';
import { useState } from 'react';
import { themedACSS } from '../bits/styles/styles';
import Hero from '../components/MaxHero/Hero';
import { strings } from '../locales/strings';
import PostFilterer from '../bits/MaxPostFilterer/PostFilterer';
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
  const posts = data.allMdx.edges
  const postsInMyLang = posts.filter(
    (post) => post.node.frontmatter.language === langCode
  )
  const [filteredPosts, setFilteredPosts] = useState<any>(postsInMyLang);

  return (
    <LayoutRoot language={langCode} location={{ ...location }}>
      <SEO title={'Home'} langCode={langCode} />
      <div css={homeCSS}>
      <Hero langCode={langCode}/>
      <PostFilterer posts={postsInMyLang} langCode={langCode} onFilteredPosts={setFilteredPosts}/>
        <PostGrid posts={filteredPosts} langCode={langCode} />
        <div css={(theme) => moreProjectsCSS(theme)}>
          <Link to="/about">{strings['aboutMe'][langCode]}</Link>
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
