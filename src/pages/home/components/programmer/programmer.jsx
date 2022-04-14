import { View,PageContainer } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState,useEffect } from 'react'
import IconFont from '../../../../components/Iconfont'
import BookRanking from '../../../../components/BookRankingScroll/ranking'
import ArticleStyle from '../../../../components/ArticleStyle/articleStyle'
import SelfSwiper from '../../../../components/Swiper/swiper'
import './programmer.less'


export default function Programmer(){
  const className = 'programmer';
  const [selectorShow,setSelectorShow] = useState(false);
  const [selectList,setSelectList]  = useState([]);
  const [programCategory,setProgramCategory] = useState([]);
  const [selectValue,setSelectValue] = useState('前端开发');
  // const {windowHeight} = Taro.getSystemInfoSync();
  useEffect(() => {
    getSelectList();
    getProgramCategory();
  },[]);
  // 获取程序员页面分类数据
  const getProgramCategory = () => {
    Taro.request({
      url:`https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/content_cate`,
      success: function (res) {
        setProgramCategory(res.data.programCategory)
      }
    })
  }
  const getSelectList = () => {
    Taro.request({
        url:'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/learnRoute'
    }).then(res=>{
        setSelectList(res.data);
    })
  }
  const selectConfirm = () => {
    // console.log(selectValue);
    Taro.navigateTo(
      {
        url:'/pages/home/LearnRoute/learnRoute?route=' + selectValue,
        success: function () {
            setSelectorShow(false)
      }
      })

  }
  const selectChange = (value) => {
    selectList.forEach((ele) => {
         ele.checked = ele.id === value? !ele.checked : false;
         if(ele.checked){
           setSelectValue(ele.name);
          //  console.log(selectValue);
         }
    })
    setSelectList([...selectList]);
  }
  const handleCateClick = (value) => {
      if(value === '学习路线'){
        setSelectorShow(!selectorShow)
      }else if(value === '学习资源'){
        Taro.navigateTo({url:'/pages/home/BookCateList/cateList?cateType=resource&listType=article'})
      }else if(value === '工具'){
        Taro.navigateTo({url:'/pages/home/ShowList/showList?listType=article'})
      }else if(value === '求职'){
        Taro.navigateTo({url:'/pages/home/ShowList/showList?listType=article'})
      }else if(value === '软技能'){
        Taro.navigateTo({url:'/pages/home/ShowList/showList?listType=article'})
      }
  }
     const swiperSrc = [
    {id:8,src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FzCs7AsUgrq4M-DfT48Uv9w.jpg&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651455752&t=650fa8c6f5a110c11ad32f6dead60b1b'},
    {id:9, src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F511%2F101611154647%2F111016154647-22-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651455752&t=b07c9e885385d12f8beca127a671d317'},
    {id:10, src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fimages01%2F20210711%2Fad51e7fa66b4482a9ae90a36c1c17789.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651455752&t=fab500119c4a8fa7f6fe515c2593a323'},
  ]
  const articleList = [
    {
      id:1,
      typeTitle:'猜你喜欢',
      title:'程序员应聘技巧 保姆级流程攻略',
      desc:'当我们走出校园，走向社会。我们都绕不开一个话题，就是应聘。程序员这个岗位是一个技术岗位，所以应聘是有一些技巧在里边的，这些技巧的使用可以大大提升应聘成功率。',
      pubTime:'2022-03-14',
      articleType:'程序软技能',
      readCount:4753,
      author:'技术胖'
    },
     {
      id:2,
      typeTitle:'猜你喜欢',
      title:'我项目中用的20个轮子 开发效率提升200% 建议收藏',
      desc:'我是一个前端开发者，这个视频就推荐我工作中常用的15个轮子。这些轮子可以大大加快你的开发效率。',
      pubTime:'2021-10-12',
      articleType:'大胖逼逼叨',
      readCount:17537,
      author:'技术胖'
    },
    {
      id:3,
      typeTitle:'猜你喜欢',
      title:'Windows11 中安装Linux 教程 | WSL2的使用',
      desc:'Windows11今天正式向大家开始推送了，这也算是十一假期中的一个重磅消息了。我相信有很多小伙伴会升级到Windows11。',
      pubTime:'2021-10-05',
      articleType:'2021-10-05',
      readCount:7553,
      author:'技术胖'
    }
  ]
    const typeList = [
    {id:1,title: '前端开发',background:'#20B2AA'},
    {id:2,title: 'Java后端开发',background:'#CD5555'},
    {id:3,title: '大数据开发',background:'#FF4500'},
    {id:4,title: '嵌入式开发',background:'#A020F0'},
    {id:5,title: '网络安全',background:'#BC8F8F'},
  ]
  const contentList = [
    {id:1,title:'从0到1学html5和css3',desc:'30天精通JavaScript,成为一个高级前端开发工程师',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbsmayi.com%2Fimages%2Fm02.jpg&refer=http%3A%2F%2Fbsmayi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650509194&t=4ed1c1773cd454648d885f0342ded833https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs11.51cto.com%2Fimages%2F201803%2F23%2Fef558656ab3caec8e31616e214f9a53a.jpg&refer=http%3A%2F%2Fs11.51cto.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650509093&t=bf9bbdd56d71600c797ebef404c1ece4'},
    {id:2,title:'Web前端必学的JS入门教程',desc:'30天精通JavaScript,成为一个高级前端开发工程师',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20170731%2F3f0833dc56c64778918271c8e9acbea4.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650509628&t=d8593263b05812ed6afbea56b83193f6.umiwi.com/img/202005/30/202005301808105244517219.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
    {id:3,title:'react零基础入门原理详解',desc:'30天精通JavaScript,成为一个高级前端开发工程师',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs4.51cto.com%2Fwyfs01%2FM01%2F44%2F82%2FwKioOVK37u-gR__UAABqGmksOc4807.png&refer=http%3A%2F%2Fs4.51cto.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650509752&t=bafbbfadd8724841a797b494aeea6933iwi.com/img/202001/16/202001161304142556727065.jpg?x-oss-process=image/resize,m_fill,h_224,w_168'},
  ]
  return (
    <View className={className}>
          {/* 头部轮播图模块 */}
            <SelfSwiper swiperSrc={swiperSrc} />
          {/* 头部轮播图模块 */}
         {/* 内容分类模块 */}
         <View className={`${className}__category`}>
              {
                programCategory.map(item => {
                  return (
                    <View key={item.id} className={`${className}__category-content`} onClick={() => handleCateClick(item.title)}>
                    <View className={`${className}__category-content-icon`} style={{ backgroundColor:`${item.background}`}}>
                        <IconFont name={item.icon} size={item.size} color={item.color} />
                      </View>
                      <View className={`${className}__category-content-text`}>
                        {item.title}
                    </View>
                  </View>
                  )
                })
              }
         </View>
         {/* 内容分类模块 */}
         {/* 文章卡片模块 */}
         <ArticleStyle articlesList={articleList} />
         {/* 文章卡片模块 */}
          {/* 专业课程 */}
          <BookRanking title='详细文字教程' typeList={typeList} contentList={contentList} />
          <ArticleStyle articlesList={articleList} />
          {/* 专业课程 */}
          {/* 滚动选择器 style={{height:`${windowHeight/2}px`}} */}
        <PageContainer 
          show={selectorShow}
          closeOnSlideDown='true'
          customStyle='true'
          round
          position='bottom'
          overlay={false}
        >
        <View className={`${className}__select`}> 
            <View className={`${className}__select-top`}>
              <View onClick={() => setSelectorShow(false)} className={`${className}__select-top-button cancel`}>取消</View>
              <View className={`${className}__select-top-text`}>请选择您要查看的学习路线图</View>
              <View className={`${className}__select-top-button confirm`} onClick={selectConfirm}>确认</View>
            </View>
            <View className={`${className}__select-bottom`}>
              {
                selectList.map((item) => {
                  return (
                    <View key={item.id}
                      onClick={() => selectChange(item.id)}
                      className={item.checked?`${className}__select-bottom-list checked`:`${className}__select-bottom-list`}
                    >
                      {item.name}
                    </View>
                  )
                })
              }
            </View>
          </View>
      </PageContainer>
          {/* 模态框 */}
      </View>
  )
}