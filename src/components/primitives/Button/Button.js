import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledStartIcon } from './styled';

import Tooltip from '../Tooltip';

import {
  sizes, attachs, variants, colors
} from '../../../styled/oneOf';

const Button = ({
  children,
  size,
  color,
  fluid,
  attached,
  disabled,
  variant,
  loading,
  onClick,
  startIcon,
  active,
  tooltip,
  ...rest
}) => {
  const handleClick = (e) => {
    if (disabled) {return null;}
    if (!loading) {onClick(e);}
    return null;
  };


  const renderContent = () => {

    return tooltip ? (
      <Tooltip content={tooltip} position="top center">
        <div>{children}</div>
      </Tooltip>
    ) : (
      children
    );
  };

  return (
    <StyledContainer
      variant={variant}
      size={size}
      color={color}
      fluid={fluid}
      attached={attached}
      isDisabled={disabled}
      active={active}
      onClick={handleClick}
      {...rest}
    >
      {startIcon && <StyledStartIcon active={active}>{startIcon}</StyledStartIcon>}
      {renderContent()}
    </StyledContainer>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  fluid: PropTypes.bool,
  attached: PropTypes.oneOf(attachs),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  startIcon: PropTypes.node,
  active: PropTypes.bool,
  variant: PropTypes.oneOf(variants),
  tooltip: PropTypes.string
};

Button.defaultProps = {
  size: 'default',
  color: 'default',
  fluid: false,
  attached: 'default',
  disabled: false,
  loading: false,
  onClick: () => {null;},
  startIcon: null,
  active: false,
  variant: 'default',
  tooltip: null
};

export default Button;
