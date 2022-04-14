/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSimi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 384V256a192 192 0 1 0-384 0v128H256V256a256 256 0 1 1 512 0v128h-64z m64 0h-64V256a192 192 0 1 0-384 0v128H256V256a256 256 0 1 1 512 0v128zM128 448a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V512a64 64 0 0 0-64-64H128z m0-64h768a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H128a128 128 0 0 1-128-128V512a128 128 0 0 1 128-128z"
        fill={getIconColor(color, 0, '#5A5A5A')}
      />
      <Path
        d="M512 736a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-48a48 48 0 1 0 0-96 48 48 0 0 0 0 96z"
        fill={getIconColor(color, 1, '#5A5A5A')}
      />
      <Path
        d="M480 704l64 0 0 160-64 0 0-160Z"
        fill={getIconColor(color, 2, '#5A5A5A')}
      />
    </Svg>
  );
};

IconSimi.defaultProps = {
  size: 36,
};

IconSimi = React.memo ? React.memo(IconSimi) : IconSimi;

export default IconSimi;
