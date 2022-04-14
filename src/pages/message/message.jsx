/*
 * @Author: your name
 * @Date: 2022-02-25 12:48:07
 * @LastEditTime: 2022-03-04 18:52:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\message\message.jsx
 */
import { View, Text} from '@tarojs/components'
import {useCallback} from 'react'
import Taro from '@tarojs/taro'
import { AtAvatar } from 'taro-ui'
import LogoPage from '../../components/topLogoPage/logoPage'
import awatar from '../../static/logo/youmoyu.png'
import './message.less'

export default function Message(){
  const handleClick = useCallback(() => {
    Taro.navigateTo({url: '/pages/messageDetail/messageDetail?id=tsmx'})
  },[])
  return (
    <View>
      <LogoPage backgroundColor='#fff' /> 
      <View className='to-message-detail' onClick={handleClick}>
        <AtAvatar image={awatar} circular='true'></AtAvatar>
        <View className='to-message-content'>
        <View className='to-message-title'>
          <Text className='username'>无忧校园</Text>
          <Text>20:00</Text>
        </View>
        <Text>来自无忧校园官方的开发者消息</Text>
       </View>
      </View>
    </View>
  )
}