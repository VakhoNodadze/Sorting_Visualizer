import styled, { css } from 'styled-components';

import { respondTo } from '../../../styled/responsive';

// function generateBreakpointStyles(props) {
//   const styles = []
//   sizes.map(size => {
//     styles.push(respondTo[size]`
//         width: ${100 / (12 / props[size])}%;
// 	    `)
//   })
//   return styles
// }

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 -${(props) => props.theme.spacing[props.spacing]}px;

  ${(props) => props.spacing
    && css`
      & > .item {
        padding: ${props.theme.spacing[props.spacing]}px;
      }
    `};
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 0;

  ${(props) => props.xs
    && respondTo.xs`
    width: ${Math.round((props.xs / 12) * 10e7) / 10e5}%;
  `}

  ${(props) => props.sm
    && respondTo.sm`
    width: ${Math.round((props.sm / 12) * 10e7) / 10e5}%;
  `}

  ${(props) => props.md
    && respondTo.md`
    width: ${Math.round((props.md / 12) * 10e7) / 10e5}%;
  `}

  ${(props) => props.lg
    && respondTo.lg`
    width: ${Math.round((props.lg / 12) * 10e7) / 10e5}%;
  `}

  ${(props) => props.xl
    && respondTo.xl`
    width: ${Math.round((props.xl / 12) * 10e7) / 10e5}%;
  `}
`;

export { StyledContainer, StyledItem };
