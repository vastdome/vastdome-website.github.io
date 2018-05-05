import _ from 'lodash';
import React from 'react';

import imageSimple from './simple.min.jpg';
import imageApplication from './application.min.jpg';
import imageGear from './gear.min.jpg';
import imageCloud from './cloud.min.jpg';

import './index.scss';

const Features = () => {
  const features = [{
    title: 'Make Blockchain Simple',
    image: imageSimple,
  }, {
    title: 'Application Oriented Design',
    image: imageApplication,
  }, {
    title: 'Embrace Existing Ecology',
    image: imageGear,
  }, {
    title: 'Autonomous Cloud with Token Economy',
    image: imageCloud,
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

export default Features;
