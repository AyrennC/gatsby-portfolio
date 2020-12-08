import SEO from './SEO';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children, customSEO }) => (
  <>
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
