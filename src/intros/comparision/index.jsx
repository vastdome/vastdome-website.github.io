import _ from 'lodash';
import React from 'react';
import { Icon } from '@blueprintjs/core';

import './index.scss';

const Comparision = () => {
  const tableHeads = ['', 'One', 'Two', 'Three', 'Four', 'Five'];
  const tableBodies = [{
    item: 'Eiusmod tempor incididunt',
    values: [true, false, true, false, true],
  }, {
    item: 'Labore et dolore magna',
    values: [true, false, true, false, false],
  }, {
    item: 'Veniam quis nostrud',
    values: [true, false, true, true, false],
  }, {
    item: 'Reprehenderit',
    values: [true, true, true, true, false],
  }, {
    item: 'Voluptatem sequi',
    values: [true, false, true, false, true],
  }];

  return (
    <div className="comparision container section">
      <h1>Competitor Comparision</h1>
      <div className="table-card pt-card pt-elevation-3">
        <div className="table-content">
          <table>
            <thead>
              <tr>
                {
                  _.map(tableHeads, (head, i) => (
                    <th key={i}>
                      <div className="header">
                        <h3>{head}</h3>
                      </div>
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                _.map(tableBodies, (body, i) => {
                  const values = _.map(body.values, (value, j) => (
                    <td key={j}>
                      <div className="value">
                        {
                          value ? (
                            <div className="check">
                              <Icon icon="tick" />
                            </div>
                          ) : (
                            <div className="cross">
                              <Icon icon="cross" />
                            </div>
                          )
                        }
                      </div>
                    </td>
                  ));

                  return (
                    <tr key={i}>
                      <td>
                        <div className="item">
                          <p>{body.item}</p>
                        </div>
                      </td>
                      {values}
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comparision;
