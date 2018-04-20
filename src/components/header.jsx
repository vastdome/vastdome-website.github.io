import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/">{siteTitle}</Link>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
