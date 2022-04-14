import { View,Text,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import {useCallback,useState} from 'react'
import TopBarNavigator from '../../components/topNavigator/index.weapp'
import IconFont from '../../components/Iconfont';
import loginLogo from '../../static/logo/login.jpg'


import './login.less'

export default function Login(){
  const saying = [
    {id:1, title:'成'},
    {id:2, title:'为'},
    {id:3, title:'更'},
    {id:4, title:'好'},
    {id:5, title:'的'},
    {id:6, title:'自'},
    {id:7, title:'己'},
  ]
  // /* eslint-disable */
  // let [userInfo,setUserInfo] = useState({});
  let [userName,setUserName] = useState('立即登录');
  let [avatarUrl,setAvatarUrl] = useState('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuserimg.yingyonghui.com%2Fhead%2F11%2F1524972210747%2F9236211.png-thumb&refer=http%3A%2F%2Fuserimg.yingyonghui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649664399&t=90bddff7909c75cd4b68ca2d341533ca')
  // const [hasUserInfo,setHasUserInfo] = useState(false);
  const handleClick = useCallback(() => {
    Taro.getUserProfile({
  desc: '用于保存用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  success: (res) => {
    // console.log(res);
    // console.log(userInfo);
    // setUserInfo(userInfo = res.userInfo)
    setAvatarUrl(avatarUrl = res.userInfo.avatarUrl);
    setUserName(userName = res.userInfo.nickName)
    // console.log(userInfo);
    Taro.reLaunch({url:'/pages/mine/mine?userName='+userName +'&avatarUrl='+avatarUrl})
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  },
   fail: (err) => {
    console.log(err);
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  }
})
  })
  const className = 'login';
  return (
    <View className={className}>
      <TopBarNavigator title='登录' backgroundColor='#fff' />
      <View className={`${className}__start`}>
        <Image src={loginLogo} className={`${className}__start-img`} />
         {
           saying.map(item => {
             return (
               <>
                <Text className={`${className}__start-call`} key={item.id}>{item.title}</Text>
               </>
             )
           })
         }
      </View>
      <View className={`${className}__container`}>
     <View className={`${className}__container-button`}>
      <View className={`${className}__container-button-button1`} onClick={handleClick}>
        <IconFont name='icon-weixin' color='#fff' />&nbsp;&nbsp;
        <Text>微信登录</Text>
      </View>
      <View className={`${className}__container-button-button2`}>
        <IconFont name='icon-shouji' color='#fff' />&nbsp;&nbsp;
        <Text>手机号码登录</Text>
      </View>
     </View>
     <View className={`${className}__container-protocol`}>
      <Text>进入无忧校园将视为您同意</Text>
      <Text>无忧校园的使用条款及隐私协议</Text>
     </View>
     </View>
    </View>
  )
}