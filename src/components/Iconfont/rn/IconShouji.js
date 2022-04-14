/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShouji = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M798 0H226c-35.3 0-64 28.7-64 64v896c0 35.3 28.7 64 64 64h572c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z m0 928c0 17.6-14.4 32-32 32H258c-17.6 0-32-14.4-32-32V773.8h572V928zM226 709.8V96c0-17.6 14.4-32 32-32h508c17.6 0 32 14.4 32 32v613.8H226z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M457 869.4a55 55 0 1 0 110 0 55 55 0 1 0-110 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconShouji.defaultProps = {
  size: 36,
};

IconShouji = React.memo ? React.memo(IconShouji) : IconShouji;

export default IconShouji;
