/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBiaoqianlanZhichang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M587.946667 96a74.666667 74.666667 0 0 1 74.026666 84.48l-0.810666 4.821333-30.592 152.96 154.282666 385.706667a74.666667 74.666667 0 0 1-22.613333 85.973333l-5.290667 3.882667-203.52 135.68a74.666667 74.666667 0 0 1-76.928 3.584l-5.930666-3.584-203.52-135.68a74.666667 74.666667 0 0 1-30.08-83.626667l2.176-6.229333 154.24-385.706667-30.549334-152.96A74.666667 74.666667 0 0 1 415.146667 98.986667l6.272-1.536a74.666667 74.666667 0 0 1 9.728-1.28l4.906666-0.170667h151.893334zM556.970667 384H554.666667v170.666667a42.666667 42.666667 0 0 1-85.333334 0V384h-2.346666l-145.493334 363.562667 190.421334 127.061333 190.506666-126.976L556.928 384z m-107.946667-202.752L472.490667 298.666667h78.933333l23.552-117.333334-125.952-0.085333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBiaoqianlanZhichang.defaultProps = {
  size: 36,
};

IconBiaoqianlanZhichang = React.memo ? React.memo(IconBiaoqianlanZhichang) : IconBiaoqianlanZhichang;

export default IconBiaoqianlanZhichang;
