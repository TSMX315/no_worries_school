/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShejiaotubiao48 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M411.52 574.72a969.92 969.92 0 0 1 59.84 117.28h83.36a668.16 668.16 0 0 0 60.8-117.28z"
        fill={getIconColor(color, 0, '#06c714')}
      />
      <Path
        d="M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28z m-215.36 228.8h434.88v44.16H296.64zM741.6 736H283.52v-44h136.96A612.8 612.8 0 0 0 368 597.44l35.2-22.72h-62.4v-176h348v176H624l35.36 23.2A633.12 633.12 0 0 1 608 692h134.24z"
        fill={getIconColor(color, 1, '#06c714')}
      />
      <Path
        d="M389.44 443.68H640v86.56H389.44z"
        fill={getIconColor(color, 2, '#06c714')}
      />
    </Svg>
  );
};

IconShejiaotubiao48.defaultProps = {
  size: 36,
};

IconShejiaotubiao48 = React.memo ? React.memo(IconShejiaotubiao48) : IconShejiaotubiao48;

export default IconShejiaotubiao48;
