/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGongzuoshilogo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M303.512748 95.388102L53.031161 289.450425 35.728045 823.807365l295.433428 35.354108 342.209632-196.033994L292.385269 615.070822l11.127479-519.68272"
        fill={getIconColor(color, 0, '#00953A')}
      />
      <Path
        d="M237.110482 913.484419l93.915014-54.379603L673.348442 663.002833 523.05949 326.243626l-13.994334-29.121813 19.558073 15.206799 370.164306 231.002833 89.48442 205.949008-462.42493 274.719547-288.736543-110.515581"
        fill={getIconColor(color, 1, '#E94727')}
      />
      <Path
        d="M468.555241 0l458.878187 289.745042 57.246459 311.705383-469.654391-292.521247L292.385269 615.070822l8.339943-400.770539L468.555241 0z"
        fill={getIconColor(color, 2, '#007BC7')}
      />
    </Svg>
  );
};

IconGongzuoshilogo.defaultProps = {
  size: 36,
};

IconGongzuoshilogo = React.memo ? React.memo(IconGongzuoshilogo) : IconGongzuoshilogo;

export default IconGongzuoshilogo;
