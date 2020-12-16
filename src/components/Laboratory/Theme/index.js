import baseTheme from '../../../gatsby-plugin-theme-ui';
import { darken } from 'polished';

const theme = {
  ...baseTheme,
  colors: {
    primary: {
      regular: '#500d78',
      light: '#8f65a9',
      medium: '#6f3990',
      mediumDark: '#5f2384',
      dark: '#3a0956',
      extraDark: '#310849',
      shadow: '#1c0526',
    },
    grey: {
      black: '#14011e',
      white: '#feffff',
      offWhite: '#faf1c5',
      offWhiteDark: '#d5cda8',
    },
  },
};

theme.colors.shadow = {
  regular: darken(0.01, theme.colors.primary.medium),
  medium: darken(0.05, theme.colors.primary.mediumDark),
  dark: darken(0.05, theme.colors.primary.regular),
};

export default theme;
