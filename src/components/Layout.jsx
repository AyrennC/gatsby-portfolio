import SEO from './SEO';
import WallTile from '../images/wall-tile.png';
import { Global, css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

const globalCSS = css`
  body {
    background-image: url(${WallTile});
  }

  @media screen and (max-height: 530px) and (orientation: landscape) {
    html {
      transform: rotate(-90deg);
      transform-origin: left top;
      width: 100vh;
      overflow-x: hidden;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
`;

const Layout = ({ children, customSEO }) => (
  <>
    <Global styles={globalCSS} />
    {!customSEO && <SEO />}
    {children}
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
};

Layout.defaultProps = {
  customSEO: false,
};
