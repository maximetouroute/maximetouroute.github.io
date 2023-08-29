import { CSSObject } from '@emotion/react';
import { breakpointKey } from '../../bits/styles/styles';

export const heroCSS: CSSObject = {

  maxWidth: '50vw',
  [breakpointKey('small')]: {
    maxWidth: '90vw'
  },
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
  textAlign: 'center',
  color: 'black',
  userSelect: 'none'
};

export const grettingCSS: CSSObject = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  fontSize: '3.25rem',
  marginBottom: '2rem',
  fontWeight: 600,
};

export const punchlineCSS: CSSObject = {
  fontSize: '1.4rem',
  lineHeight: '2rem',
  fontWeight: 400,
  fontStyle: 'italic',
  marginBottom: 0,

};

export const lastLineCSS: CSSObject = {
  marginTop: '2rem',
  fontSize: '1.4rem',
  lineHeight: '3rem',
  fontWeight: 400,
  fontStyle: 'italic',
  marginBottom: 0,

};
