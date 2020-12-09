import React from 'react';
import styled from 'styled-components';

const Bar = ({ width,val,stateA,stateB,stateC,stateD,sorted }) => {

  const groupManager = () => {
    if (stateA) { return 'stateA'; }
    if (stateB) { return 'stateB'; }
    if (stateC) { return 'stateC'; }
    if (stateD) { return 'stateD'; }
    if (sorted) { return 'sorted'; }
  };

  return (
    <BarContainer state={groupManager()} width={width} height={val}>
      <Text>{val}</Text>
    </BarContainer>
  );
};

export default Bar;

const BarContainer = styled.div`
  display: flex;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height * 5}px;
  flex-direction: column reverse;
  align-items: flex-end;
  transition: 125ms ease-in-out;
  color: rgb(58, 58, 60);
  margin: 20px;
  background-color: ${(props) => {
    switch (props.state) {
    case 'stateA':
      return 'blue';
    case 'stateB':
      return 'yellow';
    case 'stateC':
      return 'red';
    case 'sorted':
      return 'green';
    default:
      return 'black';
    }
  }};
`;

const Text = styled.span `
  margin: - auto 0.25rem;
  color: #fff;
`;