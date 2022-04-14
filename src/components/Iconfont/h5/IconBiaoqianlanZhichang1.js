/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconBiaoqianlanZhichang1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M588.8 85.333333a74.666667 74.666667 0 0 1 73.258667 89.301334l-30.634667 152.96 154.282667 385.706666a74.666667 74.666667 0 0 1-22.613334 85.973334l-5.290666 3.882666-203.52 135.68a74.666667 74.666667 0 0 1-82.816 0l-203.52-135.68a74.666667 74.666667 0 0 1-27.946667-89.856L303.445333 554.666667H469.333333a42.666667 42.666667 0 0 0 42.368-37.674667L512 512a42.666667 42.666667 0 0 0-42.666667-42.666667H337.578667L394.24 327.594667l-30.549333-152.96A74.666667 74.666667 0 0 1 416 88.32l6.272-1.536A74.666667 74.666667 0 0 1 436.906667 85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconBiaoqianlanZhichang1.defaultProps = {
  size: 36,
};

export default IconBiaoqianlanZhichang1;
