/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconWomaidaode = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M723.1 111.2H194.2c-22.7 0-41 18.4-41 41v717.9c0 22.7 18.4 41 41 41h305.6c11.9 0 16.8-15.3 7-22.2-64.7-45.5-107-120.6-107.4-205.5h-88c-10.3 0-18.6-8.3-18.6-18.6 0-5.1 2-9.7 5.4-13.1 3.3-3.3 7.9-5.4 13.1-5.4h90.6c5.2-36.7 18.5-71 38.1-101.1l-0.5 0.5h-129c-5.2 0-9.8-2.1-13.2-5.4-3.4-3.4-5.4-8-5.4-13.2 0-10.3 8.3-18.6 18.6-18.6h158.4c40-42.2 94.1-70.8 154.3-77.6 44.3-5 86.5 1.6 124.3 17 7.9 3.2 16.6-3 16.6-11.5V152.2c0-22.7-18.4-41-41-41zM623 412.7H307.6c-11.8 0-21.4-9.6-21.4-21.4s9.6-21.4 21.4-21.4H623c11.8 0 21.4 9.6 21.4 21.4s-9.6 21.4-21.4 21.4z m1.4-139.1H308.9c-11.8 0-21.4-9.6-21.4-21.4s9.6-21.4 21.4-21.4h315.5c11.8 0 21.4 9.6 21.4 21.4s-9.6 21.4-21.4 21.4z"
        fill={getIconColor(color, 0, '#EBB62A')}
      />
      <path
        d="M659.7 481c-112.1 0-202.9 90.8-202.9 202.9s90.8 202.9 202.9 202.9S862.6 796 862.6 683.9 771.8 481 659.7 481z m-129.3 82.3c3-2.8 6.5-4.2 10.5-4.2h209.6c8.8 0 16 3.5 21.8 10.5 5.8 7.4 7.6 15.3 5.4 23.6l-12 55.6c-1.6 7.8-6.5 11.7-14.7 11.7-1.4 0-2.5-0.1-3.3-0.3-4-0.8-7.1-3-9.3-6.6-2.4-3.6-3.1-7.4-2.1-11.4l11.1-49.6c0-1.2-0.2-2-0.6-2.4-0.6-0.8-1.4-1.2-2.4-1.2H540.9c-4 0-7.5-1.5-10.5-4.5-3-2.8-4.5-6.3-4.5-10.5s1.5-7.8 4.5-10.7z m48.1 59.7c-3.4-2.4-5.4-5.7-6-9.9-0.8-4.2 0-7.9 2.4-11.1 2.6-3.4 5.9-5.5 9.9-6.3 4-0.6 7.7 0.3 11.1 2.7l51.4 36.8c3.4 2.4 5.4 5.6 6 9.6 0.6 4.2-0.3 8-2.7 11.4-3.2 4.2-7.3 6.3-12.3 6.3-3.2 0-6.1-1-8.7-3L578.5 623z m30.5 61c-3 4.2-7.1 6.3-12.3 6.3-3.4 0-6.2-0.8-8.4-2.4l-46-31.4c-3.4-2.4-5.5-5.6-6.3-9.6-0.8-4.2-0.1-8 2.1-11.4 2.4-3.4 5.6-5.5 9.6-6.3 4.2-0.6 8 0.2 11.4 2.4l46.1 31.4c3.4 2.4 5.5 5.6 6.3 9.6 0.7 4.3-0.1 8.1-2.5 11.4z m172 39.2c-3 3-6.5 4.5-10.5 4.5h-78c-1 0-1.6 0.4-1.8 1.2-0.4 0.8-0.2 1.4 0.6 1.8l81.3 60.7c3.4 2.6 5.4 5.9 6 9.9 0.6 4.2-0.4 7.9-3 11.1-2.4 3.4-5.7 5.4-9.9 6-4.2 0.6-7.9-0.4-11.1-3L665.8 749c-4.6-3.2-9.2-3.3-13.8-0.3L547.3 816c-3.4 2.2-7.1 2.9-11.1 2.1-4.2-0.8-7.4-3-9.6-6.6-2.2-3.4-2.9-7.2-2.1-11.4 0.8-4 3-7.1 6.6-9.3l93.6-60.4c0.6-0.4 0.8-1 0.6-1.8-0.2-0.6-0.7-0.9-1.5-0.9h-95.1c-4 0-7.5-1.5-10.5-4.5s-4.5-6.5-4.5-10.5c0-4.2 1.5-7.8 4.5-10.8 3-2.8 6.5-4.2 10.5-4.2h114.5c2.6 0 5.2-1 7.8-3 2.4-1.8 3.9-4.2 4.5-7.2l17.6-76.5c1-4 3.3-7.1 6.9-9.3 3.4-2.2 7.1-2.8 11.1-1.8 4 0.8 7.1 3 9.3 6.6 2.4 3.4 3.1 7.1 2.1 11.1l-17.3 75c-0.2 1 0 2.2 0.6 3.6 1 1 2.1 1.5 3.3 1.5h81.3c4 0 7.5 1.4 10.5 4.2 3 3 4.5 6.6 4.5 10.8 0 4-1.4 7.5-4.4 10.5z"
        fill={getIconColor(color, 1, '#EBB62A')}
      />
      <path
        d="M402 646.3l-2.4 37.1h-0.2l2.5-37.1z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </svg>
  );
};

IconWomaidaode.defaultProps = {
  size: 36,
};

export default IconWomaidaode;
