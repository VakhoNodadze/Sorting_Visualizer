import { useState, FC } from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styled';
import * as icons from './index';
import { ThemeProps } from 'styled/themes';

interface IconProps extends ThemeProps {
    name?: keyof typeof icons;
    onClick?: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void);
    activeColor?: string;
    defaultColor?: string;
    [x:string]: any;
    disabled?: boolean;
}

const IconItem: FC <IconProps> = ({
  name, onClick, disabled = false, activeColor = '#919294', defaultColor, theme, ...rest
}) => {
  const Icon = name ? icons[name] : () => null;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledContainer 
      onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} {...rest}>
      <Icon disabled={disabled} theme={theme} color={isHovered ? activeColor : defaultColor} />
    </StyledContainer>
  );
};

IconItem.propTypes = {
  defaultColor: PropTypes.string,
  activeColor: PropTypes.string,
  name: PropTypes.any,
  onClick: PropTypes.func
};

export default IconItem;
