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
    backgroundColor: '#fff9db',
    color: '#7d7968',
  }, {
    title: 'Application Oriented Design',
    image: imageApplication,
    backgroundColor: '#8ccffa',
    color: '#48677d',
  }, {
    title: 'Embrace Existing Ecology',
    image: imageGear,
    backgroundColor: '#ecd5d4',
    color: '#7d7070',
  }, {
    title: 'Autonomous Cloud with Token Economy',
    image: imageCloud,
    backgroundColor: '#deffb9',
    color: '#677d52',
  }];

  return (
    <div className="features container section">
      <h1>Awesome Features</h1>
      <div className="space size-2" />
      {
        _.map(features, feature => (
          <div key={feature.title} className="feature">
            <div className="card">
              <div style={{ background: feature.backgroundColor }}>
                <div
                  className="illustrate"
                  style={{
                    backgroundImage: `url("${feature.image}")`,
                  }}
                />
              </div>
              <h3 style={{ color: feature.color }}>{feature.title}</h3>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Features;
