/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFenxiang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M251.4 725.5s58.1-180 202.5-277.6 264.4-71.3 264.4-71.3l-1.9 97.5 240.1-191.3L718.4 95.3v103.1s-174.6-28.1-311.3 108.8C253.9 460.6 251.4 725.5 251.4 725.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M724.1 840.8c0 2.1-1.7 3.7-3.7 3.7H150.6c-2.1 0-3.7-1.7-3.7-3.7V272.5c0-2.1 1.7-3.7 3.7-3.7h203c12.3-11.6 26-22.3 41-31.9 21.2-13.4 43.1-25.1 65-35.2v-15.4h-309c-47.6 0-86.2 38.7-86.2 86.2v568.3c0 47.6 38.7 86.2 86.2 86.2h569.8c47.6 0 86.2-38.7 86.2-86.2V488.5l-82.5 47v305.3z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFenxiang.defaultProps = {
  size: 36,
};

IconFenxiang = React.memo ? React.memo(IconFenxiang) : IconFenxiang;

export default IconFenxiang;
