import { View,Swiper,SwiperItem,Image} from '@tarojs/components'

import './swiper.less'

export default function TopSwiper({swiperSrc}){
  const className = 'swiper';

  return (
    <View className={`${className}__swiper-container`}>
        {/* 首页轮播图部分 */}
        <Swiper
          className={`${className}__swiper-container-list`}
          circular 
          indicatorDots 
          autoplay 
          indicatorColor='rgba(0,0,0,0.1)'
          indicatorActiveColor='rgba(253,113,9,0.9)'
        >
           {
                            swiperSrc.map((item) => {
                              return(
                                <SwiperItem key={item.id}>
                                  <Image src={item.src} mode='widthFix' style={{width: '100%' }} />
                              </SwiperItem>
                              )
                            })
                          }
        </Swiper>
         {/* 首页轮播图部分 */}
           </View>
  )
}