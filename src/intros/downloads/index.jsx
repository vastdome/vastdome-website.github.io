import React from 'react';

import { Button, Tooltip, Position } from '@blueprintjs/core';

import imagePapers from './papers.min.png';

import './index.scss';

const Download = () => (
  <div className="downloads">
    <div className="content container section">
      <h1 className="title">Download Documents</h1>
      <div className="space size-2" />
      <div className="right">
        <div
          className="illustrate"
          style={{
            backgroundImage: `url("${imagePapers}")`,
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
          <Button className="pt-intent-primary download-button" icon="download" text="Whitepaper" />
        </Tooltip>
        <Tooltip className="pt-dark tip" content="Coming soon..." position={Position.TOP}>
          <Button className="pt-intent-primary download-button" icon="download" text="Business Plan" />
        </Tooltip>
      </div>
    </div>
  </div>
);

export default Download;
