import React from 'react';
import styled from 'styled-components';

const Bar = ({
  width,
  height,
  val,
  stateA,
  stateB,
  stateC,
  stateD,
  sorted,
  style
}) => {
  // let classNames = 'Bar';
  // if (sorted) classNames += ' Bar_sorted';
  // if (stateD) classNames += ' Bar_stateD';
  // else if (stateC) classNames += ' Bar_stateC';
  // else if (stateB) classNames += ' Bar_stateB';
  // else if (stateA) classNames += ' Bar_stateA';

  // let BarStyle = {...style, width: `${width}%`, height: `${height}%` };
  // if (stateA || stateB || stateC || stateD) {
  //   BarStyle['marginRight'] = `${0.3 * width}%`;
  //   BarStyle['marginLeft'] = `${0.3 * width}% `;
  // }

  return (
    // <div style={BarStyle} className={classNames}>
    <BarContainer state={sorted} width={width} height={val}>
      <Text>{val}</Text>
    </BarContainer>
    // </div>
  );
};

export default Bar;

const BarContainer = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height * 5}px;
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
`;
// .Bar {
//   background-color: var(--white);
//   color: var(--text-color-dark);
//   display: flex;
//   flex-direction: column reverse;
//   align-items: flex-end;
//   transition: 125ms ease-in-out;
// }

// .Bar__Text {
//   margin: 0 auto 0.25rem;
// }

// .Bar_sorted {
//   background-color: var(--primary);
// }

// .Bar_stateD {
//   background-color: var(--blue);
// }

// .Bar_stateC {
//   background-color: var(--red);
// }

// .Bar_stateB {
//   background-color: var(--secondary);
// }

// .Bar_stateA {
//   background-color: var(--amber);
// }
