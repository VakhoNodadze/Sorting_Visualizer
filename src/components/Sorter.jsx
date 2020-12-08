import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Bar from './primitives/Bar';

const getListOfBars = (
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices,
  trale
) => {
  return numbers.map((num, i) => {
    let width = 100 / numbers.length;
    let height = 10 * 100;
    // let stateA = groupA.includes(i);
    // let stateB = groupB.includes(i);
    // let stateC = groupC.includes(i);
    // let stateD = groupD.includes(i);
    // let sorted = sortedIndices.includes(i);

    let margin =
      i === numbers.length ? '0' : width > 3 ? '0.5rem' : '0.125rem';
    return (
      <Bar
        key={`${i}_${num}`}
        width={width}
        height={height}
        val={width > 4 ? num : null}
        // stateA={stateA}
        // stateB={stateB}
        // stateC={stateC}
        // stateD={stateD}
        // sorted={sorted}
        style={{ marginRight: `${margin}` }}
      />
    );
  });
};

const Sorter = ({
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices,
  trale
}) => {
  return (
    <div className="SortChart">
      {getListOfBars(
        numbers,
        maxNum,
        groupA,
        groupB,
        groupC,
        groupD,
        sortedIndices
      )}
    </div>
  );
};

Sorter.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  maxNum: PropTypes.number,
  groupA: PropTypes.arrayOf(PropTypes.number),
  groupB: PropTypes.arrayOf(PropTypes.number),
  groupC: PropTypes.arrayOf(PropTypes.number),
  groupD: PropTypes.arrayOf(PropTypes.number),
  sortedIndices: PropTypes.arrayOf(PropTypes.number)
};

export default Sorter;
