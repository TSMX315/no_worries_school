/*
 * @Author: TSMX
 * @Date: 2022-04-06 09:41:11
 * @LastEditTime: 2022-04-09 10:58:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\ShowList\showList.jsx
 */
import {View,Text, Image} from '@tarojs/components'
import Taro,{getCurrentInstance} from '@tarojs/taro';
import { useEffect, useState } from 'react';


import IconFont from '../../../components/Iconfont'
import './showList.less';

export default function ShowList(){
  const className = 'list';
  const {windowHeight} = Taro.getSystemInfoSync();
  const [listData,setListData] = useState([])
  const {top,height} = Taro.getMenuButtonBoundingClientRect();
  useEffect(() => {
    let params = getCurrentInstance().router.params;
    getListData(params.listType)
  },[])
  const getListData = (value) => {
    Taro.request(
          {
            url:`https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/list/${value}`,
            success: function (res) {
              // console.log(res.data)
              setListData(res.data)
            }
          }
          )
  }
  const goBack = () => {
    Taro.navigateBack();
  }
  const goDescPage = (value) => {
    if(value === '阅读'){
        Taro.navigateTo({url:'/pages/article/article?id=tsmx'})
    }else if(value === '查看详情'){
      Taro.navigateTo({url:'/pages/home/BookDesc/bookDesc?id=book'})
    } 
  }
  return (
    <View className={className} style={{height:`${windowHeight}px`}}>
      <View style={{
        width:'100%',
        height:height,
        position: 'fixed',
        paddingTop:`${top+2}px`,
        paddingLeft:'10px',
        zIndex:9,
        backgroundColor:'#008B8B'
        }}
      >
        <View onClick={goBack}>
          <IconFont name='icon-youjiantou1' size={50} color='#fff' />
        </View>  
      </View>
        <View style={{height:`${windowHeight/3.4}px`,backgroundColor:'#008B8B'}} className={`${className}__top`}>
          <Text className={`${className}__top-title`}>书籍推荐列表</Text>
        </View>
        <View
          style={{position: 'absolute',top:`${windowHeight/3.7}px`,left:'0'}}
          className={`${className}__content`} 
        >
          <View className={`${className}__content-top`}>
            <Text className={`${className}__content-top-data`}>以近7天学习数据为准</Text>
            <Text>每日更新</Text>
          </View>
          {
            listData.map(item => {
              return (
                <View key={item.id} className={`${className}__content-list`}>
                  <View className={`${className}__content-list-left`}>
                    <Image src={item.bookImg} className={`${className}__content-list-left-img`} />
                  </View>
                  <View className={`${className}__content-list-right`}>
                    <View className={`${className}__content-list-right-text`}>
                      <Text className={`${className}__content-list-right-text-name`}>{item.bookName}</Text>
                      <Text className={`${className}__content-list-right-text-intro`}>{item.bookIntro}</Text>    
                    </View>
                    <View className={`${className}__content-list-right-action`}>
                      {item.action == '阅读'?
                        (
                          <View className={`${className}__content-list-right-action-text`} onClick={() => goDescPage(item.action)}>
                            <IconFont name='icon-yuedu' size={26} color='#fd7109' />&nbsp;
                            <Text>{item.action}</Text>
                          </View>
                        ):(
                          <View className={`${className}__content-list-right-action-text`} onClick={() => goDescPage(item.action)}>{item.action}</View>
                        )
                      }
                      
                    </View>
                  </View>
               </View>
              )
            })
          }      
        </View>    
    </View>
  )
}