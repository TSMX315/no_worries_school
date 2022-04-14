/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconShejiaotubiao48 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M411.52 574.72a969.92 969.92 0 0 1 59.84 117.28h83.36a668.16 668.16 0 0 0 60.8-117.28z"
        fill={getIconColor(color, 0, '#06c714')}
      />
      <path
        d="M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28z m-215.36 228.8h434.88v44.16H296.64zM741.6 736H283.52v-44h136.96A612.8 612.8 0 0 0 368 597.44l35.2-22.72h-62.4v-176h348v176H624l35.36 23.2A633.12 633.12 0 0 1 608 692h134.24z"
        fill={getIconColor(color, 1, '#06c714')}
      />
      <path
        d="M389.44 443.68H640v86.56H389.44z"
        fill={getIconColor(color, 2, '#06c714')}
      />
    </svg>
  );
};

IconShejiaotubiao48.defaultProps = {
  size: 36,
};

export default IconShejiaotubiao48;
