import React from 'react';
import { Button, ButtonGroup } from '@blueprintjs/core';

import Landing from '../components/landing';

import './index.scss';

import imageFeaturesSimple from './index/features-simple.min.jpg';
import imageFeaturesApplication from './index/features-application.min.jpg';
import imageFeaturesGear from './index/features-gear.min.jpg';
import imageFeaturesCloud from './index/features-cloud.min.jpg';

const FeaturesSection = () => (
  <div id="features" className="features container section">
    <div className="space size-2" />
    <h1>Features</h1>
    <div className="space size-2" />
    <div className="feature">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url('${imageFeaturesSimple}')`,
        }}
      />
      <h3>Make Blockchain Simple</h3>
    </div>
    <div className="feature">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url('${imageFeaturesApplication}')`,
        }}
      />
      <h3>Application Oriented Design</h3>
    </div>
    <div className="feature">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url('${imageFeaturesGear}')`,
        }}
      />
      <h3>Embrace Existing Ecology</h3>
    </div>
    <div className="feature">
      <div
        className="illustrate"
        style={{
          backgroundImage: `url('${imageFeaturesCloud}')`,
        }}
      />
      <h3>Autonomous Cloud with Token Economy</h3>
    </div>
    <div className="space size-2" />
  </div>
);

const WorksSection = () => (
  <div id="about" className="works container section">
    <div className="space size-3" />
    <h1>Here&apos;s how Vastdome works</h1>
    <div className="space size-2" />
    <div className="work">
      <div className="illustrate" />
      <p>
        Standalone Blockchain for Each Application
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        Application Blockchain Development Kit
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        Scalable Blockchain Node
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        Off-chain Services
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        Blockchain Services
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        Compatible with Existing Public Blockchains
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        Delegate Market
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        Application Market
      </p>
    </div>
  </div>
);

const DownloadSection = () => (
  <div id="download" className="downloads">
    <div className="content container section">
      <div className="left">
        <h1>Get the Vastdome Wallet</h1>
        <div className="space size-2" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Aldus PageMaker including versions of Lorem Ipsum.
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="space size-2" />
        <Button icon="download" text="Download Latest Version" />
      </div>
      <div className="right">
        <div className="illustrate" />
      </div>
    </div>
  </div>
);

const StartSection = () => (
  <div id="contact" className="contacts container section">
    <h1>Ready to build on Vastdome?</h1>
    <ButtonGroup className="contact-buttons">
      <Button className="pt-minimal pt-large" icon="tick" text="Getting Started" />
      <Button className="pt-minimal pt-large" icon="layout-grid" text="Learn more" />
    </ButtonGroup>
  </div>
);

const IndexPage = () => (
  <div>
    <Landing />
    <div id="welcome">
      <div className="space size-2" />
      <FeaturesSection />
      <div className="divider" />
      <WorksSection />
      <div className="space size-3" />
      <DownloadSection />
      <div className="space size-3" />
      <StartSection />
      <div className="space size-2" />
    </div>
  </div>
);

IndexPage.layout = 'none';

export default IndexPage;
