import React, { FC } from 'react';
import { StyledContainer, StyledProgress } from './styled';

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

