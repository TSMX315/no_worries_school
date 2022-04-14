/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let Icon70BasicIconsAll17 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1341 1024" width={size} height={size} {...rest}>
      <Path
        d="M1333.894737 541.642105c0-2.694737 2.694737-2.694737 2.694737-5.389473s0-2.694737 2.694737-5.389474c0-2.694737 0-2.694737 2.694736-5.389474v-5.389473-5.389474-5.389474-5.389474-5.389473c0-2.694737 0-2.694737-2.694736-5.389474 0-2.694737-2.694737-2.694737-2.694737-5.389474s-2.694737-2.694737-2.694737-5.389473-2.694737-2.694737-2.694737-2.694737c0-2.694737-2.694737-2.694737-2.694737-5.389474L878.484211 16.168421c-21.557895-21.557895-53.894737-21.557895-75.452632 0-21.557895 21.557895-21.557895 53.894737 0 75.452632L1156.042105 458.105263H53.894737c-29.642105 0-53.894737 24.252632-53.894737 53.894737s24.252632 53.894737 53.894737 53.894737h1107.536842L803.031579 932.378947c-21.557895 21.557895-21.557895 56.589474 0 75.452632 10.778947 10.778947 24.252632 16.168421 37.726316 16.168421 13.473684 0 26.947368-5.389474 37.726316-16.168421l444.631578-455.410526 2.694737-2.694737 2.694737-2.694737c5.389474-2.694737 5.389474-5.389474 5.389474-5.389474z"
        fill={getIconColor(color, 0, '#50BC93')}
      />
    </Svg>
  );
};

Icon70BasicIconsAll17.defaultProps = {
  size: 36,
};

Icon70BasicIconsAll17 = React.memo ? React.memo(Icon70BasicIconsAll17) : Icon70BasicIconsAll17;

export default Icon70BasicIconsAll17;
