import React, { FC } from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';

import { ThemeProps } from 'styled/themes';

import Bar from './primitives/Bar';
import Flex from './primitives/Flex';

const getListOfBars: Function = (
  numbers: number[],
  maxNum:number[],
  groupA:number[],
  groupB:number[],
  groupC:number[],
  groupD:number[],
  sortedIndices: number[],
  trale?:Object[]
) => {
  return numbers.map((num: number, i:number) => {
    let width = 100 / numbers.length;
    let stateA = groupA.includes(i);
    let stateB = groupB.includes(i);
    let stateC = groupC.includes(i);
    let stateD = groupD.includes(i);
    let sorted = sortedIndices.includes(i);

    return (
      <Bar key={`${i}_${num}`} 
        width={width} 
        val={num} 
        stateA={stateA} 
        stateB={stateB} 
        stateC={stateC} 
        stateD={stateD} 
        sorted={sorted} 
      />
    );
  });
};


interface Props extends ThemeProps {
  numbers: number[];
  maxNum: number;
  groupA: number[];
  groupB: number[];
  groupC: number[];
  groupD: number[];
  sortedIndices: number[];
  // trale: Object[];
}

const Sorter: FC <Props> = ({numbers,maxNum,groupA,groupB,groupC,groupD,sortedIndices, theme}) => {
  return (
    <Flex width="100%" height="405px" align='end' padding={[theme.padding.huge, 0]} 
      style={{backgroundColor: theme.colors.gray400, borderRadius: theme.borderRadius.default}}>
      {getListOfBars(numbers,maxNum,groupA,groupB,groupC,groupD,sortedIndices)}
    </Flex>
  );
};

// Sorter.propTypes = {
//   numbers: PropTypes.arrayOf(PropTypes.number),
//   maxNum: PropTypes.number,
//   groupA: PropTypes.arrayOf(PropTypes.number),
//   groupB: PropTypes.arrayOf(PropTypes.number),
//   groupC: PropTypes.arrayOf(PropTypes.number),
//   groupD: PropTypes.arrayOf(PropTypes.number),
//   sortedIndices: PropTypes.arrayOf(PropTypes.number)
// };

export default withTheme(Sorter);

interface ContainerProps {
  bg: string;
}

const Container = styled.div<ContainerProps> `
  width: 100%;
  height: 40vh;
  padding: 1rem;
  display: flex;
  background-color:${(props) => props.bg};
  flex-direction: row;
  align-items: flex-end;
  transition: 0.75s ease-in-out;
`;