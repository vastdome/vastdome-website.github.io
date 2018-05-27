import React from 'react';

import './index.scss';

import imageArchitecture from './architecture.png';

const Architecture = () => (
  <div className="architecture container section">
    <h1>Architecture</h1>
    <div className="content">
      <img className="image pt-card pt-elevation-3" alt="Architecture" src={imageArchitecture} />
    </div>
  </div>
);

export default Architecture;
