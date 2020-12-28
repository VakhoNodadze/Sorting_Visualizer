import React, { FC } from 'react';
import { styled } from 'styled/themes';

interface Props {
    width: number;
}

const ProgressBar : FC <Props> = ({width}) => {
  return (
    <StyledContainer>
      <StyledProgress width={width} />
    </StyledContainer>
  );
};

export default ProgressBar;


const StyledContainer = styled.div `
  margin: 0.5rem ;
  width: 100%;
  height: 0.375rem;
  border-radius: 4px;
  overflow: hidden;
`;

interface ProgressProps {
    width: number;
}
const StyledProgress = styled.div<ProgressProps> `
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  width: ${(props) => props.width}%;
  background-color: green;
  animation-name: primary-translate;
  animation-duration: 500ms;

  @keyframes primary-translate {
    0% {
      transform: translateX(0);
    }
  
    20% {
      animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      transform: translateX(0);
    }
  
    59.15% {
      animation-timing-function: cubic-bezier(
        0.302435,
        0.381352,
        0.55,
        0.956352
      );
      transform: translateX(83.67142%);
    }
  
    100% {
      transform: translateX(200.611057%);
    }
  }
`;