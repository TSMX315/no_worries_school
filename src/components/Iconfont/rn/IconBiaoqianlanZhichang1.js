/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBiaoqianlanZhichang1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M588.8 85.333333a74.666667 74.666667 0 0 1 73.258667 89.301334l-30.634667 152.96 154.282667 385.706666a74.666667 74.666667 0 0 1-22.613334 85.973334l-5.290666 3.882666-203.52 135.68a74.666667 74.666667 0 0 1-82.816 0l-203.52-135.68a74.666667 74.666667 0 0 1-27.946667-89.856L303.445333 554.666667H469.333333a42.666667 42.666667 0 0 0 42.368-37.674667L512 512a42.666667 42.666667 0 0 0-42.666667-42.666667H337.578667L394.24 327.594667l-30.549333-152.96A74.666667 74.666667 0 0 1 416 88.32l6.272-1.536A74.666667 74.666667 0 0 1 436.906667 85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBiaoqianlanZhichang1.defaultProps = {
  size: 36,
};

IconBiaoqianlanZhichang1 = React.memo ? React.memo(IconBiaoqianlanZhichang1) : IconBiaoqianlanZhichang1;

export default IconBiaoqianlanZhichang1;
