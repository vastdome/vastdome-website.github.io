import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {
  Alignment,
  Button,
  Navbar, NavbarGroup, NavbarHeading, NavbarDivider,
} from '@blueprintjs/core';

const Header = ({ siteTitle }) => (
  <div>
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Blueprint</NavbarHeading>
        <NavbarDivider />
        <Button className="pt-minimal" icon="home" text="Home" />
        <Button className="pt-minimal" icon="document" text="Files" />
      </NavbarGroup>
    </Navbar>
    <Link to="/">{siteTitle}</Link>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
