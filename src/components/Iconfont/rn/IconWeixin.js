/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconWeixin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1213 1024" width={size} height={size} {...rest}>
      <Path
        d="M119.734969 914.905702l27.726077-73.223172c7.102922-18.895418 12.670077-42.891775 12.971745-54.574573-102.07365-85.810975-160.432791-206.423525-160.432791-332.274137 0-122.395136 53.258202-237.193712 149.984092-323.251507C245.475883 46.731193 371.847559 0 506.007767 0c109.834757 0 214.321755 31.071855 302.134711 89.842363 85.810975 57.426712 150.313185 139.453119 181.659284 230.913522l-77.830472 26.656526c-25.532125-74.539543-78.653204-141.729345-149.572725-189.228421C688.270388 108.518386 599.634698 82.273226 506.007767 82.273226 272.296955 82.273226 82.163529 249.397574 82.163529 454.83382c0 103.801387 49.912424 203.735933 136.957497 274.244088 23.530143 19.059964 25.011061 50.131819 22.597713 72.674683 72.126195-13.9316 88.14205-7.815957 95.985431-4.881545a470.657704 470.657704 0 0 0 168.303597 30.495943v82.273226a552.958355 552.958355 0 0 1-194.219663-34.664452c-16.728889-0.301668-72.290742 10.421275-116.142372 21.199068z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M1117.133292 1024l-75.746217-18.593749c-38.394172-9.461421-80.792308-17.277378-94.504513-17.551622a469.670425 469.670425 0 0 1-163.888266 29.015025c-237.330834 0-430.563218-173.815903-430.563219-387.506897S545.773159 241.883286 782.994296 241.883286s430.563218 173.815903 430.563218 387.506896c0 106.297008-48.733174 208.151263-134.105359 281.127614a186.869922 186.869922 0 0 0 10.256728 40.451003zM782.994296 324.156512c-191.970862 0-348.289992 136.930073-348.289992 305.23367s156.31913 305.23367 348.289992 305.23367a387.369774 387.369774 0 0 0 138.630386-25.175608c7.185195-2.742441 20.321487-7.761108 75.307427 2.166529-0.740459-19.197086 2.934412-42.398136 21.939527-57.865503 71.303463-57.591258 112.193256-139.453119 112.193256-224.331664 0.219395-168.358446-156.099735-305.261094-348.070596-305.261094zM385.340368 324.979244a54.848818 54.848818 0 1 1 54.848818-54.848817 54.848818 54.848818 0 0 1-54.848818 54.848817z m0-82.273226a27.424409 27.424409 0 1 0 27.424409 27.424409 27.424409 27.424409 0 0 0-27.424409-27.424409z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M637.644929 319.494362a54.848818 54.848818 0 1 1 54.848817-54.848817 54.848818 54.848818 0 0 1-54.848817 54.848817z m0-82.273226a27.424409 27.424409 0 1 0 27.424409 27.424409 27.424409 27.424409 0 0 0-27.424409-27.424409zM665.069338 566.314042a54.848818 54.848818 0 1 1 54.848817-54.848818 54.848818 54.848818 0 0 1-54.848817 54.848818z m0-82.273227a27.424409 27.424409 0 1 0 27.424408 27.424409 27.424409 27.424409 0 0 0-27.424408-27.424409zM917.373899 560.82916a54.848818 54.848818 0 1 1 54.848817-54.848818 54.848818 54.848818 0 0 1-54.848817 54.848818z m0-82.273227a27.424409 27.424409 0 1 0 27.424408 27.424409 27.424409 27.424409 0 0 0-27.424408-27.424409z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconWeixin.defaultProps = {
  size: 36,
};

IconWeixin = React.memo ? React.memo(IconWeixin) : IconWeixin;

export default IconWeixin;
