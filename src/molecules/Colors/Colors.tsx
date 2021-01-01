import React, { FC } from 'react';

import { StyledContainer, StyledKeyItem, StyledBox } from './styled';

interface Props {
    groupA: string;
    groupB: string;
    groupC: string;
    groupD: string;
}

const ColorsInfo: FC <Props> = ({ groupA, groupB, groupC, groupD }) => {

  const colorA = groupA ? (
    <StyledKeyItem>
      <StyledBox group={'groupA'} />
      <span>{groupA}</span>
    </StyledKeyItem>
  ) : null;

  const colorB = groupB ? (
    <StyledKeyItem>
      <StyledBox group={'groupB'} />
      <span>{groupB}</span>
    </StyledKeyItem>
  ) : null;

  const colorC = groupC ? (
    <StyledKeyItem>
      <StyledBox group={'groupC'} />
      <span>{groupC}</span>
    </StyledKeyItem>
  ) : null;

  const colorD = groupD ? (
    <StyledKeyItem>
      <StyledBox group={'groupD'} />
      <span>{groupD}</span>
    </StyledKeyItem>
  ) : null;

  return (
    <StyledContainer>
      <StyledKeyItem>
        <StyledBox group={'sorted'} />
        <span>Sorted</span>
      </StyledKeyItem>
      {colorA}
      {colorB}
      {colorC}
      {colorD}
    </StyledContainer>
  );
};

export default ColorsInfo;
