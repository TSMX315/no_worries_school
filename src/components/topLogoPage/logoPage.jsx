/*
 * @Author: TSMX
 * @Date: 2022-02-26 16:26:06
 * @LastEditTime: 2022-03-19 09:50:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\components\topLogoPage\logoPage.jsx
 */
import { View,Image } from "@tarojs/components";
import Taro from '@tarojs/taro'
import {useContext} from 'react'
import {SignInContext,UPDATE_SIGN} from '../../reducer/state'
import IconFont from '../Iconfont';
import appLogo from '../../static/logo/wuyou.png'
import './logoPage.less'

export default function LogoPage({isHomePage,backgroundColor}){
  const className ='navigator';
  const {isSign,dispatch} = useContext(SignInContext)
  const {top,height,width} = Taro.getMenuButtonBoundingClientRect();
  // const {screenWidth} = Taro.getSystemInfoSync();
  const toSignIn = () => {
    Taro.navigateTo({
      url:`/pages/signIn/sign?isSign=${isSign}`,
      success: function(){
        dispatch({type:UPDATE_SIGN,isSign:true});
      }
    }) 
  }
  return (
      <View
        className={className}
        style={{
          width: '100%',
          height:`${height}px`,
          paddingTop:`${top}px`,
          backgroundColor
        }}
      >
        <View className={`${className}__logo`}>
            <Image src={appLogo} className={`${className}__logo-img`} />
        </View>
        {isHomePage? (
          <View className={`${className}__home`} style={{marginRight:`${width+25}px`}}>
          {isSign? (
            <View
              className={`${className}__home-icon`}
              onClick={toSignIn}
            >
            <IconFont name='icon-qiandao3' size={55} />
          </View>
          ):(
          <View
            className={`${className}__home-icon`}
            onClick={toSignIn}
          >
            <View  className={`${className}__home-icon-dots`}></View>
            <IconFont name='icon-qiandao2' size={55} />
          </View>
          )
          }
        </View>
        ):(
        <View style={{display:'none'}}></View>
        )}
      </View>
  )
}