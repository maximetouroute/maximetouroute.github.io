import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import LayoutRoot from '../LayoutRoot/LayoutRoot';
import 'moment';
import SEO from '../../bits/SEO/SEO';
import { SHORTCODES } from '../../mdx-components/shortcodes';
import { contentCSS, headerCSS, pageCSS, cardCSS  } from './styles';
import { articleCSS } from '../LayoutMdxArticle/styles';


export default function Template({ data: { mdx }, children, location, pageContext: {langCode} }) {
  // console.log('mdx', data, langCode);
  return (
    <LayoutRoot language={mdx.frontmatter.language} location={{ ...location }}>
      <SEO
        title={mdx.frontmatter.title}
        description={
          mdx.frontmatter.description || mdx.frontmatter.subtitle || null
        }
        pathname={mdx.frontmatter.path}
        article={true}
        langCode={langCode}
      />
      <div css={(theme) => pageCSS(theme)}>
        <article css={{ ...cardCSS, ...contentCSS }} id="content">
          <header css={headerCSS}></header>
          <div css={articleCSS} itemProp="articleBody">
            <MDXProvider components={SHORTCODES}>
              {children}
            </MDXProvider>
          </div>
        </article>
      </div>
    </LayoutRoot>
  )
}

export const pageQuery = graphql`
  query MdxPageByPath($markdownPath: String, $langCode: String!) {
    mdx(frontmatter: { path: { eq: $markdownPath } language: { eq: $langCode } }) {
      frontmatter {
        path
        title
        language
        description
        embeddedImagesLocal {
          ...modernGatImage
        }
      }
    }
  }
`