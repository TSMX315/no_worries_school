import {useState} from 'react'
import Taro,{useReady} from '@tarojs/taro'
import { View, Text,Swiper,SwiperItem} from '@tarojs/components'
import LogoPage from '../../components/topLogoPage/logoPage'
import ImageCard from './components/ImageCard/imageCard'
import IconFont from '../../components/Iconfont'
// import SelfSwiper from '../../components/Swiper/swiper'
import './share.less'

export default function Share(){
  const className = 'share';
  const [goodsInfo,setGoodsInfo] = useState([]);
  const [currentTab,setCurrentTab] = useState(0);
  const {windowHeight} = Taro.getSystemInfoSync();
  useReady(() => {
    getImgData();
  })
  const getImgData = () => {
      Taro.request(
          {
            url:`https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/img`,
            success: function (res) {
              setGoodsInfo(res.data.goodsInfo)
            }
          }
          )
  }
  const shareType = [{id:1, text: '闲鱼市场'},{id:2, text: 'AA ?'}];
  
  // 顶部标题导航栏点击切换内容功能
  const switchTab = (e) => {
    let cur = e.target.current;
   setCurrentTab(cur); 
  }
  // 顶部标题导航栏点击切换功能
  const switchNav = (value) => {
   setCurrentTab(value-1);
  }
  // 点击发布按钮后，弹出一个选择框，选择分享类型
  const goPublishPage = () => {
    Taro.navigateTo({url:'/pages/share/WritePubForm/publishForm'})
  }
  return (
    <View className={className}>
       <LogoPage backgroundColor='#fff' />
        <View className={`${className}__nav`} style={{height:`${windowHeight-102}px`}}>
          <View className={`${className}__nav-bar`}>
          {
            shareType.map((item,index) => {
              return(
                <View key={item.id} 
                  className={currentTab == index ? `${className}__nav-bar-item active` :`${className}__nav-bar-item`} 
                  onClick={() => switchNav(item.id)} 
                >
                  {item.text}
                </View>
              )
            })
          }
          </View>
          <Swiper 
            className={`${className}__nav-content`}  
            current={currentTab} 
            duration={100}
            onChange={switchTab}
          >
                {
                shareType.map((item) => {
                  return(
                    <SwiperItem key={item.id} className={`${className}__nav-content-list`}>
                      <ImageCard goodsList={goodsInfo} />
                    </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
      {/* 页面内容 */}
          {/* 添加发布按钮 */}
          <View className={`${className}__publish`} onClick={goPublishPage}>
            <IconFont name='icon-a-gongxiangwangluo' size={55} />
            <Text>发布</Text>
          </View>
          {/* 点击发布按钮后，弹出一个选择框布局 */}
    </View>
  )
}