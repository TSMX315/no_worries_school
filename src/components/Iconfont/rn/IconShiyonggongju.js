/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShiyonggongju = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1003.441363 558.731621v219.487082l-491.480681 245.74034-491.480682-245.74034V245.740341l491.480682-245.740341 491.480681 245.740341v312.704583zM102.639187 737.425806l409.567235 204.783617 409.567235-204.783617v-142.201744l-348.787457 154.324934-15.727382 28.669707-24.574034-10.853532-24.574034 10.853532-15.727382-28.669707-389.49844-172.345892v160.222702zM511.960682 81.913447L144.005478 266.218703l388.310695 171.813454 366.685545-162.229581z m60.656907 421.854252l-15.727382 28.669706-24.574034-10.853532-24.574034 10.853532-15.727382-28.669706-389.49844-172.345893v161.860971l429.799856 190.162067 389.088873-172.018238V349.565635z"
        fill={getIconColor(color, 0, '#546176')}
      />
    </Svg>
  );
};

IconShiyonggongju.defaultProps = {
  size: 36,
};

IconShiyonggongju = React.memo ? React.memo(IconShiyonggongju) : IconShiyonggongju;

export default IconShiyonggongju;
