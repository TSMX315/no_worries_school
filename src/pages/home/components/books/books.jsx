/*
 * @Author: TSMX
 * @Date: 2022-03-16 12:58:56
 * @LastEditTime: 2022-04-09 11:01:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\components\routeImage\routeImage.jsx
 */
import {View,Text} from '@tarojs/components'
import Taro,{useReady} from '@tarojs/taro'
import { useState } from 'react'
import TopSwiper from '../../../../components/Swiper/swiper'
import BookScroll from '../../../../components/BookScroll/bookScroll'
import BookRanking from '../../../../components/BookRankingScroll/ranking'
import IconFont from '../../../../components/Iconfont'
import './books.less'



export default function RouteImage(){
  const className = 'book';
  const [bookCategory,setBookCategory] = useState([]);
    const swiperSrc = [
    {id:8,src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.soumeitu.com%2Fwp-content%2Fuploads%2F2020%2F04%2F5e870360df024.jpg&refer=http%3A%2F%2Fwww.soumeitu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648909135&t=c4b10b1d17e9633fbb60304646c18b25'},
    {id:9, src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F811%2F010415112419%2F150104112419-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648909135&t=dbb950703be32a7e5892117c6af6b084'},
    {id:10, src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1112%2F030919134T9%2F1Z309134T9-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648909135&t=daf232e2f71e5dd5ff58ce91560c5263'},
  ]
  useReady(() => {
    getBookCategory();
  })
  // 获取书籍分类数据
  const getBookCategory = () => {
    Taro.request({
      url: 'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/content_cate',
      success: (res) => {
        setBookCategory(res.data.bookCategory);
  }
})
  }
   const bookList = [
    {id:1,title:'高性能MySQL：第三版',img:'https://piccdn3.umiwi.com/img/202004/09/202004091541094489612488.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
    {id:2,title:'从时间、资金、风险的角度，为你揭示金融的本质。',img:'https://piccdn3.umiwi.com/img/202005/30/202005301808105244517219.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
    {id:3,title:'从时间、资金、风险的角度，为你揭示金融的本质。',img:'https://piccdn3.umiwi.com/img/202001/16/202001161304142556727065.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
    {id:4,title:'从时间、资金、风险的角度，为你揭示金融的本质。',img:'https://piccdn3.umiwi.com/img/202012/04/202012041716342448187842.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
    {id:5,title:'从时间、资金、风险的角度，为你揭示金融的本质。',img:'https://piccdn3.umiwi.com/img/201908/26/201908262019388015638595.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
    {id:6,title:'从时间、资金、风险的角度，为你揭示金融的本质。',img:'https://piccdn3.umiwi.com/img/202003/30/202003301417580838171874.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
  ]
  const typeList = [
    {id:1,title: '技术圈',background:'#20B2AA'},
    {id:2,title: '经济学圈',background:'#CD5555'},
    {id:3,title: '金融学圈',background:'#FF4500'},
    {id:4,title: '心理学圈',background:'#A020F0'},
    {id:5,title: '哲学圈',background:'#BC8F8F'},
  ]
  const contentList = [
    {id:1,title:'高性能MySQL：第三版',img:'https://piccdn3.umiwi.com/img/202004/09/202004091541094489612488.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
    {id:2,title:'金钱永不眠',img:'https://piccdn3.umiwi.com/img/202005/30/202005301808105244517219.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
    {id:3,title:'金钱永不眠',img:'https://piccdn3.umiwi.com/img/202001/16/202001161304142556727065.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
  ]
  const goCorrectPage = (value) => {
    if(value === 5){
      Taro.navigateTo({url:'/pages/home/BookCateList/cateList?cateType=book&listType=book'})
    }else{
      Taro.navigateTo({url:`/pages/home/ShowList/showList?id=${value}&listType=book`})
    }
    
  }
  return (
    <View className={className}>
      <TopSwiper swiperSrc={swiperSrc} />
        {/* 内容分类模块 */}
         <View className={`${className}__category-container`}>
              {
                bookCategory.map(item => {
                  return (
                    <View key={item.id} className={`${className}__category-container-content`} onClick={() => goCorrectPage(item.id)}>
                    <View className={`${className}__category-container-content-icon`} style={{ backgroundColor:`${item.background}`}}>
                        <IconFont name={item.icon} size={item.size} color={item.color} />
                      </View>
                      <View className={`${className}__category-container-content-text`}>
                      <Text>{item.title}</Text>
                    </View>
                  </View>
                  )
                })
              }
         </View>
         {/* 内容分类模块 */}
         {/* 分类推荐书籍横向滚动模块 */}
            <BookScroll bookList={bookList} title='经典巨著' />
            <BookRanking title='高分必读' typeList={typeList} contentList={contentList} />
         {/* 分类推荐书籍横向滚动模块 */}
    </View>
  )
}
