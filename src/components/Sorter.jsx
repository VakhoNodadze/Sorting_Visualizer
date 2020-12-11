import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'styled-components';

import Bar from './primitives/Bar';
import Flex from './primitives/Flex';

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
    let stateA = groupA.includes(i);
    let stateB = groupB.includes(i);
    let stateC = groupC.includes(i);
    let stateD = groupD.includes(i);
    let sorted = sortedIndices.includes(i);

    return (
      <Bar key={`${i}_${num}`} 
        width={width} 
        val={width > 4 ? num : null} 
        stateA={stateA} 
        stateB={stateB} 
        stateC={stateC} 
        stateD={stateD} 
        sorted={sorted} 
      />
    );
  });
};

const Sorter = ({numbers,maxNum,groupA,groupB,groupC,groupD,sortedIndices,trale, theme}) => {
  return (
    <Flex full align="flex-end" padding={theme.padding.huge, 0} style={{backgroundColor: theme.color.primaryBG}}>
      {getListOfBars(numbers,maxNum,groupA,groupB,groupC,groupD,sortedIndices)}
    </Flex>
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

export default withTheme(Sorter);


const Container = styled.div `
  width: 100%;
  height: 40vh;
  padding: 1rem;
  display: flex;
  background-color:${props => props.bg};
  flex-direction: row;
  align-items: flex-end;
  transition: 0.75s ease-in-out;
`;