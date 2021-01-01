import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  width: number;
  val: number;
  stateA: boolean;
  stateB: boolean;
  stateC: boolean;
  stateD: boolean;
  sorted: boolean;
}

const Bar: FC <Props> = ({ width,val,stateA,stateB,stateC,stateD,sorted }) => {

  const groupManager = () : string => {
    if (stateA) { return 'stateA'; }
    if (stateB) { return 'stateB'; }
    if (stateC) { return 'stateC'; }
    if (stateD) { return 'stateD'; }
    if (sorted) { return 'sorted'; }
    return '';
  };

  return (
    <BarContainer state={groupManager()} width={width} height={val} margin={width}>
      <Text>{width > 4 ? val : null}</Text>
    </BarContainer>
  );
};

export default Bar;

interface ContainerProps {
  width: number;
  height: number;
  state: string;
  margin: number;
}

const BarContainer = styled.div<ContainerProps>`
  display: flex;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height * 4}px;
  align-items: flex-end;
  transition: 125ms ease-in-out;
  color: rgb(58, 58, 60);
  margin: ${
  ({state, margin}) => (state === 'stateA' || state === 'stateB' || state === 'stateC' || state === 'stateD' ? 
    `0.1rem ${margin * 0.3}%` : '0.1rem 0')
};
  margin-right: 0.5rem;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) => {
    switch (props.state) {
    case 'stateA':
      return '#336699';
    case 'stateB':
      return '#FFFF00';
    case 'stateC':
      return '#990033';
    case 'stateD':
      return 'red';
    case 'sorted':
      return '#669966';
    default:
      return '#fff';
    }
  }};
  &:first-of-type{
    margin-left: 0.5rem;
  }
`;

const Text = styled.span `
  margin: auto 0.25rem;
  color: #000;
`;