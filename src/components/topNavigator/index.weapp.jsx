import Taro from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import IconFont from '../Iconfont'
import './index.weapp.less'


export default function TopNavigator({title,children,style,backgroundColor,color,deltas}){
  const className ='top-navigator';
  const goToBack = () => {
    Taro.navigateBack({
    delta: deltas
})
  }
  const {top,height,width} = Taro.getMenuButtonBoundingClientRect();
  const {screenWidth} = Taro.getSystemInfoSync();
  return (
    <View className={className} style={{backgroundColor,color}}>
      <View
        className={`${className}__wrapper`}
        style={{
          paddingTop:`${top}px`,
          marginRight:`${width+20}px`,
          height:`${height}px`,
          lineHeight:`${height}px`,
          ...style
        }}
      >
        {title? (
          <View className={`${className}__wrapper__inner`}>
          <View className={`${className}__left`} onClick={goToBack}>
            <IconFont name='icon-youjiantou1' size='40' />
          </View>
          <View
            className={`${className}__title__wrapper`}
            style={{width:`${screenWidth - 2 * (width + 20)}px`}}
          >
            <Text>{title}</Text>
          </View>
        </View>
        ):(
           <View>
             {children}
           </View>
        )}
        
      </View>
    </View>
  )
}