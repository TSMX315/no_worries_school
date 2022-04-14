/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconYoujiantou = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M702.6312 520.098445 356.711749 170.45723 321.103764 205.930139 634.023636 517.722328 321.63179 813.354466 357.135398 848.729138 669.533384 553.097 669.455613 553.108257Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconYoujiantou.defaultProps = {
  size: 36,
};

export default IconYoujiantou;
