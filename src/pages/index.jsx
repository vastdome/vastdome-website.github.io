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
      <div id="features" className="offset-anchor">
        <Features />
      </div>
      <div className="divider" />
      <div id="details" className="offset-anchor">
        <Details />
      </div>
      <div id="scenarios" className="offset-anchor">
        <Scenarios />
      </div>
      <div id="architecture" className="offset-anchor">
        <Architecture />
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
