import { CSSObject } from '@emotion/react';
import { breakpointKey, basicTransitionCSS } from './bits/styles/styles';
import { themedACSS } from './bits/styles/styles';
import { Theme } from '@mui/material';

export const responsiveContainerCSS: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
};


export const revLinkCSS: CSSObject = {
  marginTop: '2rem',
  marginBottom: '2rem',
  ...themedACSS('blue'),
  fontSize: '4rem'
}
export const badgeContainerCSS: CSSObject = {
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

export const responsiveContainerInsideCSS: CSSObject = {
  [breakpointKey('normal')]: {
    minWidth: '60rem',
    maxWidth: '80rem',
  },
  [breakpointKey('small')]: {
    minWidth: '90vw',
    // padding: '0.2rem',
  },
};

export const minHeightCSS: CSSObject = {
  // height: '90vh',
  // minHeight: '90vh',
  padding: '4rem',
};

export const fullSizeCSS: CSSObject = {
  height: '100vh',
  minHeight: '100vh',
};

export const punchlineCSS = (theme: Theme): CSSObject => { 
  return {
  fontSize: '2rem',
  [breakpointKey('small')]: {
    fontSize: '3rem',
  },
  fontWeight: 900,
  textAlign: 'center',
  // color: '#34393A',
  color: theme.palette.primary.main

  // backgroundImage: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
  // backgroundImage: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
  // backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
  // backgroundImage: 'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)',
  // backgroundImage:
  //   'linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)',
  // backgroundImage: 'linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)',
  // backgroundImage: 'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)',
  // backgroundImage: 'radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)',
  // backgroundBlendMode: screen;
  // backgroundClip: 'text',
  // textFillColor: 'transparent',
};
};

export const welcomeCoverPhotoCSS: CSSObject = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
export const welcomeCoverCSS: CSSObject = {
  height: '90vh',
  minHeight: '90vh',
  lineHeight: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
export const welcomeCoverPunchlineCSS: CSSObject = {
  fontSize: '4rem',
  fontWeight: 300,
  lineHeight: 1.3,
  color: 'rgb(240,240,240)',

  [breakpointKey('small')]: {
    fontSize: '3rem',
  },
};
export const welcomeCoverDescriptionCSS: CSSObject = {
  lineHeight: '1.3',
  fontSize: '2.3em',
  maxWidth: '30em',
  margin: '0 auto',
  // marginTop: 'auto',
  marginBottom: '1em',
  padding: '0.5em',
  // background-color: $accentColor',
  color: 'rgb(220,220,220)',

  [breakpointKey('small')]: {
    fontSize: '1.3em',
    marginTop: 'auto',
    marginBottom: '3em',
    paddingLeft: '1em',
    paddingRight: '1em',
  },
};
export const welcomeCoverInsideCSS: CSSObject = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  textAlign: 'center',
  // textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)',
  // background: 'rgba(0, 0, 0, 0.2)',

  [breakpointKey('normal')]: {
    //justify-content: center',
    justifyContent: 'flex-start',
  },
  [breakpointKey('small')]: {
    justifyContent: 'flex-start',
  },
};

/*
            .CoverLogo {
              width: '20rem',
              height: '20rem',
              margin: 'auto',
              marginBottom: 0,
              opacity: 0.9,
          
              @include breakpoint(small) {
                width: 12rem,
                height: 12rem,
              }
            }
            */

export const smallyTextCSS: CSSObject = {
  fontSize: '0.9em',
  opacity: 0.7,
};

export const cardCSS: CSSObject = {
  width: '15rem',
  height: '15rem',
  margin: '2rem',
  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },
  background:
    'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
};

export const studioCardCSS: CSSObject = {
  fontSize: '0.9em',
  width: '15em',
  height: '15em',
  margin: '2em',

  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },
  // background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
  border: 'solid 4px white',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1000px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
};
export const superGradientCSS: CSSObject = {
  // backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)'
  background:
    'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
  backgroundBlendMode: 'multiply,multiply',
  // backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
};

export const contactButtonCSS: CSSObject = {
  textDecoration: 'none',
  alignSelf: 'center',
  justifySelf: 'center',
  borderRadius: '10em',
  padding: '1em 2em 1em 2em',
  border: '2px solid white',
  transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
  textTransform: 'uppercase',
  color: 'white',
  '&:hover': {
    background: 'white',
    color: 'black',
    cursor: 'pointer',
  },
  padding: '0.4em',
  margin: '0.5em',
};

export const buttonCSS: CSSObject = {
  backgroundImage:
    'linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)',
  borderRadius: '100rem',
  border: 'none',
  fontWeight: 900,
  // backgroundColor: 'black',
  color: 'black',
  padding: '1em 2em 1em 2em',
  margin: '1em',
  transition: 'all 150ms linear',
  filter: 'saturate(1)',

  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer',
    transition: 'all 150ms linear',
    filter: 'saturate(1.3)',
  },
};

