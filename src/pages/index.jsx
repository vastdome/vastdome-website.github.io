import React from 'react';

import Landing from '../components/landing';

import Features from '../intros/features';
import Details from '../intros/details';
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
