import React, { FC } from 'react';
import { withTheme } from 'styled-components';

import { ThemeProps } from 'styled/themes';

import Bar from 'atoms/Bar';
import Flex from 'atoms/Flex';

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

const SortVisualizer: FC <Props> = ({numbers,maxNum,groupA,groupB,groupC,groupD,sortedIndices, theme}) => {
  return (
    <Flex width="100%" height="405px" align='end' padding={[theme.padding.huge, 0]} 
      style={{backgroundColor: theme.colors.gray400, borderRadius: theme.borderRadius.default}}>
      {getListOfBars(numbers,maxNum,groupA,groupB,groupC,groupD,sortedIndices)}
    </Flex>
  );
};


export default withTheme(SortVisualizer);