export const marqueBlockCSS: CSSObject = {
  fontSize: '1.5em',

  padding: '0.5em',
  color: 'white',
  fontWeight: 600,
  paddingTop: '2em',
  paddingBottom: '2em',
};
///

export const subjectVideoCSS: CSSObject = {
  borderRadius: '16px',
  height: '50vh',
  margin: '2em',
  [breakpointKey('small')]: {
    height: '60vh',
    borderRadius: '18px',
  },
};

export const subjectTitleCSS: CSSObject = {
  padding: '2rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderRadius: '0.4rem',
  color: '#fbf9e8',
  backgroundColor: '#649de4',
  userSelect: 'none',
};

export const joinBetaCallCSS: CSSObject = {
  textAlign: 'center',
  color: '#2A6DBF',
};

export const mainVideoCSS: CSSObject = {
  borderRadius: '20px',
  height: '70vh',
};

// CLIENTS LOGOSexport const
export const clientsLogoGridCSS: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  maxWidth: '90vw',
};
export const clientLogoCSS: CSSObject = {
  [breakpointKey('small')]: {
    minWidth: '8em',
    minHeight: '8em',
    margin: '1em',
  },

  [breakpointKey('normal')]: {
    minWidth: '8em',
    minHeight: '8em',
    margin: '2em',
  },
};

export const imageBackgroundCSS = (url: string): CSSObject => {
  return {
    background: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    opacity: 0.7,
    // filter: 'grayscale(30%)',
    ...basicTransitionCSS,

    '&:hover': {
       ...basicTransitionCSS,
      cursor: 'pointer',
      filter: 'none',
      opacity: 1,
      transform: 'scale(1.05)',
    },
  };
};

// Small key points features

export const iconContainerCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  flexAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#2A6DBF',
};
export const thirdPageContainerCSS: CSSObject = {
  margin: 'auto',
  marginTop: 0,
  marginBottom: '2rem',
  [breakpointKey('normal')]: {
    minWidth: '26%',
    width: '26%',
  },

  [breakpointKey('small')]: {
    minWidth: '90%',
  },
};

export const subtextCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1em',
  color: '',
  [breakpointKey('small')]: {
    flexDirection: 'column',
  },
  justifyContent: 'center',
  animation: 'fadein 1s',

  fontWeight: 400,
  lineHeight: '1.8em',

  paddingLeft: '1rem',
  paddingRight: '1rem',
  margin: 0,

  textAlign: 'center',
};
export const subtextPCSS: CSSObject = {};

export const punchlineFeatureCSS: CSSObject = {
  fontSize: '1.5em',
  fontWeight: 400,
  backgroundColor: 'transparent',

  color: 'black',
  margin: 'auto',
  marginBottom: '0.5em',
};

/// INDEX TSX

export const mainViewCSS: CSSObject = {
  ...responsiveContainerCSS,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
};

export const mainViewInsideCSS: CSSObject = {
  ...responsiveContainerInsideCSS,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  [breakpointKey('small')]: {
    flexDirection: 'column',
  },
};

export const logoContainerCSS: CSSObject = {
  width: '7rem',
  height: `${7 * 1.5}rem`,

  marginBottom: 0,
  opacity: 0.9,
  padding: '2rem',
  [breakpointKey('small')]: {
    width: '5rem',
    height: `${5 * 1.5}rem`,
  },
};

export const logoAndVideoContainerCSS: CSSObject = {
  minWidth: '30vw',
  maxWidth: '40vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  [breakpointKey('small')]: {
    minWidth: '90vw',
  },
};

export const punchlineParagraphCSS: CSSObject = {
  paddingLeft: '5rem',
  paddingRight: '5rem',
  textAlign: 'center',
};

export const mainVideoContainerCSS: CSSObject = {
  [breakpointKey('normal')]: {
    minWidth: '40rem',
    maxWidth: '50rem',
  },
  [breakpointKey('small')]: {
    minWidth: '90vw',
    padding: '0.2rem',
    paddingTop: '3rem',
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export const howDoesItWorkCSS: CSSObject = {
  [breakpointKey('normal')]: {
    minWidth: '40rem',
    maxWidth: '50rem',
    alignItems: 'flex-start',
  },
  [breakpointKey('small')]: {
    minWidth: '90vw',
    padding: '0.2rem',
    paddingTop: '3rem',
    flexDirection: 'column',
    alignItems: 'center',
  },
  display: 'flex',
  justifyContent: 'center',
};

export const howDoesItWorkPartCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const iframeVideoContainerCSS: CSSObject = {
  ...responsiveContainerInsideCSS,
  display: 'block',
  paddingBottom: '56.25%',
  position: 'relative',
  height: '0px',
  overflow: 'hidden',
  margin: '0px',
  marginTop: '2rem',
  marginBottom: '2rem',
};

export const iframeCSS: CSSObject = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
};
