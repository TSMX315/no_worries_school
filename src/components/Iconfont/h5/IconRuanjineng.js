/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconRuanjineng = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M188.533934 868.73682c172.649152-24.545022 245.723448-89.308025 245.723448-89.308025s-281.211706-77.025281-177.74931-312.00913C359.927489 232.496192 720.839399 240.231363 871.576495 69.660546c0 0 150.780075 443.512163 35.283598 688.536692-115.496477 245.064438-335.874677 119.097492-367.968629 75.66633 78.383208-75.831083 155.86079-183.510524 242.86433-419.914722 0 0-307.834041 581.003584-639.903042 538.128077-48.14144-6.192026-35.283598-26.354228-22.465664-54.230112C132.162042 869.910553 188.533934 868.73682 188.533934 868.73682L188.533934 868.73682zM188.533934 868.73682"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconRuanjineng.defaultProps = {
  size: 36,
};

export default IconRuanjineng;
