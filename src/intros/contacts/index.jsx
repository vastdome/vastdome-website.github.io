import _ from 'lodash';
import React from 'react';

import { Button, ButtonGroup } from '@blueprintjs/core';

import imageGitHub from './github-dark.png';
import imageTwitter from './twitter-dark.png';
import imageEmail from './email-dark.png';

import './index.scss';

const Contacts = () => {
  const contacts = [{
    name: 'GitHub',
    icon: imageGitHub,
    onClick: () => {
      const tab = window.open('https://github.com/vastdome', '_blank');
      tab.focus();
    },
  }, {
    name: 'Twitter',
    icon: imageTwitter,
    onClick: () => {
      const tab = window.open('https://twitter.com/vastdome', '_blank');
      tab.focus();
    },
  }, {
    name: 'Email',
    icon: imageEmail,
    onClick: () => {
      window.location.href = 'mailto:contact@vastdome.io';
    },
  }];

  return (
    <div className="contacts container section">
      <h1>Contact Us</h1>
      <ButtonGroup className="contact-buttons">
        {
          _.map(contacts, contact => (
            <Button
              key={contact.name}
              className="pt-minimal pt-large contact-button"
              icon={<div className="icon" style={{ backgroundImage: `url("${contact.icon}")` }} />}
              text={contact.name}
              onClick={contact.onClick}
            />
          ))
        }
      </ButtonGroup>
    </div>
  );
};

export default Contacts;
