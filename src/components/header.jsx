import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Scrollchor from 'react-scrollchor';
import classnames from 'classnames';
import {
  Alignment,
  Button, ButtonGroup,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Icon,
} from '@blueprintjs/core';
import { stack as Menu } from 'react-burger-menu';

import './header.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPath: '',
      currentFullPath: '',
      isHome: true,
      isOnTop: true,
      isBurgerMenuOpen: false,
    };

    this.scrollTimer = null;

    this.handleWindowScroll = this.handleWindowScroll.bind(this);
    this.handleBurgerMenuStateChange = this.handleBurgerMenuStateChange.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
  }

  componentDidMount() {
    this.updateCurrentPath();
    this.checkIsHome();
    this.checkIsOnTop();

    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentDidUpdate() {
    this.updateCurrentPath();
    this.checkIsHome();
    this.checkIsOnTop();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll() {
    if (this.scrollTimer === null) {
      this.checkIsOnTop();
    } else {
      setTimeout(() => { this.scrollTimer = null; }, 100);
    }
  }

  handleBurgerMenuStateChange(state) {
    this.setState({ isBurgerMenuOpen: state.isOpen });
  }

  closeBurgerMenu() {
    this.setState({ isBurgerMenuOpen: false });
  }

  updateCurrentPath() {
    if (
      this.state.currentPath !== window.location.pathname ||
      this.state.currentFullPath !== window.location.pathname + window.location.hash
    ) {
      this.setState({
        currentPath: window.location.pathname,
        currentFullPath: window.location.pathname + window.location.hash,
      });
    }
  }

  checkIsHome() {
    this.updateCurrentPath();

    const isHome = this.state.currentPath === '/';
    if (this.state.isHome !== isHome) {
      this.setState({ isHome });
    }
  }

  checkIsOnTop() {
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

    let offset = 0;
    if (supportPageOffset) {
      offset = window.pageYOffset;
    } else {
      offset = isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    const isOnTop = offset <= 0;
    if (this.state.isOnTop !== isOnTop) {
      this.setState({ isOnTop });
    }

    // Additional steps for burger menu.
    const burgerButtons = document.getElementsByClassName('bm-burger-button');
    _.map(burgerButtons, (button) => {
      if (isOnTop) {
        button.classList.remove('smaller');
      } else {
        button.classList.add('smaller');
      }
    });
  }

  render() {
    const links = (
      <ButtonGroup className="pt-dark">
        <Scrollchor to="#features">
          <Button
            className="pt-minimal pt-ui-text"
            icon="properties"
            text="Features"
            active={this.state.currentFullPath.startsWith('/#features')}
            onClick={this.closeBurgerMenu}
          />
        </Scrollchor>
        <Scrollchor to="#details">
          <Button
            className="pt-minimal pt-ui-text"
            icon="info-sign"
            text="About"
            active={this.state.currentFullPath.startsWith('/#detail')}
            onClick={this.closeBurgerMenu}
          />
        </Scrollchor>
        <Scrollchor to="#download">
          <Button
            className="pt-minimal pt-ui-text"
            icon="download"
            text="Download"
            active={this.state.currentFullPath.startsWith('/#download')}
            onClick={this.closeBurgerMenu}
          />
        </Scrollchor>
        <Scrollchor to="#contact">
          <Button
            className="pt-minimal pt-ui-text"
            icon="chat"
            text="Contact"
            active={this.state.currentFullPath.startsWith('/#contact')}
            onClick={this.closeBurgerMenu}
          />
        </Scrollchor>
      </ButtonGroup>
    );

    return (
      <div id="navbar-floor">
        <Navbar
          id="navbar"
          className={(() => {
            const cls = ['pt-dark'];
            if (this.state.isOnTop) {
              if (this.state.isHome) {
                cls.push('transparent');
              }
            } else {
              cls.push('smaller');
            }
            return classnames(cls);
          })()}
        >
          <div className="container">
            <NavbarGroup id="navbar-brand" align={Alignment.LEFT}>
              <NavbarHeading>
                <Link to="/">{this.props.siteTitle}</Link>
              </NavbarHeading>
            </NavbarGroup>
            <NavbarGroup id="navbar-items" align={Alignment.RIGHT}>
              <ButtonGroup className="pt-dark">
                {links}
              </ButtonGroup>
            </NavbarGroup>
          </div>
        </Navbar>
        <div id="navbar-burger">
          <Menu
            isOpen={this.state.isBurgerMenuOpen}
            onStateChange={this.handleBurgerMenuStateChange}
            right
            width="240px"
            customBurgerIcon={
              <Icon
                className={(() => {
                  const cls = [];
                  if (!this.state.isOnTop) {
                    cls.push('smaller');
                  }
                  return classnames(cls);
                })()}
                icon="menu"
                iconSize={30}
              />
            }
          >
            <ButtonGroup className="pt-dark">{links}</ButtonGroup>
          </Menu>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
