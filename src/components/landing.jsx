import React from 'react';
import Particles from 'react-particles-js';
import { Button, ButtonGroup, Icon } from '@blueprintjs/core';

import './landing.scss';

class Landing extends React.Component {
  constructor() {
    super();

    this.state = { landingHeight: 1000 };
  }

  componentDidMount() {
    (() => {
      this.setState({
        landingHeight: window.innerHeight,
      });
    })();
  }

  render() {
    return (
      <div id="landing" style={{ height: this.state.landingHeight }}>
        <Particles
          className="landing-particles"
          height={this.state.landingHeight}
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: '#ffffff',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <div
          className="landing-text"
          style={{
            marginTop: -this.state.landingHeight + 20,
            paddingTop: this.state.landingHeight * 0.35,
          }}
        >
          <h1 className="title">
            <strong>The Next Generation Cloud</strong>
          </h1>
          <span className="divider" />
          <p className="intro">
            Nuclear tokenizes the hardware resources provided by various
            3rd-parties and software services from either Nuclear or
            3rd-parties, to be the 1st DECENTRALIZED CLOUD for both
            decentralized and traditional applications
          </p>
          <div className="actions">
            <ButtonGroup>
              <Button className="pt-minimal" large text="Learn more" />
            </ButtonGroup>
          </div>
          <div className="down-indicator">
            <Icon icon="chevron-down" iconSize={20} />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
