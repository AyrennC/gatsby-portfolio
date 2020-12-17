import baseTheme from '../../../gatsby-plugin-theme-ui';
import { darken, transparentize } from 'polished';
import * as R from 'ramda';

const theme = {
  ...baseTheme,
  colors: {
    primary: {
      regular: '#984444',
      light: '#a64e4c',
      medium: '#833743',
      mediumDark: '#732c42',
      dark: '#4e2949',
      extraDark: '#3e2547',
      shadow: '#271b3e',
    },
    grey: {
      black: '#14011e',
      white: '#feffff',
      offWhite: '#faf1c5',
      offWhiteDark: '#d5cda8',
    },
    palette: {
      drippings: '#da2a2c',
    },
    bubble: {
      light: '#ffffcf',
      medium: '#f6f554',
      dark: '#fd8e00',
    },
  },
};

const toTransparent = transparentize(0.4);

theme.colors.shadow = {
  regular: R.pipe(darken(0.06), toTransparent)(theme.colors.primary.medium),
  medium: R.pipe(darken(0.1), toTransparent)(theme.colors.primary.mediumDark),
  dark: R.pipe(darken(0.1), toTransparent)(theme.colors.primary.regular),
};

export default theme;
