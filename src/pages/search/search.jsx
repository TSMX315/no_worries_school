/*
 * @Author: TSMX
 * @Date: 2022-03-19 10:55:10
 * @LastEditTime: 2022-04-11 12:18:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\search\search.jsx
 */
import { View,Swiper,SwiperItem,Text} from "@tarojs/components";
import {useState} from 'react'
import { AtSearchBar } from 'taro-ui'
import Taro, { useReady } from '@tarojs/taro'
import IconFont from "../../components/Iconfont";
import './search.less'

export default function Search(){
  const className = 'search';
  const [searchValue,setSearchValue] = useState('');
  const [searchData,setSearchData] = useState([]);
  // const [searchContent,setSearchContent] = useState([]);
  const [currentTab,setCurrentTab] = useState(0);
  const searchChange = (value) => {
    setSearchValue(value)
    console.log(value);
  }
  useReady(() => {
       getSearchData();
  })
  const getSearchData = () => {
     Taro.request(
          {
            url:`https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/search`,
            success: function (res) {
              // console.log(res.data)
              setSearchData(res.data);
              // setSearchContent(res.data.list)
            }
          }
          )
  }
  const switchNav = (value) => {
    setCurrentTab(value-1);
  }
   const switchTab = (e) => {
     let cur = e.target.current;
   setCurrentTab(cur); 
  }
  return (
    <View className={className}>
      <>
         <AtSearchBar
           focus
           showActionButton
           placeholder='搜一下'
           value={searchValue}
           onChange={(value) => searchChange(value)}
         />
      </> 
      <View className={`${className}__nav`}>
        {
          searchData.map((item,index) => {
            return (
                  <View
                    key={item.id}
                    className={currentTab == index ? `${className}__nav-item active` :`${className}__nav-item`} 
                    onClick={() => switchNav(item.id)}
                  >
                      {item.searchType}
                    </View>
                  )
                })
              }
      </View>
        <Swiper className={`${className}__content`} current={currentTab} onChange={switchTab}>
                    {
                      searchData.map(item1 => {
                        return (
                          <SwiperItem key={item1.id} className={`${className}__content-list`}>
                            {
                              searchData[item1.id-1].list.map(item2 => {
                                return (
                                  <View className={`${className}__content-list-wrapper`} key={item2.id}>
                                    {item2.id === 1 || item2.id === 2 || item2.id === 3?
                                    (
                                    <>
                                    <View className={`${className}__content-list-wrapper-sequence`}>{item2.id}</View>
                                    <View className={`${className}__content-list-wrapper-text`}>
                                      <Text className={`${className}__content-list-wrapper-text-title`}>{item2.title}</Text>
                                      <Text className={`${className}__content-list-wrapper-text-desc`}>{item2.desc}</Text>
                                    </View>
                                    <View>
                                      <IconFont name='icon-resou' size={40} />
                                    </View>
                                    </>
                                      ):(
                                    <>
                                    <View className={`${className}__content-list-wrapper-sequence`}>{item2.id}</View>
                                    <View className={`${className}__content-list-wrapper-text`}>
                                      <Text className={`${className}__content-list-wrapper-text-title`}>{item2.title}</Text>
                                      <Text className={`${className}__content-list-wrapper-text-desc`}>{item2.desc}</Text>
                                    </View>
                                    </>
                                      )
                                    }
                                </View>
                                )
                              })
                            }
                          </SwiperItem>
                        )
                      })
                    }
          </Swiper>
    </View>
  )
}