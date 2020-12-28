/* eslint-disable max-len */
import React, { FC } from 'react';
import { withTheme } from 'styled-components';

import { ThemeProps } from 'styled/themes';
interface Props extends ThemeProps {
  color?: string;
  disabled: boolean;
}

export const Forwards: FC <Props> = ({ theme, disabled, color = theme.themeColors.primaryIcons }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      style={{width: theme.sizes.tiny, maxHeight: 50, fill: disabled ? theme.themeColors.primaryTxt : color, cursor: 'pointer', margin: '1rem'}}>
      <path d="M19,3a3,3,0,0,0-3,3V8.84L7,3.47a3.21,3.21,0,0,0-3.29,0A3.38,3.38,0,0,0,2,6.42V17.58a3.38,3.38,0,0,0,1.72,3A3.24,3.24,0,0,0,5.33,21,3.28,3.28,0,0,0,7,20.53l9-5.37V18a3,3,0,0,0,6,0V6A3,3,0,0,0,19,3ZM15.32,13.23,6,18.81a1.23,1.23,0,0,1-1.28,0A1.4,1.4,0,0,1,4,17.58V6.42a1.4,1.4,0,0,1,.71-1.25A1.29,1.29,0,0,1,5.33,5,1.23,1.23,0,0,1,6,5.19l9.33,5.58a1.45,1.45,0,0,1,0,2.46ZM20,18a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Z"/>
    </svg>
  );
};

export default withTheme(Forwards);
