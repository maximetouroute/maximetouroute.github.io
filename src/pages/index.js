import React from 'react'
import { Link, graphql } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import SEO from '../bits/SEO/SEO'
import PostGrid from '../bits/PostGridFlat/PostGridFlat'
import './index.scss'

export default function Index({ data, pageContext: { langCode }, location }) {
  // const LOCAL = indexPageStrings[langCode];
  const posts = data.allMdx.edges
  const postsInMyLang = posts.filter(
    (post) => post.node.frontmatter.language === langCode
  )

  return (
    <MainLayout language={langCode} location={{ ...location }}>
      <SEO title={'Home'} langCode={langCode} />
      <div className="home">
        <PostGrid posts={postsInMyLang}></PostGrid>
        <div className="moreProjects">
          <Link to="/about">About me</Link>
        </div>
      </div>
    </MainLayout>
  )
}

export const portfolioPostsQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { order: ASC, fields: [frontmatter___priority] }
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
