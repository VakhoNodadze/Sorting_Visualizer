import { css } from 'styled-components';
import { spacing, styled } from 'styled/themes';

import { breakpoints } from 'styled/themes';
interface StyledContainerProps {
  spacing: keyof typeof spacing;
}

interface StyledItemProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const StyledContainer = styled.div<StyledContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-grow: 1;
  width: calc(100% + ${(props) => props.theme.spacing[props.spacing]}px);
  margin: 0 -${(props) => props.theme.spacing[props.spacing]}px;

  ${(props) =>
    props.spacing &&
    css`
      & > .item {
        padding: ${({theme}) => theme.spacing[props.spacing]}px;
      }
    `};
`;

const StyledItem = styled.div<StyledItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 0;

  ${(props) =>
    props.xs &&
    `
    @media (min-width: ${breakpoints.xs}px) {
      width: ${Math.round((props.xs / 12) * 10e7) / 10e5}%;
    }
  `}

  ${(props) =>
    props.sm &&
    `
    @media (min-width: ${breakpoints.sm}px) {
      width: ${Math.round((props.sm / 12) * 10e7) / 10e5}%;
    }
  `}

  ${(props) =>
    props.md &&
    `
    @media (min-width: ${breakpoints.md}px) {
      width: ${Math.round((props.md / 12) * 10e7) / 10e5}%;
    }
  `}

  ${(props) =>
    props.lg &&
    `
    @media (min-width: ${breakpoints.lg}px) {
      width: ${Math.round((props.lg / 12) * 10e7) / 10e5}%;
    }
  `}

  ${(props) =>
    props.xl &&
    `
    @media (min-width: ${breakpoints.xl}px) {
      width: ${Math.round((props.xl / 12) * 10e7) / 10e5}%;
    }
  `}
`;

export { StyledContainer, StyledItem };
