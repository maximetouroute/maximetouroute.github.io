import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../bits/styles/styles'

export const gridNavContentFooterCSS: CSSObject = {
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'grid',
  gridGap: 0,
  gridTemplateAreas: `'nav nav' 'content content' 'content content' 'footer footer' 'navBottom navBottom'`,
  justifyItems: 'stretch',
}

export const appBarCSS = {
  justifySelf: 'stretch',
  gridArea: 'nav',
  textAlign: 'right',
  [breakpointKey('normal')]: {
    display: 'none',
  },
}

export const gridNavBarCSS = {
  justifySelf: 'stretch',
  gridArea: 'nav',
  textAlign: 'right',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  // bottom nav menu
  [breakpointKey('small')]: {
    gridArea: 'navBottom',
    padding: 0,
    //position: sticky; TODO: use this and remove width when firefox mobile doesnt jump on scroll anymore (May 2020)
    position: 'fixed',
    width: '100vw',
    bottom: 0,
    zIndex: 1,
  },
}

export const gridContentCSS = {
  gridArea: 'content',
}

export const gridFooterCSS = {
  gridArea: 'footer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '4rem',
}

export const styleContentCSS = {
  backgroundColor: 'transparent',
  borderTop: 0,
  paddingBottom: '4em',
  [breakpointKey('small')]: {
    paddingLeft: 0,
    paddingRight: 0,
    border: 'none',
  },
}
