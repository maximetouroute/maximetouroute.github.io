import React from 'react'
import Layout from './layout'
import './page.scss'
import 'moment'

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <Layout>
      <div className="coverBand"
           style={{ backgroundImage: 'url(' + post.frontmatter.cover.childImageSharp.fixed.src + ')' }} id="content">
        <div className="overlay">
          <div className="punchline">{post.frontmatter.title}</div>
          <div className="subtext">
            <p><strong>{post.frontmatter.subtitle} </strong></p>
            <p><em>{new Date(post.frontmatter.date).getFullYear()}</em></p>
          </div>
        </div>
      </div>

      <div className="Page">
        <article className="card" itemScope itemType="http://schema.org/BlogPosting">
          <div className="article">
            <br/><br/>
            <div className="content" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }}/>
          </div>
        </article>
      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                subtitle
                cover {
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
    }`
