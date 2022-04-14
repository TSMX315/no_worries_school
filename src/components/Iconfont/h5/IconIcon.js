/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconIcon = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M322.866409 445.88828c-17.275455 0-31.272237 14.001899-31.272237 31.272237l0 30.508851c0 17.270339 13.996782 31.272237 31.272237 31.272237s31.272237-14.001899 31.272237-31.272237L354.138646 477.160517C354.138646 459.890178 340.141864 445.88828 322.866409 445.88828z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M566.946426 445.88828c-17.275455 0-31.272237 14.001899-31.272237 31.272237l0 30.508851c0 17.270339 13.996782 31.272237 31.272237 31.272237 17.275455 0 31.272237-14.001899 31.272237-31.272237L598.218664 477.160517C598.218664 459.890178 584.220858 445.88828 566.946426 445.88828z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M522.028401 587.518974c-14.282285-9.43693-33.613562-5.420453-43.213197 8.754385-0.132006 0.198521-13.630439 19.789719-34.224476 19.789719-20.013823 0-32.473599-18.140149-33.307593-19.397792-9.19236-14.429641-28.319999-18.832927-42.886763-9.772574-14.669094 9.115612-19.178805 28.401864-10.058077 43.070958 11.228739 18.064424 42.022069 48.643883 86.253456 48.643883 44.017516 0 75.197656-30.351262 86.690408-48.282656C540.514427 615.915721 536.331151 596.930321 522.028401 587.518974z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M787.392164 317.513494c-0.315178-0.00921-0.60989-0.093121-0.927115-0.093121L215.015052 317.420373c-17.275455 0-31.272237 14.001899-31.272237 31.272237 0 17.270339 13.996782 31.272237 31.272237 31.272237l540.177759 0 0 205.788923c0 171.874509-139.828652 311.708278-311.703161 311.708278S131.775232 757.627257 131.775232 585.752748L131.775232 348.69261c0-17.270339-13.996782-31.272237-31.272237-31.272237s-31.272237 14.001899-31.272237 31.272237l0 237.061161c0 206.364021 167.894871 374.252753 374.257869 374.252753 182.992731 0 335.62192-132.051525 367.870392-305.844733 28.64234-5.940292 58.462506-20.678972 82.358753-41.412179 39.588647-34.351366 61.394279-82.888825 61.394279-136.672776C955.113073 386.300137 883.140878 318.514287 787.392164 317.513494zM817.6984 587.273381c0.002047-0.509606 0.038886-1.010003 0.038886-1.520633L817.737286 384.201335c40.739866 10.68434 74.831312 41.745776 74.831312 91.874477C892.568598 537.579585 853.000418 573.089333 817.6984 587.273381z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <path
        d="M227.618091 263.46246c5.608741 4.163833 12.144598 6.173606 18.639522 6.173606 9.54847 0 18.975167-4.357238 25.112957-12.612249L377.290949 114.563222c10.311857-13.859659 7.421017-33.450856-6.433526-43.757596-13.854543-10.281157-33.43039-7.43125-43.75248 6.438643L221.184565 219.704864C210.871685 233.564523 213.763548 253.15572 227.618091 263.46246z"
        fill={getIconColor(color, 4, '#333333')}
      />
      <path
        d="M415.515528 263.091c5.700839 4.412496 12.43931 6.545066 19.127639 6.545066 9.344832 0 18.588357-4.168949 24.746614-12.129248l53.800323-69.491701c10.576893-13.656021 8.072863-33.298384-5.578042-43.869137-13.661138-10.576893-33.298384-8.067746-43.874253 5.583159l-53.800323 69.491701C399.360594 232.876861 401.864624 252.519224 415.515528 263.091z"
        fill={getIconColor(color, 5, '#333333')}
      />
      <path
        d="M577.841567 263.091c5.700839 4.412496 12.43931 6.545066 19.127639 6.545066 9.344832 0 18.588357-4.168949 24.746614-12.129248l53.800323-69.491701c10.576893-13.656021 8.072863-33.298384-5.578042-43.869137-13.661138-10.576893-33.298384-8.067746-43.874253 5.583159l-53.800323 69.491701C561.686632 232.876861 564.190663 252.519224 577.841567 263.091z"
        fill={getIconColor(color, 6, '#333333')}
      />
    </svg>
  );
};

IconIcon.defaultProps = {
  size: 36,
};

export default IconIcon;
