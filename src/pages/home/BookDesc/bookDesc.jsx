import { View,Text, Image,ScrollView,PageContainer} from '@tarojs/components'
import Taro from '@tarojs/taro';
import { useState,useEffect } from 'react';
import IconFont from '../../../components/Iconfont'
import './bookDesc.less';

export default function Bookquote(){
  const className = 'description';
  const [iconColor,setIconColor] = useState('#333');
  const [isShow,setIsShow] = useState(false);
  const [bookInfo,setBookInfo] = useState({})
  const {windowHeight} = Taro.getSystemInfoSync();
  const {top,height} = Taro.getMenuButtonBoundingClientRect();
  const quoteList = [
    {id:1,quote:'隐性曲线是有由企业的文化体系、人才梯队和管理机制三大核心要素共同构成的。'},
    {id:2,quote:'奋斗对我的意义在于获得更多的人生自由。'},
    {id:3,quote:'市场上主流的增长路径有两种：一种是依靠资本的力量实现规模的扩张；另一种是凭借组织的力量获得持续的增长。'},
    {id:4,quote:'好的沟通方法，是要降低他人和我们合作的心理成本。'},
    {id:5,quote:'请相信：你来我往过招的时候，谁的方案更周全，谁的目标更坚决，谁就能赢。'},
  ]
  const introducerList = [
    {id:1,type:'专家推荐',introducer:'罗翔',status:'中国政法大学刑法学教授',reason:'只有爱才能让痛苦变为幸福。漠然让幸福变为痛苦。我们都应该拥有芬芳的人生，只有爱能让芬芳不至枯萎。'},
    {id:1,type:'读者推荐',introducer:'张力奋',status:'复旦大学新闻学院教授',reason:'在这本书里，你可以读到最好的中国与中国人'},
    {id:1,type:'牛人推荐',introducer:'尹涛',status:'生活·读书·新知三联书店总编辑',reason:'京剧究竟好在哪？我认为郭宝昌老师的答案是最令人信服的。他带着中西方两种文化视野，能更好的反思京剧艺术，直击京剧的本质'},
    {id:1,type:'同学推荐',introducer:'何帆',status:'司法工作者，知名法正译者',reason:`兰小欢先生的置身事内，让真正“置身事内”的我信服并佩服他的研究。`},
    {id:1,type:'网红推荐',introducer:'罗振宇',status:'得到创始人',reason:`这本书讲的两个人你一定很熟悉：曹操和刘备。关于他俩的故事已经有很多了，但刘勃有一个很特别的视角，他是讲，历史是如何被大众审美和文人趣味反向塑造的。用一个更形象的描述，就好像是看曹操和刘备如何被一个个化妆师，打扮成现在我们看到的样子。`},
  ]
  useEffect(() => {
    Taro.request(
      {
        url:'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/book/description',
        success: function (res) {
          // console.log(res.data)
          setBookInfo(res.data)
        }
      }
      )
  },[])
  const joinLove = () => {
    if(iconColor == '#333') {
        setIconColor('#fd7109')
          Taro.showToast({
            title: '已加入我的收藏',
            icon: 'success',
            duration: 2000
          })
    }else if(iconColor == '#fd7109'){
      setIconColor('#333')
          Taro.showToast({
            title: '已取消收藏',
            icon: 'success',
            duration: 2000
          })
    }
  }
  const goBack = () => {
    Taro.navigateBack();
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
        backgroundColor:'#fff'
        }}
         className={`${className}__bar`}
       > 
            <View onClick={goBack}>
              <IconFont name='icon-youjiantou1' size={50} color='#333' />
            </View>
            <View className={`${className}__bar-love`} onClick={joinLove}>
              <IconFont name='icon-jiarushoucang' size={46} color={iconColor} />
            </View>
            <View className={`${className}__bar-share`}>
              <IconFont name='icon-fenxiang' size={46} color='#333' />
            </View>
      </View>
      <View className={`${className}__top`} style={{paddingTop:`${height+55}px`,paddingBottom:`${height-30}px`}}>
        <View className={`${className}__top-left`}>
          <Image src={bookInfo.bookImg} className={`${className}__top-left-img`} />
        </View>
        <View className={`${className}__top-right`}>
          <View className={`${className}__top-right-text`}>
            <Text className={`${className}__top-right-text-name`}>{bookInfo.bookName}</Text>
            <Text>{bookInfo.bookAuthor} 著 /{bookInfo.publisher}</Text>
          </View>
          <View className={`${className}__top-right-action`} onClick={() => setIsShow(!isShow)}>
            <Text>阅读渠道&nbsp;&nbsp;</Text>
            <IconFont name='icon-70BasicIcons-all-17' size={40} color='#fd7109' />
          </View>
        </View>
      </View>
      <View className={`${className}__cate`}>
        <View className={`${className}__cate-content`}>
          <View className={`${className}__cate-content-score`}>
            <IconFont name='icon-shejiaotubiao-48' size={30} />
            <Text>豆瓣评分</Text>
          </View>
          <View className={`${className}__cate-content-data`}>{bookInfo.score}</View>
        </View>
        <View className={`${className}__cate-content`}>
          <View>字数</View>
          <View>
            <Text className={`${className}__cate-content-data`}>{bookInfo.wordNumbers}</Text>
            <Text style={{fontSize:'11px'}}>&nbsp;千字</Text>
          </View>
        </View>
        <View className={`${className}__cate-content`}>
          <Text>出版时间</Text>
          <Text className={`${className}__cate-content-data`}>{bookInfo.publicDate}</Text>
        </View>
        <View className={`${className}__cate-content data4`}>
          <Text>类型</Text>
          <Text className={`${className}__cate-content-data`}>{bookInfo.bookType}</Text>
        </View>
      </View>
      <View className={`${className}__brief`}>
        <View className={`${className}__brief-title`}>简介</View>
        <Text userSelect space='nbsp'>{bookInfo.briefIntro}</Text>
      </View>
      <View className={`${className}__quote`}>
        <View className={`${className}__quote-title`}>经典语录</View>
        <ScrollView scrollX enableFlex className={`${className}__quote-scroll`}>
          {
            quoteList.map(item => {
              return (
                <View className={`${className}__quote-scroll-wrapper`} key={item.id}>
                  <View className={`${className}__quote-scroll-wrapper-content`}>
                    <Text userSelect space='nbsp'>{item.quote}</Text>
                  </View>
                </View>
              )
            })}
        </ScrollView>
      </View>
      <View>
        {
            introducerList.map(item => {
              return (
              <View className={`${className}__introducer`} key={item.id}>
              <View className={`${className}__introducer-type`}>
                  『{item.type}』
              </View>
                <View className={`${className}__introducer-content`}>
                  <View className={`${className}__introducer-content-reason`}> 
                    <Text userSelect>{item.reason}</Text>
                  </View>
                  <View className={`${className}__introducer-content-person`}>
                      <Text userSelect>{item.introducer}</Text>
                      <Text userSelect>{item.status}</Text>
                  </View>
                </View>
            </View>
              )
            })
          }
        </View>
        <PageContainer
          show={isShow}
          overlay={false}
          overlayStyle='true'
          customStyle='true'
        >
        <View className={`${className}__read`} style={{height:`${windowHeight/2.5}px`}}>
          <View onClick={() => setIsShow(false)} className={`${className}__read-close`}>
            <IconFont name='icon-cuowu' size={40} color='#eee' />
          </View>
          <View className={`${className}__read-paper`}>纸质书购买渠道</View>
          <View className={`${className}__read-electric`}>电子书阅读渠道</View>
        </View>
      </PageContainer>
    </View>
  )
}