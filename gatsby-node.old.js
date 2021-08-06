/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

const pageLayouts = {
  post: 'post',
  page: 'page',
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templateLayoutForPost = path.resolve(`src/layout/BlogPost.js`)
  const templateLayoutForPage = path.resolve(`src/layout/BasicPage.js`)
  // pages marked as category hidden are ommited
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { ne: "hidden" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              layout
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Actually creating the page
    const allPages = result.data.allMarkdownRemark.edges
    const pages = allPages.filter(
      edge => edge.node.frontmatter.layout === pageLayouts.page
    )
    const posts = allPages.filter(
      edge => edge.node.frontmatter.layout === pageLayouts.post
    )
    const others = allPages.filter(
      edge =>
        edge.node.frontmatter.layout !== pageLayouts.post &&
        edge.node.frontmatter.layout !== pageLayouts.page
    )

    if (0 < others.length) {
      console.warn('found pages with unhandled layouts. Will ignore them:')
      console.log(others)
    }

    posts.forEach(({ node }, index) => {
      // false if no previous or no next
      const previousPost = index === 0 ? false : posts[index - 1].node
      const nextPost =
        index === posts.length - 1 ? false : posts[index + 1].node

      createPage({
        path: node.frontmatter.path,
        component: templateLayoutForPost,
        context: {
          previousPost,
          nextPost,
        }, // additional data can be passed via context
      })
    })

    pages.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: templateLayoutForPage,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-image-lightbox/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
