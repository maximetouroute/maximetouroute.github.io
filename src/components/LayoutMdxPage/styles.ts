import { CSSObject } from '@emotion/react';
import { breakpointKey, themedACSS } from '../../bits/styles/styles';
import { Theme } from '@mui/material';


export const headerCSS: CSSObject = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2em',
    textAlign: 'center',
    paddingTop: '1em',
  };
  
  export const contentCSS: CSSObject = {
    textAlign: 'justify',
  };


export const pageCSS = (theme: Theme): CSSObject => {
    return {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      a: {
        ...themedACSS(theme.palette.primary.main),
      },
      p: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '15px',
        marginTop: 0,
        textAlign: 'justify',
      },
    };
  };

  export const cardCSS: CSSObject = {
    [breakpointKey('normal')]: {
      width: '50rem',
    },
    [breakpointKey('small')]: {
      minWidth: '90vw',
    },
  };
  