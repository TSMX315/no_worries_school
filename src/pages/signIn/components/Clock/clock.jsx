/*
 * @Author: TSMX
 * @Date: 2022-04-09 18:09:46
 * @LastEditTime: 2022-04-10 21:40:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\signIn\components\Clock\clock.jsx
 */
import { View,Image,Text,Switch,ScrollView} from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import { useState,useContext} from 'react'
import {SignInContext,UPDATE_SIGN} from '../../../../reducer/state'
import IconFont from '../../../../components/Iconfont'
import './clock.less'

export default function Clock(){
  const className = 'clock';
  const {windowHeight} = Taro.getSystemInfoSync();
  const topImg = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F0024uKvxgy6Rr0IpgMQ4c%26690&refer=http%3A%2F%2Fs13.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652101264&t=e358c54af59b6e8c176a5b97ab533eb1'
  const [signDays,setSignDays] = useState(0);
  // const [signState,setSignState] = useState(false);
  const {isSign,dispatch} = useContext(SignInContext)
  const [clockData,setClockData] = useState([]);
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const date = month + '.' + day;
  const [coin,setCoin] = useState(0);

 useReady(() => {
     getClockData();
    // let params = getCurrentInstance().router.params;
   
  })
  const handleSign = () => {
    dispatch({type:UPDATE_SIGN,isSign:true});
      Taro.showToast({
        title: '签到成功',
        icon: 'success',
        duration: 2000,
        success: function (){     
          setSignDays(1);
          setCoin(coin+9); 
          clockData.forEach(ele => {     
            ele.hasSign = ele.date === date? 'true':'false';
          })
          setClockData([...clockData])  
        }
      })    
      
  }
  const SwitchChange = () => {
    console.log(clockData[0].hasSign);
  }
  const getClockData = () => {
    Taro.request(
          {
            url:`https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/clock`,
            success: function (res) {
              // console.log(res.data)
              setClockData(res.data);
            }
          }
          )
  }
  return (
    <View className={className}>
      <View style={{height:`${windowHeight/3.5}px`}} className={`${className}__top`}>
          <Image src={topImg} style={{width:'100%', height:'100%'}} />
      </View>
      <View 
        className={`${className}__content`}
        style={{position: 'absolute',top:`${windowHeight/3.9}px`,left:'0'}}
      >
        <View className={`${className}__content-top`}>
            <View className={`${className}__content-top-days`}>
              <View className={`${className}__content-top-days-text`}>
                <Text>已连续签到&nbsp;</Text>
                <Text className={`${className}__content-top-days-text-num`}>{signDays}&nbsp;</Text>天
              </View>
              <View className={`${className}__content-top-days-remind`}>
                <Text>签到提醒&nbsp;</Text>
                <Switch onChange={SwitchChange} color='#fd7109' />
              </View>
          </View>
          <View className={`${className}__content-top-coin`}>我的积分{coin},明日签到可得{coin+9}积分</View>
        </View>
         <ScrollView className={`${className}__content-scroll`} scrollX enableFlex>
              {
              clockData.map((item,index) => {
              return (
              <View key={item.id} className={`${className}__content-scroll-sub`}>
                <View className={`${className}__content-scroll-sub-top`} style={{ backgroundColor:item.hasSign?'#fff5d2':'#f7f7f7',color:item.hasSign?'#fd7109':'#bdbdbd'}}>
                  {item.id ===  clockData.length?
                    (
                    <>
                    <View>-{item.id}-</View>
                    <View className={`${className}__content-scroll-sub-top-icon`}>
                      <IconFont name='icon-liwu-' size={60} />
                    </View>
                    </>
                    ):(
                      <>
                        <View>-{item.id}-</View>
                         {item.hasSign?
                          (
                          <View className={`${className}__content-scroll-sub-top-icon`}>
                            <IconFont name='icon-gougou' size={50} color='#06C484' />
                          </View>
                          ):(
                          <View className={`${className}__content-scroll-sub-top-icon`}>
                            <IconFont name='icon-qiandaojinbixin' size={50} />
                          </View>
                          )
                          }
                        <View className={`${className}__content-scroll-sub-top-coin`}>+{coin+index*9}</View>
                      </>
                    )
                  }  
                </View>
                <View className={`${className}__content-scroll-sub-bottom`}>{item.date === date ? '今日':`${item.date}`}</View>
              </View>
              )
              })
              }
        </ScrollView>
        <View className={`${className}__content-btn`} onClick={handleSign}>{isSign?'签到成功，分享我的成就':'立即签到'}</View>
      </View>
    </View>
  )
}