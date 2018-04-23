import _ from 'lodash';
import React from 'react';
import {
  Button, ButtonGroup,
  Tooltip, Position,
} from '@blueprintjs/core';

import Landing from '../components/landing';

import './index.scss';

import imageFeaturesSimple from './index/features-simple.min.jpg';
import imageFeaturesApplication from './index/features-application.min.jpg';
import imageFeaturesGear from './index/features-gear.min.jpg';
import imageFeaturesCloud from './index/features-cloud.min.jpg';

import imageDetailsLayers from './index/details-layers.svg';
import imageDetailsWand from './index/details-wand.svg';
import imageDetailsNetwork from './index/details-network.svg';
import imageDetailsShapes from './index/details-shapes.svg';
import imageDetailsLegoBlock from './index/details-lego-block.svg';
import imageDetailsPlug from './index/details-plug.svg';
import imageDetailsBuilding from './index/details-building.svg';
import imageDetailsShoppingCart from './index/details-shopping-cart.svg';

import imageDownloadPapers from './index/download-papers.min.png';

import imageContactGitHub from './index/contact-github-dark.png';
import imageContactTwitter from './index/contact-twitter-dark.png';
import imageContactEmail from './index/contact-email-dark.png';

const FeaturesSection = () => {
  const features = [{
    title: 'Make Blockchain Simple',
    image: imageFeaturesSimple,
  }, {
    title: 'Application Oriented Design',
    image: imageFeaturesApplication,
  }, {
    title: 'Embrace Existing Ecology',
    image: imageFeaturesGear,
  }, {
    title: 'Autonomous Cloud with Token Economy',
    image: imageFeaturesCloud,
  }];

  return (
    <div className="features container section">
      <h1>Features</h1>
      <div className="space size-2" />
      {
        _.map(features, feature => (
          <div key={feature.title} className="feature">
            <div
              className="illustrate"
              style={{
                backgroundImage: `url("${feature.image}")`,
              }}
            />
            <h3>{feature.title}</h3>
          </div>
        ))
      }
    </div>
  );
};

const DetailsSection = () => {
  const details = [{
    text: 'Standalone Blockchain for Each Application',
    image: imageDetailsLayers,
  }, {
    text: 'Application Blockchain Development Kit',
    image: imageDetailsWand,
  }, {
    text: 'Scalable Blockchain Node',
    image: imageDetailsNetwork,
  }, {
    text: 'Off-chain Services',
    image: imageDetailsShapes,
  }, {
    text: 'Blockchain Services',
    image: imageDetailsLegoBlock,
  }, {
    text: 'Compatible with Existing Public Blockchains',
    image: imageDetailsPlug,
  }, {
    text: 'Delegate Market',
    image: imageDetailsBuilding,
  }, {
    text: 'Application Market',
    image: imageDetailsShoppingCart,
  }];

  return (
    <div className="details container section">
      <h1>Here&apos;s how Vastdome works</h1>
      <div className="space size-2" />
      {
        _.map(details, detail => (
          <div key={detail.text} className="detail">
            <div
              className="illustrate"
              style={{
                backgroundImage: `url("${detail.image}")`,
              }}
            />
            <div className="text">
              <p>{detail.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

const DownloadSection = () => (
  <div className="downloads">
    <div className="content container section">
      <h1 className="title">Download Documents</h1>
      <div className="space size-2" />
      <div className="right">
        <div
          className="illustrate"
          style={{
            backgroundImage: `url("${imageDownloadPapers}")`,
          }}
        />
      </div>
      <div className="left">
        <p>
          Read the whitepaper and business plan for a deeper understanding about Vastdome
          from the perspective of internal principles and future blueprints.
        </p>
        <div className="space size-2" />
        <Tooltip className="pt-dark tip" content="Coming soon..." position={Position.TOP}>
          <Button className="pt-intent-primary download-button" icon="download" text="Whitepaper" />
        </Tooltip>
        <Tooltip className="pt-dark tip" content="Coming soon..." position={Position.TOP}>
          <Button className="pt-intent-primary download-button" icon="download" text="Business Plan" />
        </Tooltip>
      </div>
    </div>
  </div>
);

const StartSection = () => {
  const contacts = [{
    name: 'GitHub',
    icon: imageContactGitHub,
    onClick: () => {
      const tab = window.open('https://github.com/vastdome', '_blank');
      tab.focus();
    },
  }, {
    name: 'Twitter',
    icon: imageContactTwitter,
    onClick: () => {
      const tab = window.open('https://twitter.com/vastdome', '_blank');
      tab.focus();
    },
  }, {
    name: 'Email',
    icon: imageContactEmail,
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

const IndexPage = () => (
  <div>
    <Landing />
    <div id="welcome">
      <div id="features" >
        <FeaturesSection />
      </div>
      <div className="divider" />
      <div id="details" >
        <DetailsSection />
      </div>
      <div id="download">
        <DownloadSection />
      </div>
      <div id="contact">
        <StartSection />
      </div>
    </div>
  </div>
);

IndexPage.layout = 'none';

export default IndexPage;
