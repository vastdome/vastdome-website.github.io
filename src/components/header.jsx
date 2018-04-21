import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {
  Alignment,
  Button,
  Navbar, NavbarGroup, NavbarHeading,
} from '@blueprintjs/core';

import './header.scss';

const Header = ({ siteTitle }) => (
  <Navbar id="navbar" className="pt-dark">
    <div id="navbar-items" className="container">
      <NavbarGroup id="navbar-brand" align={Alignment.LEFT}>
        <NavbarHeading>
          <Link to="/">{siteTitle}</Link>
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button className="pt-minimal pt-ui-text" icon="properties" text="Features" />
        <Button className="pt-minimal pt-ui-text" icon="document" text="Docs" />
        <Button className="pt-minimal pt-ui-text" icon="download" text="Download" />
        <Button className="pt-minimal pt-ui-text" icon="info-sign" text="About" />
      </NavbarGroup>
    </div>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
