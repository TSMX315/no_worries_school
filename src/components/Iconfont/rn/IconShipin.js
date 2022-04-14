/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShipin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M204.8 236.8A19.2 19.2 0 0 0 185.6 256v512c0 10.5984 8.6016 19.2 19.2 19.2h614.4a19.2 19.2 0 0 0 19.2-19.2V256A19.2 19.2 0 0 0 819.2 236.8H204.8z m0-64h614.4c45.9264 0 83.2 37.2736 83.2 83.2v512c0 45.9264-37.2736 83.2-83.2 83.2H204.8A83.2 83.2 0 0 1 121.6 768V256c0-45.9264 37.2736-83.2 83.2-83.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M670.7712 485.0176a52.48 52.48 0 0 1-17.9712 71.9872l-195.7376 117.4016a52.48 52.48 0 0 1-79.4624-44.9536V394.5472a52.48 52.48 0 0 1 79.4624-44.9536L652.8 466.944c7.3728 4.4544 13.568 10.5984 17.9712 18.0224z m-229.1712-70.144v194.2016L603.392 512l-161.792-97.0752z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconShipin.defaultProps = {
  size: 36,
};

IconShipin = React.memo ? React.memo(IconShipin) : IconShipin;

export default IconShipin;
