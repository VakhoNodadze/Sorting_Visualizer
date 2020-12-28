/* eslint-disable max-len */
import React, { FC } from 'react';
import { withTheme } from 'styled-components';

import { ThemeProps } from 'styled/themes';
interface Props extends ThemeProps {
  color?: string;
}

export const Pause: FC <Props> = ({ theme, color = '#000' }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{width: theme.sizes.tiny, maxHeight: 50, fill: color, cursor: 'pointer', margin: '1rem'}}>
      <path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"/>
    </svg>
  );
};

export default withTheme(Pause);
