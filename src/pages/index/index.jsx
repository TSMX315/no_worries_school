/*
 * @Author: your name
 * @Date: 2022-02-23 17:16:48
 * @LastEditTime: 2022-03-21 13:59:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\index\index.jsx
 */
import {useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import './index.less'

export default function Index(){
  const className = 'start';
  const callText = '天道酬勤'
  const imgList = ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171214%2Ff197affb36e8465ab3102e0af05d5001.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650434118&t=4a29a793904aa533412ca8037dc116b4',
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201911%2F02%2F20191102055841_ntckv.thumb.700_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650424533&t=4c866364fbe869bbebcd8046b9e104ff',
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F13%2F20200213193954_M8XSL.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650424533&t=d6368b82a29d52d228fc2b2bebefb268',
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190807%2Fcfc020f63ff9494eab336ce74fcc958e.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650434303&t=791527a57235acada028e320c6927fa1',
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F16%2F20200216152940_zpuot.thumb.400_0.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650433858&t=e6f8fdf80c48e07464f7209075eb938a',
            ];
  const imgIndex = Math.floor(Math.random() * 5)
  const {screenWidth,screenHeight} = Taro.getSystemInfoSync();
  useEffect(() => {
     setTimeout(() => {
      Taro.switchTab({url: '/pages/home/discover'})
    },4000)
  },[])
  return (
    <View className={className}
      style={{width:screenWidth,
      height:screenHeight,
    backgroundImage:`url(${imgList[imgIndex]})`}}
    >
    <View className={`${className}__saying-container`} 
      style={{position:'fixed',top:`${screenHeight/4}px`,left:`${screenWidth/2.4}px`}}
    >
      {callText}
    </View>
     </View>
  )
}