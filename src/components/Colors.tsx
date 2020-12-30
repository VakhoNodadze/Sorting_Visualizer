import React, { FC } from 'react';

import { styled } from 'styled/themes';

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

const StyledContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    padding: 1rem;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
`;

const StyledKeyItem = styled.div `
    display: inline-flex;
    align-items: center;
    margin-right: 4rem;
    padding: 4px;
`;

interface BoxProps {
    group: string;
}
const StyledBox = styled.div<BoxProps> `
    flex-shrink: 0;
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    background-color: ${({group}) => {
    switch (group) {
    case 'groupA':
      return '#336699';
    case 'groupB':
      return '#FFFF00';
    case 'groupC':
      return '#990033';
    case 'groupD':
      return 'red';
    case 'sorted':
      return '#669966';
    default:
      return '#fff';
    }
  }};
`;