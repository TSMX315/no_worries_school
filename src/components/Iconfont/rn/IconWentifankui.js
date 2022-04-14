/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconWentifankui = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M851.2 505.6c-6.4-12.8-6.4-25.6-25.6-25.6-12.8 0-25.6 12.8-25.6 25.6v243.2c0 38.4-32 70.4-64 70.4H288c-38.4 0-70.4-38.4-70.4-76.8V313.6c0-38.4 32-70.4 64-70.4h249.6c12.8 0 25.6-6.4 25.6-25.6 0-12.8-6.4-25.6-19.2-25.6h-256c-64 0-115.2 51.2-115.2 121.6v435.2c0 64 51.2 121.6 115.2 121.6H736c64 0 115.2-51.2 115.2-121.6V505.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M710.4 236.8L800 320 563.2 563.2H480l-6.4-83.2 236.8-243.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M441.6 473.6V576c0 12.8 6.4 19.2 25.6 25.6h102.4c6.4 0 12.8-6.4 19.2-6.4l249.6-256c6.4-6.4 6.4-25.6 0-32L736 204.8c-6.4-6.4-25.6-6.4-32 0L454.4 448c-12.8 12.8-12.8 19.2-12.8 25.6z m275.2-236.8L800 320 556.8 563.2l-76.8-6.4-6.4-76.8 243.2-243.2z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconWentifankui.defaultProps = {
  size: 36,
};

IconWentifankui = React.memo ? React.memo(IconWentifankui) : IconWentifankui;

export default IconWentifankui;
