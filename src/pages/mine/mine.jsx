import { View, Text, Image} from '@tarojs/components'
import Taro,{useReady} from '@tarojs/taro'
import {useState,useCallback} from 'react'
import IconFont from '../../components/Iconfont';
import './mine.less'

export default function Mine(){
  /* eslint-disable */
  const inst = Taro.getCurrentInstance();
  // var isToLoginPage = false;
  let [userName,setUserName] = useState('立即登录');
  let [avatarUrl,setAvatarUrl] = useState('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuserimg.yingyonghui.com%2Fhead%2F11%2F1524972210747%2F9236211.png-thumb&refer=http%3A%2F%2Fuserimg.yingyonghui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649664399&t=90bddff7909c75cd4b68ca2d341533ca')
  const [firstContent,setFirstContent] = useState('我的交易')
  const [secondContent,setSecondContent] = useState('我的内容');
  const topContent = [
    {id:1, title:'我的笔记',num:99,unit:''},
    {id:2, title:'我关注的人',num:70,unit:''},
    {id:2, title:'关注我的人',num:30,unit:''},
    {id:3, title:'今日学习',num:99,unit:'分钟'}
  ]
  const myContent = [
    {id:1, title:'笔记',icon:'icon-a-yijianfankuijibiji'},
    {id:2, title:'错题集',icon:'icon-cuotiji'},
    {id:3, title:'收藏',icon:'icon-shoucang'},
    {id:4, title:'签到',icon:'icon-qiandao'},
    {id:5, title:'设置',icon:'icon-settings'},
  ]
    const myDeal = [
    {id:1, title:'发布',icon:'icon-a-gongxiangwangluo',color:''},
    {id:2, title:'卖出',icon:'icon-maichu',color:'#fd7109'},
    {id:3, title:'买到',icon:'icon-womaidaode',color:''},
    {id:4, title:'活动',icon:'icon-AApay',color:'#fd7109'},
  ]
  const myOther = [
    {id:1, title:'赞赏支持',icon:'icon-zanshanggongneng',rightArrow:'>',color:'#fd7109'},
    {id:2, title:'问题反馈',icon:'icon-wentifankui1',rightArrow:'>',color:'#fd7109'},
  ]
  useReady(() => {
      let params = inst.router.params;
      // console.log(params);
      if(params.userName){
         setUserName( userName = params.userName)
        }else{
          setUserName( userName = '立即登录')
        }
         if(params.avatarUrl){
          setAvatarUrl(avatarUrl = params.avatarUrl)
        }else{
          setAvatarUrl(avatarUrl = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuserimg.yingyonghui.com%2Fhead%2F11%2F1524972210747%2F9236211.png-thumb&refer=http%3A%2F%2Fuserimg.yingyonghui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649664399&t=90bddff7909c75cd4b68ca2d341533ca')
        }
  })
  // 判断用户是否登录
  const isLogin = useCallback(() => {
    if(userName === '立即登录'){
      Taro.navigateTo({url:'/pages/Login/login'});
    }else{
      Taro.navigateTo({url:'/pages/Setting/setting'})
    }
  })
  const handleClickSetting = () => {
    Taro.navigateTo({url:'/pages/Setting/setting'})
  }
  const className = 'person-center';
  const {windowHeight} = Taro.getSystemInfoSync();
  // const {top} = Taro.getMenuButtonBoundingClientRect()
  const userInfoHeight = windowHeight / 4;
  return (
    <View className={className} style={{height:`${windowHeight}px`}}>
       {/* 用户信息部分 */}
       <View className={`${className}__user`} style={{height:`${userInfoHeight}px`}}>
         <View className={`${className}__user-info`}>
          <View className={`${className}__user-info-avatar`} onClick={handleClickSetting}>
            <Image className={`${className}__user-info-avatar-desc`} src={avatarUrl} />
          </View>
          <View className={`${className}__user-info-name`}>
            <Text className={`${className}__user-info-name-text`} onClick={isLogin}>{userName}</Text>
            <View className='at-icon at-icon-settings' onClick={handleClickSetting}></View>
          </View>
         </View>
         <View className={`${className}__user-content`}>
            {
              topContent.map(item => {
                return (
                  <View key={item.id} className={`${className}__user-content-wrapper`}>
                    {/* <AtIcon value={item.icon} size='30' color='#fff'></AtIcon> */}
                     <View>
                       <Text className={`${className}__user-content-wrapper-num`}>{item.num}</Text>
                       <Text className={`${className}__user-content-wrapper-unit`}>{item.unit}</Text>
                       </View>
                    <Text className={`${className}__user-content-wrapper-title`}>{item.title}</Text>
                  </View>
                )
              })
            }
         </View>
         </View>
       {/* 用户信息部分 */}
       {/* 用户内容部分 */}
      <View className={`${className}__content`}>
        <View className={`${className}__content-desc`} style={{height:'120px'}}>
          <Text className={`${className}__content-desc-title`}>{firstContent}</Text>
          <View className={`${className}__content-desc-container`}>
          {
            myDeal.map(item => {
              return (
                <View className={`${className}__content-desc-container-content`} key={item.id}>
                  <IconFont name={item.icon} size={60} color={item.color}/>
                  <Text>{item.title}</Text>
                </View>
              )
            })
          }
          </View>
        </View>
         <View className={`${className}__content-desc`} style={{height:'180px'}}>
          <Text className={`${className}__content-desc-title`}>{secondContent}</Text>
          <View className={`${className}__content-desc-container`}>
          {
            myContent.map(item => {
              return (
                <View className={`${className}__content-desc-container-content`} key={item.id} onClick={handleClickSetting}>
                  <IconFont name={item.icon} size={60} color='#fc8500'/>
                  <Text>{item.title}</Text>
                </View>
              )
            })
          }
          </View>
        </View>
        <View className={`${className}__content-others`}>
          {
            myOther.map((item) => {
              return (
                <View className={`${className}__content-others-wrapper`} key={item.id}>
                  <IconFont name={item.icon} color={item.color}/>
                  <View className={`${className}__content-others-wrapper-text`}>
                  <Text>{item.title}</Text>
                  <Text>{item.rightArrow}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
        </View>
        {/* 用户内容部分 */}
    </View>
  )
}