import React from 'react'
import { Link, graphql } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import PostGrid from '../bits/PostGrid/PostGrid'
import './index.scss'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <MainLayout>
      <MetaTags title={'Home'} />
      <div className="home">
        <PostGrid posts={posts}></PostGrid>
        <div className="moreProjects">
          <Link to="/about">About me</Link>
        </div>
      </div>
    </MainLayout>
  )
}

export const portfolioPostsQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
            image {
              childImageSharp {
                # Other options include height (set both width and height to crop),
                # grayscale, duotone, rotate, etc.
                fixed(width: 700) {
                  # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                  ...GatsbyImageSharpFixed
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
