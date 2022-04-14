/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconResou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M261.808 757.901s194.841 263.084 444.027 38.086C977.58 550.335 479.188 383.015 479.188 383.015l-133.3 141.319-84.08 233.567z m0 0"
        fill={getIconColor(color, 0, '#FDB350')}
      />
      <Path
        d="M381.1 856.521c-46.161-99.683-21.533-156.993 14.007-210.753 38.617-59.105 48.889-117.479 48.889-117.479s30.414 41.309 18.109 105.725c53.668-62.292 63.921-161.974 55.737-200.06 121.673 88.622 173.638 280.515 103.563 422.567 372.581-219.322 92.633-548.268 43.763-585.292 16.388 37.023 19.464 99.7-13.679 130.315-55.389-219.688-192.79-264.53-192.79-264.53 16.406 113.213-58.813 237.101-131.267 329.313-2.38-45.19-5.127-76.171-28.033-119.604-5.109 81.884-65.295 148.79-81.701 231.04-21.863 111.438 16.406 192.956 163.402 278.758z m0 0"
        fill={getIconColor(color, 1, '#F23921')}
      />
    </Svg>
  );
};

IconResou.defaultProps = {
  size: 36,
};

IconResou = React.memo ? React.memo(IconResou) : IconResou;

export default IconResou;
