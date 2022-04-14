/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconShouji = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M798 0H226c-35.3 0-64 28.7-64 64v896c0 35.3 28.7 64 64 64h572c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z m0 928c0 17.6-14.4 32-32 32H258c-17.6 0-32-14.4-32-32V773.8h572V928zM226 709.8V96c0-17.6 14.4-32 32-32h508c17.6 0 32 14.4 32 32v613.8H226z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M457 869.4a55 55 0 1 0 110 0 55 55 0 1 0-110 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconShouji.defaultProps = {
  size: 36,
};

export default IconShouji;
