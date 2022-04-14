/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXia = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M486.146 772.736c14.441 14.441 37.761 14.534 52.086 0.209l470.78-470.781c14.325-14.325 14.23-37.646-0.209-52.086l0 0c-14.441-14.441-37.761-14.534-52.086-0.209L485.937 720.65C471.613 734.976 471.707 758.297 486.146 772.736L486.146 772.736z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M15.197 251.264c-14.441 14.441-14.534 37.762-0.209 52.086l470.781 470.781c14.325 14.325 37.646 14.23 52.086-0.209l0 0c14.441-14.441 14.534-37.761 0.209-52.086L67.284 251.055C52.958 236.731 29.637 236.825 15.197 251.264L15.197 251.264 15.197 251.264z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconXia.defaultProps = {
  size: 36,
};

export default IconXia;
