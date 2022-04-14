/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZhuanyefenlei = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M39.4 137.8h275.7c21.8 0 39.4 17.6 39.4 39.4s-17.6 39.4-39.4 39.4H39.4C17.6 216.6 0 199 0 177.2s17.6-39.4 39.4-39.4z m0 393.9h275.7c21.8 0 39.4 17.6 39.4 39.4s-17.6 39.4-39.4 39.4H39.4C17.6 610.5 0 592.8 0 571.1s17.6-39.4 39.4-39.4z m0 354.5h945.2c21.8 0 39.4 17.6 39.4 39.4 0 21.8-17.6 39.4-39.4 39.4H39.4C17.6 964.9 0 947.3 0 925.5c0-21.7 17.6-39.3 39.4-39.3z"
        fill={getIconColor(color, 0, '#353535')}
      />
      <path
        d="M689.2 649.8c-162.9 0-295.4-132.5-295.4-295.4S526.3 59.1 689.2 59.1s295.4 132.5 295.4 295.4-132.5 295.3-295.4 295.3z m0-512c-119.4 0-216.6 97.2-216.6 216.6S569.8 571 689.2 571s216.6-97.2 216.6-216.6-97.1-216.6-216.6-216.6z"
        fill={getIconColor(color, 1, '#333535')}
      />
      <path
        d="M757.421 556.828l60.534-50.448 196.926 236.299-60.534 50.448z"
        fill={getIconColor(color, 2, '#333535')}
      />
    </svg>
  );
};

IconZhuanyefenlei.defaultProps = {
  size: 36,
};

export default IconZhuanyefenlei;
