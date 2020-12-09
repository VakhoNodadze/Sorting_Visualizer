import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';

import GridItem from './GridItem';

import { spacings } from '../../../styled/oneOf';

const Grid = ({ children, spacing, ...rest }) => (
  <StyledContainer className="grid" spacing={spacing} {...rest}>
    {children}
  </StyledContainer>
);

Grid.propTypes = {
  spacing: PropTypes.oneOf(spacings)
};

Grid.defaultProps = {
  spacing: 0
};

Grid.Item = GridItem;

export default Grid;
