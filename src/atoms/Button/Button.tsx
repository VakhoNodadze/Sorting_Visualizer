import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';
import { fontSizes, sizes, borderRadius } from 'styled/themes';


interface Props {
    onClick: any;
    size: keyof typeof sizes;
    fontSize: keyof typeof fontSizes;
    borderRadius: keyof typeof borderRadius;
    [x:string]: any;
}
const Button: FC <Props> = ({
  children,
  size,
  fluid,
  onClick,
  borderRadius,
  fontSize,
  ...rest
}) => {


  return (
    <StyledContainer
      size={size}
      borderRadius={borderRadius}
      fontSize={fontSize}
      onClick={onClick}
      {...rest}
    >
      <div>{children}</div>
    </StyledContainer>
  );
};


export default Button;
