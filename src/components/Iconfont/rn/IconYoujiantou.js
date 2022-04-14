/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconYoujiantou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M702.6312 520.098445 356.711749 170.45723 321.103764 205.930139 634.023636 517.722328 321.63179 813.354466 357.135398 848.729138 669.533384 553.097 669.455613 553.108257Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYoujiantou.defaultProps = {
  size: 36,
};

IconYoujiantou = React.memo ? React.memo(IconYoujiantou) : IconYoujiantou;

export default IconYoujiantou;
