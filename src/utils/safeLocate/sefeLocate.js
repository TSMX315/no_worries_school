import Taro from '@tarojs/taro'

export function getTop() {
  const isWeapp = process.env.TARO_ENV === 'weapp';
  if (isWeapp) {
    const { top, height } = Taro.getMenuButtonBoundingClientRect();
    return {
      top: `${top}px`,
      height: `${height}px`
    };
  } else {
    const { statusBarHeight } = Taro.getSystemInfoSync();
    return {
      top: `${statusBarHeight}px`,
      height: '30px'
    };
  }
}
export function getBottom() {
  const isWeapp = process.env.TARO_ENV === 'weapp';
  if (isWeapp) {
    const { safeArea: { bottom }, screenHeight } = Taro.getSystemInfoSync();
    return screenHeight - bottom;
  } else {
    return 0;
  }
}