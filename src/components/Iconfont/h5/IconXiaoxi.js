/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiaoxi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M303 512c-33.5 0-60.6-27.5-60.6-61.4s27.1-61.5 60.6-61.5c33.6 0 60.6 27.5 60.6 61.5 0 33.9-27.1 61.4-60.6 61.4z m194.2 0c-33.5 0-60.7-27.5-60.7-61.4s27.1-61.5 60.7-61.5 60.6 27.5 60.6 61.5c0.1 33.9-27.1 61.4-60.6 61.4z m194.2 0c-33.5 0-60.6-27.5-60.6-61.4s27.1-61.5 60.6-61.5 60.6 27.5 60.6 61.5c0.1 33.9-27.1 61.4-60.6 61.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M510.3 60.3C230.6 60.4 6.7 107 6.7 450.4c0 217.8 93.2 316.1 231.9 359v154.4L364 834c47.2 4.8 95.8 6.4 147.7 6.4 279.7 0 505.5-46.6 505.5-390.1 0-343.4-227.2-389.9-506.9-390z m2.2 745c-47.9 0-116.1-2.7-159.6-7.2l-79.8 89 1.4-106.2C133.9 742.5 59.4 613.3 59.4 457.6c0-299.7 203-353.3 451.1-353.3 241.4 4.5 452.9 39.2 452.9 353.3-7.1 293-193.2 347.7-450.9 347.7z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconXiaoxi.defaultProps = {
  size: 36,
};

export default IconXiaoxi;
