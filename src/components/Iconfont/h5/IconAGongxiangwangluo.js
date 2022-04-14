/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconAGongxiangwangluo = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M603.698637 419.495841m-369.497076 0a369.497076 369.497076 0 1 0 738.994152 0 369.497076 369.497076 0 1 0-738.994152 0Z"
        fill={getIconColor(color, 0, '#B8D9FF')}
      />
      <path
        d="M334.79115 416.511381c0-190.590588 134.083203-347.449932 306.255525-367.322166a373.222616 373.222616 0 0 0-39.841129-2.17491c-204.083085 0-369.509158 165.434128-369.509159 369.493048s165.422046 369.48902 369.505131 369.489021c13.460277 0 26.743338-0.761219 39.845157-2.162828-172.172322-19.876261-306.255525-176.72755-306.255525-367.322165z"
        fill={getIconColor(color, 1, '#FFFFFF')}
        opacity=".21"
      />
      <path
        d="M603.698637 805.103361c-212.625648 0-385.60752-172.981872-385.60752-385.60752S391.072989 33.88832 603.698637 33.88832s385.60752 172.981872 385.60752 385.607521-172.981872 385.60752-385.60752 385.60752z m0-738.994151c-194.859856 0-353.386631 158.526775-353.386631 353.386631s158.526775 353.386631 353.386631 353.386631 353.386631-158.526775 353.386631-353.386631-158.526775-353.386631-353.386631-353.386631z"
        fill={getIconColor(color, 2, '#6E6E96')}
      />
      <path
        d="M607.883325 44.807174c-17.512053 0-34.69787 1.300918-51.549395 3.661099 179.639513 25.092018 317.93157 179.268973 317.93157 365.835977 0 186.571032-138.296084 340.74396-317.93157 365.835977a371.829063 371.829063 0 0 0 51.549395 3.653043c204.054892 0 369.484993-165.41399 369.484993-369.493048 0-204.062947-165.430101-369.493048-369.484993-369.493048z"
        fill={getIconColor(color, 3, '#6E6E96')}
        opacity=".15"
      />
      <path
        d="M598.80509 56.978615s-78.482031 82.336455-78.482032 359.802616c-0.567893 108.254133 12.529898 295.598466 78.482032 361.550599 0 0-206.189526-46.535019-206.189526-361.546572 0-339.76525 206.189526-359.806643 206.189526-359.806643z"
        fill={getIconColor(color, 4, '#FFFFFF')}
        opacity=".21"
      />
      <path
        d="M611.914964 804.994615c-97.419859 0-173.731007-169.804087-173.731008-386.578174 0-100.839301 16.863608-195.363307 47.489564-266.164684 32.361856-74.82496 77.197223-116.03145 126.241444-116.03145 49.036166 0 93.863478 41.20649 126.225334 116.03145 30.621928 70.805404 47.485536 165.329411 47.485535 266.160656 0 216.778116-76.303093 386.582202-173.710869 386.582202z m0-736.553419c-34.88314 0-70.116683 35.209377-96.670723 96.598227-28.914221 66.854318-44.839395 156.835179-44.839395 253.37299 0 211.969148 73.169612 354.357285 141.510118 354.357286 68.332451 0 141.48998-142.392165 141.48998-354.357286 0-96.533784-15.925175-186.518673-44.839395-253.37299-26.550013-61.388849-61.779528-96.598226-96.650585-96.598227z"
        fill={getIconColor(color, 5, '#6E6E96')}
      />
      <path
        d="M602.81659 563.366139c-100.53723 0-195.29081-14.012059-266.805074-39.462534-76.73002-27.307204-118.983689-65.730614-118.983689-108.201774 0-42.467132 42.257696-80.89457 118.983689-108.201774 71.510236-25.446447 166.263816-39.462534 266.805074-39.462534 100.53723 0 195.286782 14.016087 266.801047 39.462534 76.73002 27.303176 118.987717 65.730614 118.987716 108.201774s-42.257696 80.89457-118.987716 108.201774c-71.510236 25.446447-166.263816 39.462534-266.801047 39.462534z m0-263.107727c-208.364436 0-353.567874 60.841094-353.567873 115.443419s145.203438 115.443419 353.567873 115.443419c208.360408 0 353.567874-60.841094 353.567874-115.443419S811.181026 300.258412 602.81659 300.258412z"
        fill={getIconColor(color, 6, '#6E6E96')}
      />
      <path
        d="M522.91684 759.0436l85.433688 41.005109 315.180712-176.62686s40.719149-18.627702 63.499317 4.877437c22.784196 23.501111 1.929226 62.613243 1.929226 62.613243l-281.848202 280.120357c-54.102901 64.792181-135.996319 24.459683-135.996318 24.459682l-260.252151-100.521119-132.109673-2.533368 0.012082-212.915636 125.178155-0.008055 305.373479-103.300171s40.0264-14.704808 57.179995 9.81126c22.236441 31.789935-3.282503 56.918201-3.282503 56.918201l-140.297807 116.09992"
        fill={getIconColor(color, 7, '#FFDDC9')}
      />
      <path
        d="M627.960967 1024c-32.269221 0.004028-58.400362-11.454526-63.20933-13.697906l-257.042144-99.280615-129.26618-2.476981a16.110445 16.110445 0 0 1-15.800319-16.106417l0.012083-212.915636a16.110445 16.110445 0 0 1 16.110444-16.110445l122.527987-0.008055 302.699145-102.397986c2.331987-0.833716 15.457972-5.280198 30.839418-5.280198 19.711129 0 35.225487 7.281921 44.867589 21.056351 23.766933 33.976928 7.004016 65.642007-5.179508 77.636233-0.330264 0.322209-0.676639 0.632335-1.031069 0.92635l-120.908887 100.065999 55.198411 26.493627 307.878653-172.538835c0.382623-0.217491 0.773301-0.414844 1.172035-0.596086 1.897005-0.865936 19.078794-8.466039 39.108104-8.466039 17.270397 0 32.023536 5.803788 42.660457 16.783056 24.435517 25.204791 14.374544 63.024059 4.575367 81.402049a16.041975 16.041975 0 0 1-2.859604 3.846369l-281.336695 279.612877c-23.247372 27.516639-54.703015 42.052288-91.015957 42.052288z m-433.101111-147.370292l116.305327 2.231296c1.880894 0.036249 3.741651 0.402761 5.497689 1.0794l260.252151 100.521119c0.443037 0.173187 0.886074 0.366513 1.313001 0.579976 0.177215 0.08458 22.482126 10.745667 49.728915 10.741639 27.097768 0 49.563783-10.455679 66.781821-31.077047 0.318181-0.386651 0.656501-0.753163 1.01093-1.099538l279.858562-278.146827c2.960294-6.685835 11.792845-29.627108-0.149022-41.94757-4.555228-4.700222-10.94302-6.983878-19.525859-6.983878-11.764652 0-22.860721 4.34982-25.241039 5.34464l-314.471852 176.232154a16.090307 16.090307 0 0 1-14.845774 0.47123l-85.433688-41.005109a16.098362 16.098362 0 0 1-3.302642-26.932636l139.592976-115.527998c3.056957-3.33889 13.963728-17.407335 1.059261-35.853795-1.26467-1.80437-5.119094-7.306087-18.466597-7.306087-10.282491 0-19.868206 3.350972-19.960841 3.387221a11.12829 11.12829 0 0 1-0.390678 0.136939l-305.377506 103.300171c-1.663403 0.563866-3.407359 0.849826-5.163397 0.849826l-109.067711 0.008056-0.004027 180.996818z"
        fill={getIconColor(color, 8, '#6E6E96')}
      />
      <path
        d="M986.684183 645.11859l-290.386738 228.631376c-54.102901 64.788153-136.000346 24.46371-136.000346 24.46371L300.048976 797.688529l-132.105646-2.533368-0.004027 90.069469 132.109673 2.533367 260.252151 100.52112s81.897445 40.328471 136.000346-24.459683l281.848202-280.120356c-0.004028 0 10.14958-19.070739 8.534508-38.580488z m-438.522276 127.908876l3.359028-2.271573-39.410176-18.909634 140.29378-116.11603s20.194442-19.908482 8.95338-46.716262l-167.230444 111.959535 17.99134 62.041322 36.043092 10.012642z"
        fill={getIconColor(color, 9, '#6E6E96')}
        opacity=".15"
      />
      <path
        d="M23.915955 630.985703h196.406458V934.003029H23.915955z"
        fill={getIconColor(color, 10, '#9FBFFF')}
      />
      <path
        d="M220.322413 950.113473H23.915955a16.110445 16.110445 0 0 1-16.110445-16.110444v-303.017326a16.110445 16.110445 0 0 1 16.110445-16.110445h196.406458a16.110445 16.110445 0 0 1 16.110445 16.110445V934.003029a16.110445 16.110445 0 0 1-16.110445 16.110444z m-180.296013-32.220889h164.185569v-270.796437H40.0264V917.892584z"
        fill={getIconColor(color, 11, '#6E6E96')}
      />
      <path
        d="M191.806926 630.985703h72.497001V934.003029h-72.497001z"
        fill={getIconColor(color, 12, '#FFFFFF')}
      />
      <path
        d="M264.303927 950.113473h-72.497001a16.110445 16.110445 0 0 1-16.110444-16.110444v-303.017326a16.110445 16.110445 0 0 1 16.110444-16.110445h72.497001a16.110445 16.110445 0 0 1 16.110445 16.110445V934.003029a16.110445 16.110445 0 0 1-16.110445 16.110444z m-56.386556-32.220889h40.276112v-270.796437h-40.276112V917.892584z"
        fill={getIconColor(color, 13, '#6E6E96')}
      />
      <path
        d="M23.915955 853.773014h228.627348v60.414168H23.915955z"
        fill={getIconColor(color, 14, '#6E6E96')}
        opacity=".15"
      />
    </svg>
  );
};

IconAGongxiangwangluo.defaultProps = {
  size: 36,
};

export default IconAGongxiangwangluo;
