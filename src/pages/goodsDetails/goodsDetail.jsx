import Taro,{getCurrentInstance,useReady} from '@tarojs/taro';
import { useCallback } from 'react'
import {View,Swiper,SwiperItem,Image,Text} from '@tarojs/components'
import IconFont from '../../components/Iconfont';
import {getTop,getBottom} from '../../utils/safeLocate/sefeLocate'
import './goods.less'

export default function GoodsDetail(){
  const className = 'goods-detail'
  const {windowHeight} = Taro.getSystemInfoSync();
  const swiperHeight = windowHeight / 2;
  const {top,height} = getTop();
  const imgSrc = [
    {id: 1,src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ff7%2F83%2F9a%2Ff7839ade3c17412f0d3f495615acbda1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649335770&t=957821ffa93fa5a7fb5039b8704454eb'},
    {id: 2,src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.51minsheng.com%2Fforum%2F201609%2F06%2F135602lfif535asy20av2f.jpg&refer=http%3A%2F%2Ffile.51minsheng.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649335869&t=a18f84b4353249e3b916133c799df6ee'},
    {id: 3,src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.11665.com%2Fimg04_p%2Fi4%2F12266026382160693%2FT1KUygFmlcXXXXXXXX_%21%210-item_pic.jpg&refer=http%3A%2F%2Fimg.11665.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649335869&t=875816c964b8b734160e44d03b9d9ac5'},
  ]
  // 查看是来自哪个商品的id进来的
   useReady(() => {
    let params = getCurrentInstance().router.params;
    console.log(params);
  })
  // 返回上一页；
  const goBack = useCallback(() =>{
    Taro.navigateBack();
  },[]);
  // 预览图片
  const previewImg = useCallback((current) =>{
    const urls = [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Ff7%2F83%2F9a%2Ff7839ade3c17412f0d3f495615acbda1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649335770&t=957821ffa93fa5a7fb5039b8704454eb',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.51minsheng.com%2Fforum%2F201609%2F06%2F135602lfif535asy20av2f.jpg&refer=http%3A%2F%2Ffile.51minsheng.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649335869&t=a18f84b4353249e3b916133c799df6ee',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.11665.com%2Fimg04_p%2Fi4%2F12266026382160693%2FT1KUygFmlcXXXXXXXX_%21%210-item_pic.jpg&refer=http%3A%2F%2Fimg.11665.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649335869&t=875816c964b8b734160e44d03b9d9ac5'
    ];
    Taro.previewImage({urls,current})
  },[]);
  const ButtonContent = (
    <View className={`${className}__button-content`}>    
      <View className={`${className}__button-swap`}>      
        <Text className={`${className}__button-swap-text`}>申请换</Text>    
      </View>    
      <View className={`${className}__button-buy`}>
        <Text className={`${className}__button-buy-text`}>毛毛买</Text>    
      </View>
    </View>
  )
  return (
    <View  className={className} style={{ flex: 1 }}>
       <View className={`${className}__action`} style={{ top, height }}>      
            <View className={`${className}__action-item`} onClick={goBack}>        
              <IconFont name='icon-youjiantou1' size={40} color='#fff' />     
            </View>      
            <View className={`${className}__action-item`}>        
              <IconFont name='icon-fenxiang' size={36} color='#fff' />      
            </View>      
            <View className={`${className}__action-item`}>        
              <IconFont name='icon-jiarushoucang' size={36} color='#fff' />      
            </View>      
        </View>
         <View  
           style={{
             overflow: 'scroll',
             WebkitOverflowScrolling: 'touch',
             height: `${windowHeight}px`}} 
         >
            <Swiper    
              className={`${className}__swiper`}    
              style={{height: `${swiperHeight}px`,marginBottom: '10px',}}    
              indicatorColor='#999'    
              indicatorActiveColor='#333'    
              circular    
              indicatorDots    
              autoplay  
            >
               {
                 imgSrc.map(item =>{
                   return (
                     <SwiperItem key={item.id} onClick={() =>previewImg(item.src)}>
                          <Image 
                            mode='aspectFill'        
                            style={{ width: '100%', height: `${swiperHeight}px` }}        
                            src={item.src}     
                          />
                     </SwiperItem>
                   )
                 })
               }
              </Swiper>
              <View style={{position: 'relative',zIndex: 2,}}>
               <View  style={{ marginTop: process.env.TARO_ENV === 'rn' ? -30 : (swiperHeight - 20)+'px' }}
                 className={`${className}__content`}
               >
                 <Text className={`${className}__content-title`}>商品详情</Text>
                   <View className={`${className}__content-desc`}>        
                   <Text className={`${className}__content-desctext`}>商品详细描述，这件衣服很喜欢，如果你也喜欢，我们可以聊聊，一起来换</Text> 
                   </View>
               </View>
              </View>
           </View>
                <View className={`${className}__button`} 
                  style={{ bottom: (getBottom() +10)+'px' }}
                >     
                {ButtonContent}       
                 </View>
    </View>
  )
}