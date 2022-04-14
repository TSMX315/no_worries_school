/*
 * @Author: TSMX
 * @Date: 2022-03-16 12:39:17
 * @LastEditTime: 2022-04-02 09:46:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\components\dalaoTalk\expertTalk.jsx
 */
import { View,Swiper,SwiperItem,Image,Text,ScrollView } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import { useState } from 'react'
import ArticleStyle from '../../../../components/ArticleStyle/articleStyle'
import IconFont from '../../../../components/Iconfont'
import './index.less'

export default function Index(){
  const className = 'index';
  const [indexCategory,setIndexCategory] = useState([]);
    const swiperSrc = [
    {id:8,src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FzCs7AsUgrq4M-DfT48Uv9w.jpg&refer=http%3A%2F%2Fimgservice.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651455752&t=650fa8c6f5a110c11ad32f6dead60b1b'},
    {id:9, src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F511%2F101611154647%2F111016154647-22-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651455752&t=b07c9e885385d12f8beca127a671d317'},
    {id:10, src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fimages01%2F20210711%2Fad51e7fa66b4482a9ae90a36c1c17789.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651455752&t=fab500119c4a8fa7f6fe515c2593a323'},
  ]
  useReady(() => {
    getIndexCategory();
  })
  // 获取首页分类数据
  const getIndexCategory = () => {
    Taro.request({
      url: 'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/content_cate',
      success: (res) => {
        setIndexCategory(res.data.indexCategory);
      }
    })
  }
  const watchList = [
    {id:1,title:'斗罗大陆',desc:'暗黑千仞雪，这一席黑纱长裙',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs1.1zoom.me%2Fbig0%2F674%2F430891-Kysb.jpg&refer=http%3A%2F%2Fs1.1zoom.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650023258&t=4d6c5fd619d99870550b27d3f7438da5',time:'00:05:99'},
    {id:2,title:'如来神掌',desc:'老武侠剧就是够味',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F161021%2F4-161021143119.jpg&refer=http%3A%2F%2Fpicture.ik123.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650023258&t=f53d46e3ac5f5a8b1a305af91a6aab88',time:'00:05:99'},
    {id:3,title:'凡人修仙传',desc:'【独家】《凡人修仙传之魔道争锋篇》第20集【总第41',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.goupu.com.cn%2Fupload%2F201808%2F24%2F134204611.jpg&refer=http%3A%2F%2Fimg.goupu.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650023803&t=e3f37cf194bbb46afa544ac6e69c037a',time:'00:05:99'},
    {id:4,title:'龙蛇演义',desc:'测一测：你最像《龙蛇演义》中的谁？',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fvsd-picture.cdn.bcebos.com%2F56426c9b0c8c260fd9aab800e178cf823a37b83c.jpg&refer=http%3A%2F%2Fvsd-picture.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650023803&t=1a145bf65e527f7cc3c5e6d630f15e4f',time:'00:05:99'},
    {id:5,title:'画江湖之不良人',desc:'老李石锤阿姐是自己和姬如雪',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F12146771379%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650028753&t=5d23ad0393032af002167e530dde3ed8',time:'00:05:99'},
    {id:6,title:'斗破苍穹',desc:'老武侠剧就是够味',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181115%2F8554644ce7624e0b8bec216a0859222d.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650023957&t=62c435a0af3f1c2ba351158db34e35e4',time:'00:05:99'},
  ]
   const readList = [
    {
      id:1,
      title:'程序员应聘技巧',
      desc:'当我们走出校园，走向社会。我们都绕不开一个话题，就是应聘。程序员这个岗位是一个技术岗位，所以应聘是有一些技巧在里边的，这些技巧的使用可以大大提升应聘成功率。',
      pubTime:'2022-03-14',
      articleType:'程序软技能',
      readCount:4753,
      author:'技术胖'
    },
     {
      id:2,
      title:'我项目中用的20个轮子',
      desc:'我是一个前端开发者，这个视频就推荐我工作中常用的15个轮子。这些轮子可以大大加快你的开发效率。',
      pubTime:'2021-10-12',
      articleType:'大胖逼逼叨',
      readCount:17537,
      author:'技术胖'
    },
    {
      id:3,
      title:'Windows11 中安装教程',
      desc:'Windows11今天正式向大家开始推送了，这也算是十一假期中的一个重磅消息了。我相信有很多小伙伴会升级到Windows11。',
      pubTime:'2021-10-05',
      articleType:'2021-10-05',
      readCount:7553,
      author:'技术胖'
    },
      {
      id:4,
      title:'我项目中用的20个轮子',
      desc:'我是一个前端开发者，这个视频就推荐我工作中常用的15个轮子。这些轮子可以大大加快你的开发效率。',
      pubTime:'2021-10-12',
      articleType:'大胖逼逼叨',
      readCount:17537,
      author:'技术胖'
    },
    {
      id:5,
      title:'Windows11 中安装教程',
      desc:'Windows11今天正式向大家开始推送了，这也算是十一假期中的一个重磅消息了。我相信有很多小伙伴会升级到Windows11。',
      pubTime:'2021-10-05',
      articleType:'2021-10-05',
      readCount:7553,
      author:'技术胖'
    },
  ]
  const newKnowledgeList = [
    {id:1,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F05%2FChMkJ1bKyaOIB1YfAAusnvE99Z8AALIQQPgER4AC6y2052.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=ce42e2c5917bfe511a57bd3e961413ae'},
    {id:2,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F512%2F0HG2123938%2F120HG23938-6-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=ad76a6f2ef8b811d66b5328b3cd56f5e'},
    {id:3,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F811%2F050Q4152539%2F14050Q52539-11-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=f5b245be1a93001b010bae330afc6792'},
    {id:4,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F100G6110A6%2F16100G10A6-9.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=2661aeda04b8ea8a104cd39555244744'},
    {id:5,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZP045423508-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=9f19073dc5492b2ae616a641596a2feb'},
    {id:6,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F711%2F102413115108%2F131024115108-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=0b1382acfab82b3b5658787a396c3d04'},
    {id:7,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F1110200ZS0%2F2011100ZS0-9-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=d484854c09c33b58ce265222b6da4a82'},
    {id:8,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F011220113I3%2F200112113I3-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=a12fbab84443cd94f68e0c0ca0b260cc'},
    {id:9,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F102920105033%2F201029105033-6-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=199818773fb755de1d02086fbc728ff4'},
    {id:10,author:'万维钢',title:'好运气是可以被制造的',desc:'世界级高手的战术，习惯和日常。CSS入门容易，但精通不易。学习CSS并不是学习一两个小技巧，而是要理解这门语言的方方面面，并知道如何将其',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G320103A8%2F200G3103A8-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650110850&t=17f03a307aeff33d27893ef7138c3519'},
  ]
  const toVideoPage = () => {
    Taro.navigateTo({url:'/pages/videoDetail/videoDetail?id=tsmx315'})
  }
  return (
    <View className={className}>
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
      {/* 内容分类模块 */}
      <View className={`${className}__category-container`}>
        {
                indexCategory.map(item => {
                  return (
                  <View key={item.id} className={`${className}__category-container-content`}>
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
      {/* 内容分类模块  */}
      {/* 每日必看模块 */}
        <View className={`${className}__watch-container`}>
           <View className={`${className}__watch-container-title`}>
             <Text>每日必看</Text>
             {/* <Text className={`${className}__watch-container-title-right`}>查看全部&nbsp;&gt;</Text> */}
           </View>
           <ScrollView scrollX='true' enableFlex='true' 
             scrollWithAnimation='true'
             className={`${className}__watch-container-content`}
           >
            {
              watchList.map(item => {
                return (
                  <View key={item.id}  className={`${className}__watch-container-content-wrapper`} onClick={toVideoPage}>
                   <View className={`${className}__watch-container-content-wrapper-video`}>
                    <Image src={item.img} className={`${className}__watch-container-content-wrapper-video-img`} />
                    <Text className={`${className}__watch-container-content-wrapper-video-time`}>{item.time}</Text>
                  </View>
                  <View className={`${className}__watch-container-content-wrapper-text`}>
                    <Text>{item.title}</Text>
                    <Text className={`${className}__watch-container-content-wrapper-text-desc`}>{item.desc}</Text>
                  </View>
                </View>
                )
              })
            }
           </ScrollView>
        </View>
      {/* 每日必看模块 */}
      {/* 每日必阅模块 */}
        <ArticleStyle title='每日必阅' articlesList={readList} />
      {/* 每日必阅模块 */}
      {/* 发现新知识模块 */}
      <View className={`${className}__discover-container`}>
          <View className={`${className}__discover-container-title`}>
              发现新知识
          </View>
          <View className={`${className}__discover-container-content`}>
          {
            newKnowledgeList.map(item => {
              return (
              <View key={item.id} className={`${className}__discover-container-content-wrapper`}>
                <View className={`${className}__discover-container-content-wrapper-img`}>
                  <Image src={item.img} mode='widthFix' style={{width:'100%',borderRadius:'10%'}} />
                </View>
                <View className={`${className}__discover-container-content-wrapper-text`}>
                  <Text className={`${className}__discover-container-content-wrapper-text-title`}>{item.title}</Text>
                  <Text className={`${className}__discover-container-content-wrapper-text-desc`}>{item.desc}</Text>
                  <Text className={`${className}__discover-container-content-wrapper-text-author`}>---{item.author}</Text>
                </View>
              </View>
              )
            })
          }
          </View>
      </View>
      {/* 发现新知识模块 */}
    </View>
  )
}
