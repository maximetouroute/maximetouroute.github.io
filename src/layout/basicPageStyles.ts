import { CSSObject } from "@emotion/react";
import { breakpointKey, themedACSS } from "../bits/styles/styles";
import { Theme } from "@mui/material";

export const coverBandCSS = (theme: Theme): CSSObject => {
    return {
    textAlign: 'center',
    transition: 'opacity 1.5s ease',
    fontWeight: 600,
    color: 'white',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: theme.palette.primary.main
};
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


export const pageCSS = (theme: Theme): CSSObject => {
    return {
    backgroundColor: 'rgb(240, 240, 240)', // backgroundcolorfortext
    display: 'flex',
    justifyContent: 'center',
    a: {
        ...themedACSS(theme.palette.primary.main),
      },
      p: {
        marginLeft: 0,
      marginRight: 0,
      marginBottom: "15px",
      marginTop: 0,
      textAlign: 'justify'
      }
};
};

export const aCSS: CSSObject = {
    ...themedACSS
};

export const gatsbyRespImageLinkCSS: CSSObject = {
    border: 'none',
    '&:hover': {
      border: 'none',
      backgroundColor: 'inherit',
      cursor: 'inherit',
    }
};


export const cardCSS : CSSObject = {

   [breakpointKey('normal')]: {
        width: '50rem',
      },
      [breakpointKey('small')]: {
        minWidth: '90vw',
      }

};

export const cardCoverCSS : CSSObject = {
    height: '30em',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
};

export const cardCoverTitleCSS: CSSObject = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',
    fontSize: '2em',
    textAlign: 'center',
};

export const cardCoverTitleSpanCSS: CSSObject = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    boxDecorationBreak: 'clone',
    padding: '0.4em',
    margin: '0.4em'
};

const color = 'white';
export const cardCoverHrCSS: CSSObject = {
    $color: color,
    backgroundColor: color,
    borderColor: color,
    height: '1px',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    width: '3em',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
};


export const metaCSS : CSSObject = {
    textAlign: 'center'
};

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
export const articleContentPCSS: CSSObject = {
    [breakpointKey('small')]: {
        padding: '0.4em'
    }
};

export const contentHeaderWrapperCSS: CSSObject = {
    border: 'solid 1px dimgray',
    borderTop: 0
}

const headerPadding = '2em';
export const siteHeaderCSS: CSSObject = {
    backgroundColor: 'rgb(230, 230, 230)',
    borderTop: 0,
    paddingTop: '2em',
    paddingBottom: headerPadding,
    marginBottom: headerPadding
};

export const pageContentCSS: CSSObject = {
    minHeight: '65vh',
    paddingBottom: '5em',
}
 
/*
.Page {

  
    .gatsby-resp-image-link {
      
    }
  
   
  
    p {
      
    }
  
    .card {
     
  
      .cover {
        
  
        .title {
          
  
          span {
           
          }
        }
  
        hr {
         
        }
      }
    }
  
    .article {
      
    }
  
    .meta {
     
    }
  
    .header {
     
    }
  
    .content {
     
  
      p {
        
      }
    }
    .content-header-wrapper {
 
    }
  
    $header-padding: 2em;
    .site-header {

    }
  
    .page-content {

    }
  
    hr {

    }
  
    ul {
      // padding: 0;
    }
  

  }
  */