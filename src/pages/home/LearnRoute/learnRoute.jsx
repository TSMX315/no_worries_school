/*
 * @Author: your name
 * @Date: 2022-04-08 14:16:04
 * @LastEditTime: 2022-04-08 14:16:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\LearnRoute\learnRoute.jsx
 */
import { View,Text} from '@tarojs/components'
import Taro,{getCurrentInstance} from '@tarojs/taro'
import { useState,useEffect } from 'react';
import IconFont from '../../../components/Iconfont'
import './learnRoute.less'

export default function LearnRoute(){
  const className = 'route';
  const [routeData,setRouteData] = useState({});
  const [stageList,setStageList] = useState([])
  useEffect(() => {
    let params = getCurrentInstance().router.params;
    console.log(params);
    getRouteData();
  },[]);
  const toReadLearnMaterial = (value) => {
    Taro.navigateTo({url:'/pages/article/article?id=' + value});
  }

  const getRouteData = () => {
    Taro.request({
        url:'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/route/front-end'
    }).then(res=>{
      // console.log(res.data);
        setRouteData(res.data);
        setStageList(res.data.itemList)
    })
  }
  return (
     <View className={className}>
      {
        stageList.map(item => {
          return (
            <View className={`${className}__timeline`}  key={item.id}>
              <View className={`${className}__timeline-left`}>
                <View className={`${className}__timeline-left-icon`}>
                  <IconFont name={routeData.timeIcon} size={35} color={routeData.iconColor} />
                </View>
                {item.id != stageList.length?
                  (
                    <View style={{backgroundImage: routeData.lineBackground}} className={`${className}__timeline-left-line`}></View>
                  ):(
                    <View style={{display: 'none'}}></View>
                  )
                }
              </View>
              <View className={`${className}__timeline-right`}>
                <View className={`${className}__timeline-right-content`}>
                  <View className={`${className}__timeline-right-content-top`}>
                    <Text userSelect>{item.stageCName}&nbsp;</Text>
                    <Text userSelect className={`${className}__timeline-right-content-top-title`}>{item.stageEName}</Text>
                  </View>
                  <Text userSelect space='nbsp' className={`${className}__timeline-right-content-text`}>{item.subText}</Text>
                </View>
                <View style={{backgroundColor:`${routeData.actionBackground}`}} className={`${className}__timeline-right-action`} onClick={() => toReadLearnMaterial(item.id)}>
                  <View>{item.action}&nbsp;</View>
                  <IconFont name='icon-70BasicIcons-all-17' size={38} color='#fff' />
                </View>
            </View>
        </View>
          )
        })}
      
    </View>
  )
}