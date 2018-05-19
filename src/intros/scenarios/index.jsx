import _ from 'lodash';
import React from 'react';
import classnames from 'classnames';
import Slider from 'react-animated-slider';

import 'react-animated-slider/build/horizontal.css';

import './index.scss';

class Scenarios extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedSlideIndex: 0,
    };
  }

  render() {
    const scenarios = [{
      title: 'Scenario A',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..',
    }, {
      title: 'Scenario B',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
    }, {
      title: 'Scenario C',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
    }];

    return (
      <div className="scenarios container section">
        <h1>Scenarios</h1>
        <div className="content pt-card pt-elevation-3">
          <Slider
            autoplay={5000}
            duration={1000}
            previousButton={(
              <button className="pt-button pt-icon-chevron-left" />
            )}
            nextButton={(
              <button className="pt-button pt-icon-chevron-right" />
            )}
            onSlideChange={(event) => {
              this.setState({
                selectedSlideIndex: event.slideIndex,
              });
            }}
          >
            {
              _.map(scenarios, scenario => (
                <div key={scenario.title} className="item">
                  <div className="figure">
                    <div className="image">
                      <p>{scenario.title}</p>
                    </div>
                  </div>
                  <div className="text">
                    <p>{scenario.text}</p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
        <ul className="titles">
          {
            _.map(scenarios, (scenario, index) => (
              <li key={index} className="title">
                <button
                  className={(() => {
                    const cls = ['pt-button', 'pt-minimal', 'pt-icon-dot', 'pt-disabled'];
                    if (this.state.selectedSlideIndex === index) {
                      cls.push('selected');
                    }
                    return classnames(cls);
                  })()}
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Scenarios;
