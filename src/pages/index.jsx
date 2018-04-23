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

import detailsLayers from './index/details-layers.svg';
import detailsWand from './index/details-wand.svg';
import detailsNetwork from './index/details-network.svg';
import detailsShapes from './index/details-shapes.svg';
import detailsLegoBlock from './index/details-lego-block.svg';
import detailsPlug from './index/details-plug.svg';
import detailsBuilding from './index/details-building.svg';
import detailsShoppingCart from './index/details-shopping-cart.svg';

import downloadPapers from './index/download-papers.min.png';

import contactGitHub from './index/contact-github-dark.png';
import contactTwitter from './index/contact-twitter-dark.png';
import contactEmail from './index/contact-email-dark.png';

const FeaturesSection = () => (
  <div className="features container section">
    <h1>Features</h1>
    <div className="space size-2" />
    <div className="feature">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${imageFeaturesSimple}")`,
        }}
      />
      <h3>Make Blockchain Simple</h3>
    </div>
    <div className="feature">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${imageFeaturesApplication}")`,
        }}
      />
      <h3>Application Oriented Design</h3>
    </div>
    <div className="feature">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${imageFeaturesGear}")`,
        }}
      />
      <h3>Embrace Existing Ecology</h3>
    </div>
    <div className="feature">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${imageFeaturesCloud}")`,
        }}
      />
      <h3>Autonomous Cloud with Token Economy</h3>
    </div>
  </div>
);

const DetailsSection = () => (
  <div className="details container section">
    <h1>Here&apos;s how Vastdome works</h1>
    <div className="space size-2" />
    <div className="detail">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${detailsLayers}")`,
        }}
      />
      <div className="text">
        <p>Standalone Blockchain for Each Application</p>
      </div>
    </div>
    <div className="detail">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${detailsWand}")`,
        }}
      />
      <div className="text">
        <p>Application Blockchain Development Kit</p>
      </div>
    </div>
    <div className="detail">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${detailsNetwork}")`,
        }}
      />
      <div className="text">
        <p>Scalable Blockchain Node</p>
      </div>
    </div>
    <div className="detail">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${detailsShapes}")`,
        }}
      />
      <div className="text">
        <p>Off-chain Services</p>
      </div>
    </div>
    <div className="detail">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${detailsLegoBlock}")`,
        }}
      />
      <div className="text">
        <p>Blockchain Services</p>
      </div>
    </div>
    <div className="detail">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${detailsPlug}")`,
        }}
      />
      <div className="text">
        <p>Compatible with Existing Public Blockchains</p>
      </div>
    </div>
    <div className="detail">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${detailsBuilding}")`,
        }}
      />
      <div className="text">
        <p>Delegate Market</p>
      </div>
    </div>
    <div className="detail">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url("${detailsShoppingCart}")`,
        }}
      />
      <div className="text">
        <p>Application Market</p>
      </div>
    </div>
  </div>
);

const DownloadSection = () => (
  <div className="downloads">
    <div className="content container section">
      <h1 className="title">Download Documents</h1>
      <div className="space size-2" />
      <div className="right">
        <div
          className="illustrate"
          style={{
            backgroundImage: `url("${downloadPapers}")`,
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
          <Button className="pt-intent-primary" icon="download" text="Whitepaper" />
        </Tooltip>
        <Tooltip className="pt-dark tip" content="Coming soon..." position={Position.TOP}>
          <Button className="pt-intent-primary" icon="download" text="Business Plan" />
        </Tooltip>
      </div>
    </div>
  </div>
);

const StartSection = () => (
  <div className="contacts container section">
    <h1>Contact Us</h1>
    <ButtonGroup className="contact-buttons">
      <Button
        className="pt-minimal pt-large contact-button"
        icon={<div className="icon" style={{ backgroundImage: `url("${contactGitHub}")` }} />}
        text="GitHub"
      />
      <Button
        className="pt-minimal pt-large contact-button"
        icon={<div className="icon" style={{ backgroundImage: `url("${contactTwitter}")` }} />}
        text="Twitter"
      />
      <Button
        className="pt-minimal pt-large contact-button"
        icon={<div className="icon" style={{ backgroundImage: `url("${contactEmail}")` }} />}
        text="Email"
      />
    </ButtonGroup>
  </div>
);

const IndexPage = () => (
  <div>
    <Landing />
    <div id="welcome">
      <div id="features" >
        <div className="space size-2" />
        <FeaturesSection />
      </div>
      <div className="divider" />
      <div id="details" >
        <div className="space size-3" />
        <DetailsSection />
      </div>
      <div id="download">
        <div className="space size-3" />
        <DownloadSection />
      </div>
      <div id="contact">
        <div className="space size-3" />
        <div className="space size-2" />
        <StartSection />
        <div className="space size-3" />
        <div className="space size-2" />
      </div>
    </div>
  </div>
);

IndexPage.layout = 'none';

export default IndexPage;
