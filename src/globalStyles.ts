import { CSSObject } from '@emotion/react';
import { Theme } from '@mui/material';

export const bodyCSS = (theme: Theme): CSSObject => {
  return {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',

  margin: 0,
  outline: 0,
  padding: 0,
  backgroundColor: theme.palette.background.default,
  background: `linear-gradient(25deg, #e5f9ff 0%, #fcf9e8 100%)`,
  // fontFamily: `-apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
  //   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
  //   sans-serif`,

    fontFamily: `'Roboto', sans-serif`
  };
};
