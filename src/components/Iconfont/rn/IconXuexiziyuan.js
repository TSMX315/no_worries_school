/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXuexiziyuan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M807.936 149.504H210.432c-36.352 0-64 27.648-64 64V640c0 36.352 27.648 64 64 64h597.504c36.352 0 64-27.648 64-64V213.504c0-36.352-27.648-64-64-64zM829.44 640c0 12.8-8.704 21.504-21.504 21.504H210.432c-12.8 0-21.504-8.704-21.504-21.504V213.504c0-12.8 8.704-21.504 21.504-21.504h597.504c12.8 0 21.504 8.704 21.504 21.504V640zM871.936 768H146.432c-12.8 0-21.504 8.704-21.504 21.504s8.704 21.504 21.504 21.504h125.952l-55.296 55.296c-8.704 8.704-8.704 21.504 0 29.696 8.704 8.704 21.504 8.704 29.696 0l85.504-85.504h354.304l85.504 85.504c8.704 8.704 21.504 8.704 29.696 0 8.704-8.704 8.704-21.504 0-29.696l-55.296-55.296h125.952c12.8 0 21.504-8.704 21.504-21.504s-9.216-21.504-22.016-21.504z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M701.952 448H316.928c-11.776 0-21.504-9.728-21.504-21.504 0-11.776 9.728-21.504 21.504-21.504h385.024c11.776 0 21.504 9.728 21.504 21.504 0 11.776-9.728 21.504-21.504 21.504z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconXuexiziyuan.defaultProps = {
  size: 36,
};

IconXuexiziyuan = React.memo ? React.memo(IconXuexiziyuan) : IconXuexiziyuan;

export default IconXuexiziyuan;
