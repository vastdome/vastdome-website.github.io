import _ from 'lodash';
import React from 'react';

import './index.scss';

import imageLayers from './layers.svg';
import imageWand from './wand.svg';
import imageNetwork from './network.svg';
import imageShapes from './shapes.svg';
import imageLegoBlock from './lego-block.svg';
import imagePlug from './plug.svg';
import imageBuilding from './building.svg';
import imageShoppingCart from './shopping-cart.svg';

const Details = () => {
  const details = [{
    text: 'Standalone Blockchain for Each Application',
    image: imageLayers,
  }, {
    text: 'Application Blockchain Development Kit',
    image: imageWand,
  }, {
    text: 'Scalable Blockchain Node',
    image: imageNetwork,
  }, {
    text: 'Off-chain Services',
    image: imageShapes,
  }, {
    text: 'Blockchain Services',
    image: imageLegoBlock,
  }, {
    text: 'Compatible with Existing Public Blockchains',
    image: imagePlug,
  }, {
    text: 'Delegate Market',
    image: imageBuilding,
  }, {
    text: 'Application Market',
    image: imageShoppingCart,
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
