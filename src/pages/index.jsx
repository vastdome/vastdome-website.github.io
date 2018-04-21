import React from 'react';
import { Button, ButtonGroup } from '@blueprintjs/core';

import Landing from '../components/landing';

import './index.scss';

const FeaturesSection = () => (
  <div className="features container section">
    <div className="space size-2" />
    <h1>Features</h1>
    <div className="space size-2" />
    <div className="feature">
      <div className="illustrate" />
      <h3>BlockChain Templates</h3>
      <p>Create a New BlockChain as soon as possible.</p>
    </div>
    <div className="feature">
      <div className="illustrate" />
      <h3>DApp and TApp Market Place</h3>
      <p>Find DApp and TApp</p>
    </div>
    <div className="feature">
      <div className="illustrate" />
      <h3>Delegate Market</h3>
      <p>Find Delegate to run your BlockChain.</p>
    </div>
    <div className="feature">
      <div className="illustrate" />
      <h3>NCOS</h3>
      <p>Nuclear Cluster Operation System.</p>
    </div>
    <div className="space size-2" />
  </div>
);

const WorksSection = () => (
  <div className="works container section">
    <div className="space size-3" />
    <h1>Here&apos;s how Vastdome works</h1>
    <div className="space size-2" />
    <div className="work">
      <div className="illustrate" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old.
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected humour.
      </p>
    </div>
    <div className="work">
      <div className="illustrate" />
      <p>
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words.
      </p>
    </div>
  </div>
);

const DownloadSection = () => (
  <div className="downloads">
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
  <div className="starts container section">
    <h1>Ready to build on Vastdome?</h1>
    <ButtonGroup className="start-buttons">
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
