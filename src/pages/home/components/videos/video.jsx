import { View,Swiper,SwiperItem,Image,Text,ScrollView } from '@tarojs/components'
import IconFont from '../../../../components/Iconfont'
import './video.less'

export default function Index(){
  const className = 'video'
    const swiperSrc = [
    {id:8,src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.soumeitu.com%2Fwp-content%2Fuploads%2F2020%2F04%2F5e870360df024.jpg&refer=http%3A%2F%2Fwww.soumeitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648909135&t=c4b10b1d17e9633fbb60304646c18b25'},
    {id:9, src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F811%2F010415112419%2F150104112419-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648909135&t=dbb950703be32a7e5892117c6af6b084'},
    {id:10, src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1112%2F030919134T9%2F1Z309134T9-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648909135&t=daf232e2f71e5dd5ff58ce91560c5263'},
  ]
  const videoList = [
    {id:1,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F82%2Fce%2Fce%2F82cece1703856a860cb39d6a22d7ca26.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=629086a8ed46d2e0e2e1208092d86abd',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:2,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F062021132H5%2F210620132H5-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=8e45e80e3435a369c16739af50139b76',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:3,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F210924212T335E-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=b7ec4464521a533c92bf77a697923031',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:4,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2110021F21V024-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=ddf0f7a84f0a42263c7095e6662047d9',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:5,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G621100647%2F210G6100647-8-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=ab20ef1eaa70540ae1b7230b3cb9e330',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:6,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F060421091316%2F210604091316-8-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=e4f97420d425ff03b20da3036cfa41fb',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:7,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2F68%2F4c%2F34684c009e692f16c8d5570b2b73a5b5.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=9ffeb1ff912f9759e8e1f25f84a117bc',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:8,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F29%2F7c%2Faf%2F297caf37ed73183d4fde15619c2ca1b7.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=28cd7620ba9692c336d84d283932405a',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:9,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F050421112027%2F210504112027-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649910911&t=ca30d29c282a12324368148c3fa1e69e',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
    {id:10,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx3.sinaimg.cn%2Flarge%2F002hlLXngy1gufwi7xnhzj612w0lvdjz02.jpg&refer=http%3A%2F%2Fwx3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649911066&t=ea9b209269d0416792e3d7dfd13fcf92',desc:'这孩子下盘稳得很，不错，有点意思哈！',playCount:999,mins:'07:03:50',up:'黑马程序员',platform:'bilibili'},
  ]
  return (
    <View className={className}>
      <ScrollView scrollY enableFlex='true' scrollWithAnimation='true' scrollTop={0} enableBackToTop>
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
                                  <Image src={item.src} mode='widhFix' style={{width: '100%' }} />
                              </SwiperItem>
                              )
                            })
                          }
        </Swiper>
         {/* 首页轮播图部分 */}
      </View>
      <View className={`${className}__videos-container`}>
        {/* 视频列表卡片部分 */}
        {
          videoList.map(item => {
            return (
            <View className={`${className}__videos-container-card`} key={item.id}>
              <View className={`${className}__videos-container-card-img`}>
                <Image mode='widthFix' className={`${className}__videos-container-card-img-picture`} src={item.img} />
                <View className={`${className}__videos-container-card-img-count`}>
                  <IconFont name='icon-shipin' size={35} color='#eee' />
                  <Text className={`${className}__videos-container-card-img-count-text`}>{item.playCount}</Text>
                </View>
                <Text className={`${className}__videos-container-card-img-time`}>{item.mins}</Text>
              </View>
              <View className={`${className}__videos-container-card-content`}>
                <Text className={`${className}__videos-container-card-content-desc`}>{item.desc}</Text>
                <View className={`${className}__videos-container-card-content-from`}>
                  <Text>{item.platform}</Text>
                  <Text>{item.up}</Text>
                </View>
              </View>
          </View>
            )
          })
        }
         
          
        {/* 视频列表卡片部分 */}
      </View>
      </ScrollView>
      </View>
  )
}