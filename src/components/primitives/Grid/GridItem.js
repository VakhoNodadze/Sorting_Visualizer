import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem } from './styled';

const GRID_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const GridItem = ({ children, xs, ...rest }) => (
  <StyledItem className="item" xs={xs} {...rest}>
    {children}
  </StyledItem>
);

GridItem.propTypes = {
  xs: PropTypes.oneOf(GRID_SIZES),
  sm: PropTypes.oneOf(GRID_SIZES),
  md: PropTypes.oneOf(GRID_SIZES),
  lg: PropTypes.oneOf(GRID_SIZES),
  xl: PropTypes.oneOf(GRID_SIZES)
};

GridItem.defaultProps = {
  xs: 12,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

export default GridItem;
