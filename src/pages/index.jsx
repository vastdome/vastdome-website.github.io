import React from 'react';

import Landing from '../intros/landing';

import Features from '../intros/features';
import Details from '../intros/details';
import Scenarios from '../intros/scenarios';
import Architecture from '../intros/architecture';
import Roadmap from '../intros/roadmap';
import Comparision from '../intros/comparision';
import Downloads from '../intros/downloads';
import Contacts from '../intros/contacts';

import './index.scss';

const IndexPage = () => (
  <div>
    <Landing />
    <div id="welcome">
      <div className="index-section-1">
        <div id="features" className="offset-anchor">
          <Features />
        </div>
        <div id="details" className="offset-anchor">
          <Details />
        </div>
      </div>
      <div className="index-section-2" />
      <div className="index-section-3">
        <div className="index-section-3-content">
          <div id="scenarios" className="offset-anchor">
            <Scenarios />
          </div>
          <div id="architecture" className="offset-anchor">
            <Architecture />
          </div>
        </div>
      </div>
      <div id="roadmap" className="offset-anchor">
        <Roadmap />
      </div>
      <div id="comparision" className="offset-anchor">
        <Comparision />
      </div>
      <div id="downloads" className="offset-anchor">
        <Downloads />
      </div>
      <div id="contacts" className="offset-anchor">
        <Contacts />
      </div>
    </div>
  </div>
);

IndexPage.layout = 'none';

export default IndexPage;
