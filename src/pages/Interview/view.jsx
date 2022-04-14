import { View, Text,ScrollView,Swiper,SwiperItem} from '@tarojs/components'
import Taro from '@tarojs/taro';
import { useState } from 'react';
import LogoPage from '../../components/topLogoPage/logoPage'
import ExerProgress from './components/ExerProgress/exerProgress'
import './view.less'

export default function Interview(){
  const className = 'view';
  const {windowHeight} = Taro.getSystemInfoSync();
  const [currentTab,setCurrentTab] = useState(0);
  const topContent = [
    {id:1, title:'已练习天数',count:9},
    {id:2, title:'已练习题目',count:99},
    {id:3, title:'已练习知识点',count:19},
  ]
  const topBarTitle = [
    {id:1,title:'计算机基础'},
    {id:2,title:'编程语言'},
    {id:3,title:'数据结构'},
    {id:4,title:'算法'},
    {id:5,title:'框架技术'},
  ]
  // 计算机基础
  const computerBase = [
    {id:1,type:'操作系统',total:'90',haveExerCount:'9'},
    {id:2,type:'网络基础',total:'90',haveExerCount:'9'},
    {id:3,type:'linux',total:'90',haveExerCount:'9'},
    {id:4,type:'数据库',total:'90',haveExerCount:'9'},
  ]
  // 编程语言
  const programLanguage = [
    {id:1,type:'C语言',total:'90',haveExerCount:'9'},
    {id:2,type:'Java',total:'90',haveExerCount:'9'},
    {id:3,type:'C++',total:'90',haveExerCount:'9'},
    {id:4,type:'Python',total:'90',haveExerCount:'9'},
    {id:5,type:'JavaScript',total:'90',haveExerCount:'9'},
    {id:6,type:'HTML',total:'90',haveExerCount:'9'},
    {id:7,type:'CSS',total:'90',haveExerCount:'9'},
  ]
  // 框架技术
   const frameSkill = [
    {id:1,type:'Vue',total:'90',haveExerCount:'9'},
    {id:2,type:'React',total:'90',haveExerCount:'9'},
    {id:3,type:'Spring',total:'90',haveExerCount:'9'},
  ]
  // 数据结构
  const dataFrame = [
    {id:1,type:'数组',total:'90',haveExerCount:'9'},
    {id:2,type:'栈',total:'90',haveExerCount:'9'},
    {id:3,type:'堆',total:'90',haveExerCount:'9'},
    {id:4,type:'树',total:'90',haveExerCount:'9'},
    {id:5,type:'图',total:'90',haveExerCount:'9'},
    {id:6,type:'字符串',total:'90',haveExerCount:'9'},
    {id:7,type:'链表',total:'90',haveExerCount:'9'},
    {id:8,type:'队列',total:'90',haveExerCount:'9'},
  ]
  // 基础算法
  const baseCompute = [
    {id:1,type:'复杂度',total:'90',haveExerCount:'9'},
    {id:2,type:'排序',total:'90',haveExerCount:'9'},
    {id:3,type:'递归',total:'90',haveExerCount:'9'},
    {id:4,type:'查找',total:'90',haveExerCount:'9'},
    {id:5,type:'哈希',total:'90',haveExerCount:'9'},
  ]
    // 顶部标题导航栏点击切换内容功能 scrollLeft={0}
  const switchTab = (e) => {
     let cur = e.target.current;
   setCurrentTab(cur); 
  }
    // 顶部标题导航栏点击切换功能
  const switchNav = (value) => {
      setCurrentTab(value-1);
  }
   // 顶部标题导航栏点击切换功能

  return (
    <View className={className}>
      <LogoPage backgroundColor='#fff' /> 
      <View className={`${className}__top`}> 
        {
          topContent.map(item => {
            return (
              <View key={item.id} className={`${className}__top-content`}>
                <Text className={`${className}__top-content-count`}>{item.count}</Text>
                <Text>{item.title}</Text>
              </View>
            )
          })
          }
      </View>
       <View className={`${className}__nav`}>
        {/* 标签栏 */}
          <ScrollView scrollX='true' 
            enableFlex='true' 
            scrollWithAnimation='true'
            className={`${className}__nav-bar`}
          >
          {
            topBarTitle.map((item,index) => {
              return(
                <View key={item.id} 
                  className={currentTab == index ? `${className}__nav-bar-item active` :`${className}__nav-bar-item`} 
                  onClick={() => switchNav(item.id)}
                >
                  {item.title}
                </View>
              )
            })
          }
      </ScrollView>
      {/* 标签栏 */}
          {/* 标签栏内容模块 */}
           <ScrollView scrollY='true' 
             enableFlex='true' 
             scrollWithAnimation='true'
             scrollTop={0}
             style={{height:`${windowHeight-185}px`}}
             className={`${className}__nav-scroll`}
           >
      <Swiper className={`${className}__nav-scroll-content`} current={currentTab} onChange={switchTab}>       
            <SwiperItem className={`${className}__nav-scroll-content-list`}>
                <ExerProgress 
                  itemList={computerBase} 
                  lineBackground='linear-gradient(#FFFACD,#FFE4B5,#FFDEAD, #fd7109)'
                  timeIcon='icon-shalou'
                  iconColor='#fd7109'
                  actionBackground='#fd7109'
                />
            </SwiperItem>
            <SwiperItem className={`${className}__nav-scroll-content-list`}>
                <ExerProgress 
                  itemList={programLanguage} 
                  lineBackground='linear-gradient(#7FFFD4,#54FF9F,#4EEE94, #06C484)'
                  timeIcon='icon-shijian1'
                  iconColor='#06C484'
                  actionBackground='#06C484'
                />
            </SwiperItem>
            <SwiperItem className={`${className}__nav-scroll-content-list`}>
               <ExerProgress 
                 itemList={dataFrame} 
                 lineBackground='linear-gradient(#FFC0CB,#FFB6C1,#FF69B4, #FF1493)'
                 timeIcon='icon-shijian3'
                 iconColor='#FF1493'
                 actionBackground='#FF1493'
               />
            </SwiperItem>
            <SwiperItem className={`${className}__nav-scroll-content-list`}>
                 <ExerProgress 
                   itemList={baseCompute} 
                   lineBackground='linear-gradient(#FF6A6A,#EE6363,#EE6363, #FF0000)'
                   timeIcon='icon-shijian2'
                   iconColor='#FF0000'
                   actionBackground='#FF0000'
                 />
            </SwiperItem>
            <SwiperItem className={`${className}__nav-scroll-content-list`}>
                   <ExerProgress 
                     itemList={frameSkill} 
                     lineBackground='linear-gradient(#63B8FF,#5CACEE,#00FFFF,#00BFFF)'
                     timeIcon='icon-shijian'
                     iconColor='#00BFFF'
                     actionBackground='#00BFFF'
                   />
            </SwiperItem>
        </Swiper>
        </ScrollView>
      {/* 标签栏内容模块 */}
    </View>
  
    </View>
  )
}