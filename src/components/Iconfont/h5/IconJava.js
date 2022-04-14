/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconJava = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M558.08 472.064c48.128 53.248-13.312 103.424-13.312 103.424s119.808-61.44 65.536-139.264c-51.2-71.68-91.136-107.52 122.88-232.448 0 1.024-335.872 86.016-175.104 268.288"
        fill={getIconColor(color, 0, '#FF0000')}
      />
      <path
        d="M610.304 5.12s101.376 101.376-96.256 258.048C356.352 389.12 478.208 460.8 514.048 543.744 420.864 459.776 354.304 386.048 399.36 317.44 463.872 216.064 651.264 166.912 610.304 5.12"
        fill={getIconColor(color, 1, '#FF0000')}
      />
      <path
        d="M720.896 757.76c183.296-95.232 98.304-188.416 39.936-175.104-15.36 3.072-21.504 5.12-21.504 5.12s5.12-8.192 16.384-11.264c117.76-40.96 207.872 120.832-37.888 186.368-1.024 0 2.048-3.072 3.072-5.12m-337.92 38.912s-37.888 21.504 26.624 29.696c76.8 8.192 117.76 8.192 202.752-8.192 0 0 23.552 15.36 53.248 26.624-191.488 80.896-433.152-5.12-282.624-48.128m-23.552-106.496s-43.008 31.744 23.552 37.888c82.944 8.192 149.504 10.24 261.12-13.312 0 0 16.384 16.384 40.96 24.576-231.424 68.608-490.496 5.12-325.632-49.152"
        fill={getIconColor(color, 2, '#6699FF')}
      />
      <path
        d="M811.008 876.544s27.648 23.552-31.744 40.96c-111.616 34.816-460.8 45.056-558.08 2.048-34.816-15.36 31.744-35.84 51.2-40.96 21.504-5.12 34.816-3.072 34.816-3.072-38.912-28.672-251.904 52.224-107.52 75.776 390.144 62.464 712.704-28.672 611.328-74.752M400.384 578.56s-178.176 43.008-63.488 56.32c49.152 6.144 146.432 5.12 235.52-3.072 73.728-6.144 147.456-19.456 147.456-19.456s-26.624 11.264-45.056 24.576c-181.248 48.128-530.432 26.624-430.08-23.552 88.064-39.936 155.648-34.816 155.648-34.816"
        fill={getIconColor(color, 3, '#6699FF')}
      />
      <path
        d="M418.816 1015.808c176.128 11.264 446.464-6.144 453.632-90.112 0 0-13.312 31.744-146.432 56.32-150.528 27.648-336.896 24.576-446.464 6.144 2.048 1.024 24.576 20.48 139.264 27.648"
        fill={getIconColor(color, 4, '#6699FF')}
      />
    </svg>
  );
};

IconJava.defaultProps = {
  size: 36,
};

export default IconJava;
