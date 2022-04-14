/*
 * @Author: TSMX
 * @Date: 2022-02-25 12:35:49
 * @LastEditTime: 2022-04-11 15:02:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\discover.jsx
 */
import { View,ScrollView,Swiper,SwiperItem} from "@tarojs/components";
import {useState} from 'react'
import Taro from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'
import {SignIn} from '../../reducer/state'
import LogoPage from '../../components/topLogoPage/logoPage'
import Index from './components/index/index';
import Programmer from './components/programmer/programmer'
import Video from './components/videos/video'
import BooksRecommended from './components/books/books'
import Free from './components/freeResources/free'
import './discover.less'

export default function Discover(){
  const className = 'discover';
  const {windowHeight} = Taro.getSystemInfoSync();
  /* eslint-disable */
  let [searchValue,setSearchValue] = useState('');
  const [currentTab,setCurrentTab] = useState(0);
  const scrollLeftValue = 0;
    const topBarTitle = [
    {id:1,text:'首页'},
    {id:2,text:'程序员'},
    {id:3,text:'视频'},
    {id:4,text:'书籍推荐'},
    {id:5,text:'在线网站'},
  ]
  // 点击搜索框去往搜索详情页面
  const toSearchDetail = () => {
    Taro.navigateTo({url:'/pages/search/search'})
  }
    // 顶部标题导航栏点击切换内容功能
  const switchTab = (e) => {
    // console.log(e);
    let cur = e.target.current;
   setCurrentTab(cur); 
  }
   // 顶部标题导航栏点击切换功能
  const switchNav = (id) => {
    setCurrentTab(id-1);   
  }
  return (
    <View className={className} style={{height:`${windowHeight}px`}}>
      {/* 首页顶部模块：导航栏，搜索栏，标签栏 */}
      <SignIn>
         <LogoPage isHomePage='true' backgroundColor='#fff'/>
        <View onClick={toSearchDetail}>
            <AtSearchBar
            disabled
            placeholder='搜一下'
            value={searchValue}
          />
        </View>
      <View className={`${className}__nav`} style={{height:`${windowHeight-147}px`}}>
        {/* 标签栏 */}
         <ScrollView scrollX='true' enableFlex='true' scrollWithAnimation='true' scrollLeft={scrollLeftValue}
         className={`${className}__nav-bar`}
       >
          {
            topBarTitle.map((item,index) => {
              return(
                <View key={item.id} className={currentTab == index ? 'nav-item active' :'nav-item'} onClick={() => switchNav(item.id)}>
                  {item.text}
                </View>
              )
            })
          }
      </ScrollView>
      {/* 标签栏 */}
      {/* 标签栏内容模块 */}
          <Swiper className={`${className}__nav-content`} current={currentTab} duration={100} onChange={switchTab}>       
              <SwiperItem className={`${className}__nav-content-list`}>
                   <Index />
              </SwiperItem>
              <SwiperItem className={`${className}__nav-content-list`}>
                  <Programmer />
              </SwiperItem> 
              <SwiperItem className={`${className}__nav-content-list`}>
                  <Video />
              </SwiperItem> 
              <SwiperItem className={`${className}__nav-content-list`}>
                 <BooksRecommended />
              </SwiperItem>
              <SwiperItem className={`${className}__nav-content-list`}>
                  <Free />
              </SwiperItem>         
          </Swiper>
      {/* 标签栏内容模块 */}
      </View>
       {/* 首页顶部模块：导航栏，搜索栏，标签栏 */}
             </SignIn>
    </View>
  )
}