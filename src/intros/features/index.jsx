import _ from 'lodash';
import React from 'react';

import imageFeaturesSimple from './simple.min.jpg';
import imageFeaturesApplication from './application.min.jpg';
import imageFeaturesGear from './gear.min.jpg';
import imageFeaturesCloud from './cloud.min.jpg';

import './index.scss';

const Features = () => {
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

export default Features;
