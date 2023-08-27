import { CSSObject } from "@emotion/react";
import { breakpointKey } from "../bits/styles/styles";


export const coverBandCSS: CSSObject = {
    textAlign: 'center',
    transition: 'opacity 1.5s ease',
    fontWeight: 600,
    color: 'white',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
};


export const coverBandOverlayCSS = {
          // background-color: $accentColor;
          color: 'white',
          [breakpointKey('small')]: {
            padding: '2rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          [breakpointKey('normal')]:
          {
            padding: '2rem',
          }

};

export const coverBandOverlaySmallerCSS = {
    [breakpointKey('normal')]: {
        padding: '4rem'
    },
    [breakpointKey('small')]: {
        padding: '1rem'
    }
};

export const subtextCSS: CSSObject = {
    display: 'flex',
    flexDirection: 'row',
    [breakpointKey('small')]: {
        flexDirection: 'column',
        fontSize: '1.4rem',
    },
    justifyContent: 'center',
    animation: 'fadein 1s',
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: '1.8em',
    textAlign: 'center'
};

export const punchlineCSS: CSSObject = {
    animation: 'fadein 1s',
    fontSize: '2rem',
    paddingBottom: '1rem',
    textAlign: 'center',
    [breakpointKey('small')]:
    {
        fontSize: '1.5em'
    }
};

export const pCSS: CSSObject = {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    margin: 0
};

