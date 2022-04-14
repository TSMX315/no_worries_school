/*
 * @Author: TSMX
 * @Date: 2022-03-19 22:19:20
 * @LastEditTime: 2022-03-20 13:05:21
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\signIn\sign.jsx
 */
import { View} from '@tarojs/components'
import {SignIn} from '../../reducer/state'
import Clock from './components/Clock/clock'

export default function ClockIn(){

  return (
    <View>
      <SignIn>
      <Clock />
      </SignIn>
    </View>
  )
}
