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
    image: imageLayers,
    title: 'Standalone Blockchain for Each Application',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..',
  }, {
    image: imageWand,
    title: 'Application Blockchain DevKit',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
  }, {
    image: imageNetwork,
    title: 'Scalable Blockchain Node',
    text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
  }, {
    image: imageShapes,
    title: 'Off-chain Services',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
  }, {
    image: imageLegoBlock,
    title: 'Blockchain Services',
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.',
  }, {
    image: imagePlug,
    title: 'Compatible with Existing Public Blockchains',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }, {
    image: imageBuilding,
    title: 'Delegate Market',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.',
  }, {
    image: imageShoppingCart,
    title: 'Application Market',
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.',
  }];

  return (
    <div className="details container section">
      <h1>Here&apos;s how Vastdome works</h1>
      <div className="space size-2" />
      <ul>
        {
          _.map(details, detail => (
            <li key={detail.title} className="detail">
              <div
                className="illustrate"
                style={{
                  backgroundImage: `url("${detail.image}")`,
                }}
              />
              <p className="title">{detail.title}</p>
              <p className="text">{detail.text}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Details;
