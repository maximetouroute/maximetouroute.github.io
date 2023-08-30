/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// This file generates all the pages and all the stuff
// This is where we handle i18n and custom pathes for it
// And custom layouts

// You can delete this file if you're not using it

// WORKAROUND : cannot import lang codes directly from typescript code in src because here we use node without es6-etc support.
// import { supportedLangs, defaultLang } from './src/locales/locales';
// So re-recrate types
const defaultLangCode = 'en'

const supportedLangs = {
  ['en']: {
    urlPrefix: '',
    humanName: 'English',
  },
  ['fr']: {
    urlPrefix: 'fr',
    humanName: 'Français',
  },
}
// WORKAROUND END

const LAYOUTS = {
  page: 'page',
  article: 'article',
}

const path = require('path')
const layoutPage = path.resolve(
  `./src/bits/Rev/LayoutMdxPage/LayoutMdxPage.tsx`
)
const layoutArticle = path.resolve(
  `./src/bits/Rev/LayoutMdxArticle/LayoutMdxArticle.tsx`
)

/**
 * Max's i18n implementation for gatsby (mdx + normal pages)
 * @param {*} node
 * @returns language prefix for URL (is empty for default language)
 */
const getUrlPrefix = (node) => {
  const initialLanguage = node.frontmatter.language
  let languageUrlPrefix = ''
  // Default language if not defined
  if (initialLanguage === void 0 || initialLanguage === null) {
    console.info(
      'No language field in markdown, select default language:' +
        defaultLangCode
    )
    node.frontmatter.language = defaultLangCode
  }
  console.info(`got language ${node.frontmatter.language}`)

  let foundALanguageOtherThanDefault = false
  const language = node.frontmatter.language
  for (let key of Object.keys(supportedLangs)) {
    if (language === key && language !== defaultLangCode) {
      languageUrlPrefix = `/${supportedLangs[key].urlPrefix}`
      foundALanguageOtherThanDefault = true
      break
    }
  }

  if (!foundALanguageOtherThanDefault && language !== defaultLangCode) {
    console.warn(
      `Unhandled language for markdown: ${node.frontmatter.language}. No path change (could conflict with default)`
    )
  }
  return languageUrlPrefix
}

// Utils

// false if no previous or no next
const previousPostLooker = (node, index, mdxArticles) => {
  let indexToLook = index - 1
  while (0 <= indexToLook) {
    // Only lists articles in same language
    if (
      mdxArticles[indexToLook].node.frontmatter.language ==
      node.frontmatter.language
    ) {
      return mdxArticles[indexToLook].node
    }
    indexToLook--
  }
  return false
}

const nextPostLooker = (node, index, mdxArticles) => {
  let indexToLook = index + 1
  while (indexToLook <= mdxArticles.length - 1) {
    // Only lists articles in same language
    if (
      mdxArticles[indexToLook].node.frontmatter.language ==
      node.frontmatter.language
    ) {
      return mdxArticles[indexToLook].node
    }
    indexToLook++
  }
  return false
}

/**
 * Add custom types to markdown
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, printTypeDefinitions } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter @dontInfer {
      title: String!
      path: String!
      layout: String!
      description: String!
      language: String!
      subtitle: String
      tags: String!
      date: Date @dateformat
      category: String,
      priority: Float!
      image: File @fileByRelativePath
      embeddedImagesLocal: [File] @fileByRelativePath
    }
    `)

  // Keep track of types ? What for?
  printTypeDefinitions({ path: './typeDefs.txt' })
}

/**
 * Fired after page creation
 * used to detect JS pages and create their languages variants
 */
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // -- Filter out any pages created by mdx plugin with the default layout
  // We're taking care of it ourselves in CreatePages function
  // Rules : if there is a 20 in path (meaning has not used custom path), remove
  // If there is a page- (same), remove
  // If

  if (page.path.includes('20')) {
    deletePage(page)
    return
  }
  if (page.path.includes('index')) {
    deletePage(page)
    return
  }
  if (page.path.includes('page-')) {
    deletePage(page)
    return
  }

  if (page.context.langCode === void 0) {
    console.info(
      `got a root page with no lang context. ${page.path} Delete page and Create one for each language`
    )
    return new Promise((resolve) => {
      deletePage(page)

      Object.keys(supportedLangs).map((langCode) => {
        const localizedPath =
          langCode === defaultLangCode
            ? page.path
            : supportedLangs[langCode].urlPrefix + page.path

        return createPage({
          component: page.component,
          path: localizedPath,
          context: {
            langCode: langCode,
          },
        })
      })
      resolve()
    })
  }
}

/// ---------------- Custom page generation for markdown files
/**
 * Create our own pages
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Fetch data from Graphql
  // Sort by priority for prev/next post, for them to be the same than on homepage
  return graphql(`
    {
      allMdx(
        sort: { frontmatter: { priority: ASC } }
        limit: 1000
        filter: { frontmatter: { category: { ne: "hidden" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              layout
              title
              language
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      console.error('got error', result.errors)
      return Promise.reject(result.errors)
    }

    const allPages = result.data.allMdx.edges

    const mdxPages = allPages.filter(
      (edge) => edge.node.frontmatter.layout === LAYOUTS.page
    )

    const mdxArticles = allPages.filter(
      (edge) => edge.node.frontmatter.layout === LAYOUTS.article
    )

    const others = allPages.filter(
      (edge) =>
        Object.values(LAYOUTS).indexOf(edge.node.frontmatter.layout) !== -1
    )

    if (0 < others.length) {
      console.warn('found pages with unhandled layouts. Will ignore them:')
      console.warn(JSON.stringify(others))
    }

    mdxArticles.forEach(({ node }, index) => {
      const previousPost = previousPostLooker(node, index, mdxArticles)
      const nextPost = nextPostLooker(node, index, mdxArticles)
      const urlPrefix = getUrlPrefix(node)
      const markdownPath = node.frontmatter.path
      try {
        createPage({
          path: `${urlPrefix}${node.frontmatter.path}`,
          component: `${layoutArticle}?__contentFilePath=${node.internal.contentFilePath}`,
          context: {
            markdownPath,
            previousPost,
            nextPost,
            langCode: node.frontmatter.language,
          }, // additional data can be passed via context
        })
      } catch (e) {
        console.error('well it failed', e)
      }
    }) // foreach article

    mdxPages.forEach(({ node }) => {
      const urlPrefix = getUrlPrefix(node)
      const markdownPath = node.frontmatter.path
      createPage({
        path: `${urlPrefix}${node.frontmatter.path}`,
        component: `${layoutPage}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { markdownPath, langCode: node.frontmatter.language }, // additional data can be passed via context
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
