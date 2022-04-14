/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconLiwu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800.3 959.8H222.5c-33 0-60-27-60-60V379.7c0-33 27-60 60-60h577.8c33 0 60 27 60 60v520.1c0 33-27 60-60 60z"
        fill={getIconColor(color, 0, '#FF5F5F')}
      />
      <Path
        d="M162.5 252h697.8v257H162.5z"
        fill={getIconColor(color, 1, '#F44D4C')}
      />
      <Path
        d="M867.3 468.4h-710c-33 0-60-27-60-60v-137c0-33 27-60 60-60h710c33 0 60 27 60 60v137c0 33-27 60-60 60z"
        fill={getIconColor(color, 2, '#FF5F5F')}
      />
      <Path
        d="M489.4 508.9h126v448h-126z"
        fill={getIconColor(color, 3, '#F44D4C')}
      />
      <Path
        d="M449.4 203.8h126v756.1h-126z"
        fill={getIconColor(color, 4, '#FFF082')}
      />
      <Path
        d="M444.1 73.9c35.1 20.1 92.8 90.7 72.8 125.9s-110.2 21.4-145.4 1.4-47.4-64.8-27.3-99.9 64.8-47.5 99.9-27.4z"
        fill={getIconColor(color, 5, '#FFF082')}
      />
      <Path
        d="M581.5 73.9c-35.1 20.1-92.8 90.7-72.8 125.9 20.1 35.1 110.2 21.4 145.4 1.4 35.1-20.1 47.4-64.8 27.3-99.9s-64.8-47.5-99.9-27.4z"
        fill={getIconColor(color, 6, '#FFF082')}
      />
    </Svg>
  );
};

IconLiwu.defaultProps = {
  size: 36,
};

IconLiwu = React.memo ? React.memo(IconLiwu) : IconLiwu;

export default IconLiwu;
