import _ from 'lodash';
import React from 'react';

import './index.scss';

import imageDetailsLayers from './layers.svg';
import imageDetailsWand from './wand.svg';
import imageDetailsNetwork from './network.svg';
import imageDetailsShapes from './shapes.svg';
import imageDetailsLegoBlock from './lego-block.svg';
import imageDetailsPlug from './plug.svg';
import imageDetailsBuilding from './building.svg';
import imageDetailsShoppingCart from './shopping-cart.svg';

const Details = () => {
  const details = [{
    text: 'Standalone Blockchain for Each Application',
    image: imageDetailsLayers,
  }, {
    text: 'Application Blockchain Development Kit',
    image: imageDetailsWand,
  }, {
    text: 'Scalable Blockchain Node',
    image: imageDetailsNetwork,
  }, {
    text: 'Off-chain Services',
    image: imageDetailsShapes,
  }, {
    text: 'Blockchain Services',
    image: imageDetailsLegoBlock,
  }, {
    text: 'Compatible with Existing Public Blockchains',
    image: imageDetailsPlug,
  }, {
    text: 'Delegate Market',
    image: imageDetailsBuilding,
  }, {
    text: 'Application Market',
    image: imageDetailsShoppingCart,
  }];

  return (
    <div className="details container section">
      <h1>Here&apos;s how Vastdome works</h1>
      <div className="space size-2" />
      {
        _.map(details, detail => (
          <div key={detail.text} className="detail">
            <div
              className="illustrate"
              style={{
                backgroundImage: `url("${detail.image}")`,
              }}
            />
            <div className="text">
              <p>{detail.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Details;
