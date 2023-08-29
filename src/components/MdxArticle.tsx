import React from 'react'
import MainLayout from './MainLayout'
import 'moment'
import { MDXProvider } from '@mdx-js/react'
import SEO from '../bits/SEO/SEO'
import { graphql, Link } from 'gatsby'
import { SHORTCODES } from './../mdx-components/shortcodes';
import {
  coverBandCSS,
  coverBandOverlayCSS,
  punchlineCSS,
  subtextCSS,
  pageCSS,
  cardCSS,
} from './basicPageStyles'
import {
  nextPrevLinkInsideCoverCSS,
  nextPrevLinkCSS,
  articleCSS,
  colorCSS,
} from './MdxArticleStyles';

export default function Template({ data: {mdx}, children, location, pageContext: {previousPost, nextPost, langCode} }) {

  // const mdx = data;
  console.log(mdx);
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

  console.log(mdx);
  return (
    <MainLayout
      language={mdx.frontmatter.language}
      location={{ ...location }}
      accentColor={mdx.frontmatter.image.colors.vibrant}
    >
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.frontmatter.subtitle}
        image={mdx.frontmatter.image.childImageSharp.gatsbyImageData.images.sources[0]}
        pathname={mdx.frontmatter.path}
        article={true}
        langCode={langCode}
      />
      <div css={(theme) => coverBandCSS(theme)} id="content">
        <div css={coverBandOverlayCSS}>
          <h1 css={punchlineCSS}>{mdx.frontmatter.title}</h1>
          <h2 css={subtextCSS}>
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

      <div css={(theme) => pageCSS(theme)}>
        <article
          css={cardCSS}
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          {/* css={theme => ({backgroundColor: theme.colors.accent})} */}
          <div css={articleCSS}>
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
              {children}
              {/* <MDXRenderer
                localImages={mdx.frontmatter.embeddedImagesLocal}
              >
                {mdx.body}
              </MDXRenderer> */}
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
  query MdxArticleByPath($markdownPath: String!, $langCode: String!) {
    mdx(frontmatter: { path: { eq: $markdownPath } language: { eq: $langCode } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        language
        description
        embeddedImagesLocal {
          ...modernGatImage
        }
        image {
          colors {
            ...GatsbyImageColors
          }
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 700)
          }
        }
      }
    }
  }
`
