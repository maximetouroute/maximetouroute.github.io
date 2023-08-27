import { CSSObject } from "@emotion/react";
import { Theme } from "@mui/material";
import { breakpointKey } from "../bits/styles/styles";
import { themedACSS } from "../bits/styles/styles";


export const colorCSS = (color: string): CSSObject =>{
    return {
    width: '1em',
    height: '1em',
    backgroundColor: color
};
};

export const nextPrevLinkInsideCoverCSS: CSSObject = {
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
  
  export const nextPrevLinkCSS = (theme: Theme): CSSObject => {
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



const blackLinkColor = '#4c4c4c';

export const articleCSS: CSSObject = {
    padding:'2em',
    [breakpointKey('small')]: {
        paddingLeft: '0.4em',
        paddingRight: '0.4em',
        paddingTop: '2em',
        paddingBottom: '2em',
    },
  
    h1: {
      fontSize: '2.4em',
      textAlign: 'start',
      [breakpointKey('small')]: {
        fontSize: '1.7em'
      },
      fontWeight: 400
    },
    h2: {
        textAlign: 'start',
      fontSize: '1.8em',
      [breakpointKey('small')]: {
        fontSize: '1.4em'
      },
  
      fontWeight: 400
    },
    h3: {
        textAlign: 'start',
      fontSize: '1.5em',
      [breakpointKey('small')]: {
        fontSize: '1.3em',
      },
      fontWeight: 400
    },
    h4: {
    textAlign: 'start',
      fontSize: '1.6em',
      fontWeight: 600,
      margin: 0.6,
      marginBottom: '1em'
    },
    h5: {
        textAlign: 'start',
      margin: 0
    },
    h6: {
        textAlign: 'start',
      margin: 0
    },
  
    ul: {
      color: 'rgb(50, 50, 50)',
      // list-style-type: none;
      fontSize: '1rem',
      paddingLeft: '1rem',
  
      li: {
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem',
      }
    },
    hr: {
        backgroundColor: blackLinkColor,
        borderColor: blackLinkColor,
        height: '1px',
        marginTop: '1em',
        marginBottom: '1em',
        width: '250px',
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'column'
    }
};