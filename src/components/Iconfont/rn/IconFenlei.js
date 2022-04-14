/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFenlei = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M122.065592 200.99371m-51.776224 0a50.597 50.597 0 1 0 103.552447 0 50.597 50.597 0 1 0-103.552447 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M122.065592 459.888132c-28.593222 0-51.776224 23.171746-51.776224 51.763944 0 28.605501 23.183002 51.774177 51.776224 51.774177 28.593222 0 51.777247-23.167652 51.777247-51.774177C173.841815 483.059877 150.658813 459.888132 122.065592 459.888132z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M122.065592 770.535241c-28.593222 0-51.776224 23.183002-51.776224 51.776224 0 28.609595 23.183002 51.788503 51.776224 51.788503 28.593222 0 51.777247-23.178909 51.777247-51.788503C173.841815 793.718243 150.658813 770.535241 122.065592 770.535241z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M251.505639 796.424888l698.980555 0 0 51.776224-698.980555 0 0-51.776224Z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M251.505639 485.765499l698.980555 0 0 51.7752-698.980555 0 0-51.7752Z"
        fill={getIconColor(color, 4, '#333333')}
      />
      <Path
        d="M251.505639 175.105087l698.980555 0 0 51.777247-698.980555 0 0-51.777247Z"
        fill={getIconColor(color, 5, '#333333')}
      />
    </Svg>
  );
};

IconFenlei.defaultProps = {
  size: 36,
};

IconFenlei = React.memo ? React.memo(IconFenlei) : IconFenlei;

export default IconFenlei;
