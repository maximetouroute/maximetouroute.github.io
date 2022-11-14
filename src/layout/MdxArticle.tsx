import React from 'react'
import MainLayout from './MainLayout'
import { CSSObject, Theme } from '@emotion/react'
import './BasicPage.scss'
import 'moment'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../bits/SEO/SEO'
import { graphql, Link } from 'gatsby'
import { SHORTCODES } from './MdxBits'
import { injectLinkCSS, breakpointKey, themedACSS } from '../bits/styles/styles'

const nextPrevLinkInsideCoverCSS: CSSObject = {
  marginLeft: '2rem',
  marginRight: '2rem',
  marginTop: '4rem',
  display: 'flex',
  flexWrap: 'wrap',
  //filter: grayscale(1);

  justifyContent: 'space-around',
  [breakpointKey('small')]: {
    // better style in case it takes two lines
    justifyContent: 'space-around',
    marginTop: '2em',
  },

  a: {
    ...themedACSS('#ffffff'),
    color: 'white',
    padding: '0.75em',
    textOverflow: 'ellipsis',
    marginBottom: '1em',
    [breakpointKey('small')]: {
      // better style in case it takes two lines
      // padding: 0.2em;
    },
  },
}

const nextPrevLinkCSS = (theme: Theme): CSSObject => {
  return {
    marginTop: '4rem',
    display: 'flex',
    flexWrap: 'wrap',
    //filter: grayscale(1);

    justifyContent: 'space-around',
    [breakpointKey('small')]: {
      // better style in case it takes two lines
      justifyContent: 'space-around',
      marginTop: '2em',
    },

    a: {
      ...themedACSS(theme.palette.primary.main),
      padding: '0.75em',
      textOverflow: 'ellipsis',
      marginBottom: '1em',
      [breakpointKey('small')]: {
        // better style in case it takes two lines
        // padding: 0.2em;
      },
    },
  }
}

export default function Template({ data: { mdx }, location, pageContext }) {
  const { previousPost, nextPost, langCode } = pageContext
  // content is at false is no previous or next
  const previousPostHtml = previousPost ? (
    <Link to={`${previousPost.frontmatter.path}#content`}>
      ← {previousPost.frontmatter.title}
    </Link>
  ) : (
    <div></div>
  )
  const nextPostHtml = nextPost ? (
    nextPost && (
      <Link to={`${nextPost.frontmatter.path}#content`}>
        {nextPost.frontmatter.title} →
      </Link>
    )
  ) : (
    <div></div>
  )

  return (
    <MainLayout
      language={mdx.frontmatter.language}
      location={{ ...location }}
      accentColor={mdx.frontmatter.image.colors.vibrant}
    >
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.frontmatter.subtitle}
        image={mdx.frontmatter.image.childImageSharp.fixed.src}
        pathname={mdx.frontmatter.path}
        article={true}
        langCode={langCode}
      />
      <div
        className="basicPageCoverBand"
        id="content"
        css={(theme) => ({ backgroundColor: theme.palette.primary.main })}
      >
        <div className="overlay">
          <h1 className="punchline">{mdx.frontmatter.title}</h1>
          <h2 className="subtext">
            <p>
              <strong>{mdx.frontmatter.subtitle} </strong>
              <br />{' '}
            </p>
          </h2>
        </div>
        <div css={nextPrevLinkInsideCoverCSS}>
          {previousPostHtml}
          {nextPostHtml}
        </div>
      </div>

      <div className="Page" css={(theme) => injectLinkCSS(theme)}>
        <article
          className="card"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          {/* css={theme => ({backgroundColor: theme.colors.accent})} */}
          <div className="article">
            <br />
            <br />
            {/* <div css={colorCSS(mdx.frontmatter.image.colors.vibrant)}></div>
            <div css={colorCSS(mdx.frontmatter.image.colors.darkVibrant)}></div>
            <div css={colorCSS(mdx.frontmatter.image.colors.lightVibrant)}></div>
            <div css={colorCSS(mdx.frontmatter.image.colors.muted)}></div>
            <div css={colorCSS(mdx.frontmatter.image.colors.darkMuted)}></div>
            <div css={colorCSS(mdx.frontmatter.image.colors.lightMuted)}></div> */}
            {/* {JSON.stringify(mdx.frontmatter.image.colors)}*/}
            <MDXProvider components={SHORTCODES}>
              <MDXRenderer
                remoteImages={mdx.frontmatter.embeddedImagesRemote}
                localImages={mdx.frontmatter.embeddedImagesLocal}
              >
                {mdx.body}
              </MDXRenderer>
            </MDXProvider>
            <div css={(theme) => nextPrevLinkCSS(theme)}>
              {previousPostHtml}
              {nextPostHtml}
            </div>
          </div>
        </article>
      </div>
    </MainLayout>
  )
}

export const articlePageQuery = graphql`
  query MdxArticleByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        language
        description
        embeddedImagesRemote {
          ...modernGatImage
        }
        embeddedImagesLocal {
          ...modernGatImage
        }
        image {
          colors {
            ...GatsbyImageColors
          }
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
`
