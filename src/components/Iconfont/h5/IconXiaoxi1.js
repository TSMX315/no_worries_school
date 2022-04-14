/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiaoxi1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512.5 82.7c-248.2 0-448 174.8-448 390.3 0 132.7 76.5 249.8 192 321.6v120.2c0 15.6 10.9 26.5 25 26.5 4.7 0 9.4-1.6 12.5-3.1L415.7 857c31.2 6.2 62.4 7.8 95.2 7.8C759.2 864.8 959 690 959 474.5c1.5-217-199.8-391.8-446.5-391.8zM311.1 537c-29.7 0-53.1-25-53.1-53.1 0-29.7 25-53.1 53.1-53.1 29.7 0 53.1 25 53.1 53.1 1.5 28.1-23.4 53.1-53.1 53.1z m204.5 0c-29.7 0-53.1-25-53.1-53.1 0-29.7 25-53.1 53.1-53.1 29.7 0 53.1 25 53.1 53.1s-25 53.1-53.1 53.1z m196.7 0c-29.7 0-53.1-25-53.1-53.1 0-29.7 25-53.1 53.1-53.1 29.7 0 53.1 25 53.1 53.1S742 537 712.3 537z m0 0"
        fill={getIconColor(color, 0, '#2c2c2c')}
      />
    </svg>
  );
};

IconXiaoxi1.defaultProps = {
  size: 36,
};

export default IconXiaoxi1;
