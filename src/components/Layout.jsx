import SEO from './SEO';
import WoodenTile from '../images/wooden-tile.jpg';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children, customSEO }) => (
  <>
    <Global
      styles={{
        body: {
          backgroundImage: `url(${WoodenTile})`,
        },
      }}
    />
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
