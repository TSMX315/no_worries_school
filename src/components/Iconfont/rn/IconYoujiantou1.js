/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconYoujiantou1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M677.391515 873.916768c-7.86101 0-15.618586-2.999596-21.617778-8.895354L324.473535 533.721212c-11.998384-11.894949-11.998384-31.340606 0-43.235555L655.670303 159.288889c5.999192-5.999192 13.756768-8.895354 21.617778-8.895354 7.757576 0 15.618586 2.999596 21.617778 8.895354 11.894949 11.894949 11.894949 31.237172 0 43.235555L389.223434 512.103434 698.905859 821.785859c11.894949 11.998384 11.894949 31.340606 0 43.235555-5.895758 5.895758-13.756768 8.895354-21.514344 8.895354z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYoujiantou1.defaultProps = {
  size: 36,
};

IconYoujiantou1 = React.memo ? React.memo(IconYoujiantou1) : IconYoujiantou1;

export default IconYoujiantou1;
