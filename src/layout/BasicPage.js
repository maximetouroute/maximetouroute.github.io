import React from 'react'
import MainLayout from './MainLayout'
import './Layouts.scss'
import rehypeReact from 'rehype-react'
import PhotoGrid from '../bits/PhotoGrid/PhotoGrid'
import ImageCompare from '../bits/ImageCompare/GatsbyImageCompare'
import MetaTags from '../bits/MetaTags/MetaTags'
import { graphql } from 'gatsby'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'photo-grid': PhotoGrid, 'image-compare': ImageCompare },
}).Compiler

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <MainLayout>
      <MetaTags
        title={post.frontmatter.title}
        description={
          post.frontmatter.description || post.frontmatter.subtitle || ''
        }
        pathname={post.frontmatter.path}
        article
      />

      <div className="Page">
        <article className="card article" id="content">
          <header
            className="header"
            style={{ paddingTop: '1em', paddingBottom: '2em' }}
          ></header>
          <div className="content" itemProp="articleBody">
            {renderAst(post.htmlAst)}
          </div>
        </article>
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst # previously \`html\`
      frontmatter {
        path
        title
      }
    }
  }
`
