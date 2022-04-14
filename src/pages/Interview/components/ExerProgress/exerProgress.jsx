/*
 * @Author: TSMX
 * @Date: 2022-03-29 15:20:37
 * @LastEditTime: 2022-04-05 15:22:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\Interview\ExerProgress\exerProgress.jsx
 */
import { View,Text} from '@tarojs/components'
import Taro from '@tarojs/taro';
import IconFont from '../../../../components/Iconfont'
import './exerProgress.less'

export default function ExerProgress({itemList,lineBackground,timeIcon,iconColor,actionBackground}){
  const className = 'progress';
  const toExercisePage = (value) => {
    Taro.navigateTo({url:`/pages/Interview/Exercise/exercise?testName=${value}&testId=1`});
  }
  return (
    <View className={className}>
      {
        itemList.map(item => {
          return (
            <View className={`${className}__timeline`}  key={item.id}>
              <View className={`${className}__timeline-left`}>
                <View className={`${className}__timeline-left-icon`}>
                  <IconFont name={timeIcon} size={35} color={iconColor} />
                </View>
                {item.id != itemList.length?
                  (
                    <View style={{backgroundImage:lineBackground}} className={`${className}__timeline-left-line`}></View>
                  ):(
                    <View style={{display: 'none'}}></View>
                  )
                }
              </View>
              <View className={`${className}__timeline-right`}>
                <View className={`${className}__timeline-right-content`}>
                  <Text>{item.type}</Text>
                  <Text className={`${className}__timeline-right-content-count`}>共&nbsp;{item.total}&nbsp;题 | 已练习&nbsp;{item.haveExerCount}&nbsp;题</Text>
                </View>
                <View style={{backgroundColor:actionBackground}} className={`${className}__timeline-right-action`} onClick={() => toExercisePage(item.type)}>
                  练习
                </View>
            </View>
        </View>
          )
        })}
      
    </View>
  )
}