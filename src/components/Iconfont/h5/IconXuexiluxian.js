/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXuexiluxian = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m-268.8-358.4a38.4 38.4 0 1 0 0 76.8h537.6a38.4 38.4 0 1 0 0-76.8H243.2z m43.52-79.36l130.56-174.08 174.08 130.56a38.4 38.4 0 0 0 53.76-7.68l153.6-204.8a38.4 38.4 0 0 0-61.44-46.08l-130.56 174.08-174.08-130.56a38.4 38.4 0 0 0-53.76 7.68l-153.6 204.8a38.4 38.4 0 1 0 61.44 46.08z"
        fill={getIconColor(color, 0, '#F52956')}
      />
    </svg>
  );
};

IconXuexiluxian.defaultProps = {
  size: 36,
};

export default IconXuexiluxian;
