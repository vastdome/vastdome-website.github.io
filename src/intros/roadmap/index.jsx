import _ from 'lodash';
import React from 'react';

import './index.scss';

const Roadmap = () => {
  const steps = [{
    title: 'Lorem ipsum',
    sections: [
      'Eiusmod tempor incididunt',
      'Labore et dolore magna',
      'Veniam quis nostrud',
      'Reprehenderit ',
      'Voluptatem sequi',
    ],
    time: 'XXXX-XX-XX',
  }, {
    title: 'Dolor sit amet',
    sections: [
      'Veniam quis nostrud',
      'Reprehenderit ',
      'Voluptatem sequi',
    ],
    time: 'XXXX-XX-XX',
  }, {
    title: 'Consectetur',
    sections: [
      'Veniam quis nostrud',
      'Reprehenderit ',
      'Voluptatem sequi',
      'Labore et dolore magna',
      'Veniam quis nostrud',
      'Labore et dolore magna',
      'Veniam quis nostrud',
    ],
    time: 'XXXX-XX-XX',
  }, {
    title: 'Adipiscing elit',
    sections: [
      'Veniam quis nostrud',
      'Labore et dolore magna',
      'Veniam quis nostrud',
    ],
    time: 'XXXX-XX-XX',
  }, {
    title: 'Sed do',
    sections: [
      'Neque porro quisquam',
      'Veniam quis nostrud',
      'Labore et dolore magna',
      'Veniam quis nostrud',
    ],
    time: 'XXXX-XX-XX',
  }];

  return (
    <div className="roadmap container section">
      <h1>Roadmap</h1>
      <div className="steps-table pt-card pt-elevation-2">
        {
          _.map(steps, (step, i) => {
            const items = _.map(step.sections, (section, j) => (
              <li key={j} className="group-header">
                <p>{section}</p>
              </li>
            ));

            return (
              <div key={i} className="column">
                <h3 className="header">
                  <p>{step.title}</p>
                </h3>
                <h3 className="time-header">
                  <p>{step.time}</p>
                </h3>
                <ul className="content">{items}</ul>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Roadmap;
