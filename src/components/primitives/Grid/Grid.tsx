import React, { FC } from 'react';
import { StyledContainer } from './styled';

interface Props {
    spacing?: string;
}

const Grid: FC <Props> = ({ children, spacing, ...rest }) => (
  <StyledContainer className="grid" spacing={spacing} {...rest as any}>
    {children}
  </StyledContainer>
);

Grid.defaultProps = {
  spacing: 'default'
};

export default Grid;