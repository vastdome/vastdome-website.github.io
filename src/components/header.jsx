import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import classnames from 'classnames';
import {
  Alignment,
  Button,
  Navbar, NavbarGroup, NavbarHeading,
} from '@blueprintjs/core';

import './header.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPath: '',
      currentFullPath: '',
    };
  }

  componentDidMount() {
    (() => {
      this.setState({
        currentPath: window.location.pathname,
        currentFullPath: window.location.pathname + window.location.hash,
      });
    })();
  }

  render() {
    return (
      <Navbar
        id="navbar"
        className={(() => {
          const cls = ['pt-dark'];
          if (this.state.currentPath === '/') {
            cls.push('transparent');
          }
          return classnames(cls);
        })()}
      >
        <div id="navbar-items" className="container">
          <NavbarGroup id="navbar-brand" align={Alignment.LEFT}>
            <NavbarHeading>
              <Link to="/">{this.props.siteTitle}</Link>
            </NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Link to="/#features">
              <Button
                className="pt-minimal pt-ui-text"
                icon="properties"
                text="Features"
                active={this.state.currentFullPath.startsWith('/#features')}
              />
            </Link>
            <Button className="pt-minimal pt-ui-text" icon="document" text="Docs" />
            <Button className="pt-minimal pt-ui-text" icon="download" text="Download" />
            <Link to="/about/">
              <Button
                className="pt-minimal pt-ui-text"
                icon="info-sign"
                text="About"
                active={this.state.currentFullPath.startsWith('/about/')}
              />
            </Link>
          </NavbarGroup>
        </div>
      </Navbar>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
