import React from 'react'
import { Link, graphql } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../components/MetaTags'
import './index.scss'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <MainLayout>
      <MetaTags title={'Home'} />
      <div className="home homePosts">
        <div></div>

        <div className="postGrid">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                // TODO : remove underline and otherwise seems ok
                <Link
                  className="post"
                  to={`${post.frontmatter.path}#content`}
                  key={post.id}
                >
                  <div
                    className="postHeader"
                    style={{
                      backgroundImage:
                        'url(' +
                        post.frontmatter.image.childImageSharp.fixed.src +
                        ')',
                    }}
                  >
                    <div className="inside">
                      <span className="postTitle">
                        {post.frontmatter.title}
                      </span>
                      <span className="post-meta postTag">
                        {post.frontmatter.subtitle}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>

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
