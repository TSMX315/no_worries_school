/*
 * @Author: TSMX
 * @Date: 2022-03-19 21:55:27
 * @LastEditTime: 2022-03-29 08:37:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\article\article.jsx
 */

import { View,Image, Text,PageContainer,ScrollView,Textarea} from '@tarojs/components'
import Taro, {getCurrentInstance} from '@tarojs/taro';
import { useState, useEffect } from 'react';
import { AtFloatLayout } from "taro-ui"
import TopBarNavigator from '../../components/topNavigator'
import IconFont from '../../components/Iconfont'
import './article.less'

export default function Article(){
  const className = 'article';
  let [isShow,setIsShow] = useState(false);
  let [isPublic,setIsPublic] = useState(true);
  let [openWrite,setOpenWrite] = useState(false);
  let [articleContent,setArticleContent] = useState({});
  let [mainContent,setMainContent] = useState([]);
  let [materialList,setMaterialList] = useState([])
  let [selectedBarId,setSelectedBarId] = useState(0);
  let [selectedBackgroundId,setSelectedBackgroundId] = useState(1);
  let [textColor,setTextColor] = useState('#000');
  let [activeColor,setActiveColor] = useState('#fd7109')
  let [showBackgroundSet,setShowBackgroundSet] = useState(false);
  let [background,setBackground] = useState('#F8F8F8')
  const {windowHeight} = Taro.getSystemInfoSync();
  const toolBarContent = [
    {id:1,name:'分享',colorText:'白色',textColor:'#000',colorTextBackground:'#fff',icon:'icon-fenxiang',size:'45',color:textColor},
    {id:2,name:'收藏',colorText:'纸色',textColor:'#000',colorTextBackground:'#E4DFCC',icon:'icon-jiarushoucang',size:'45',color:textColor},
    {id:3,name:'笔记',colorText:'护眼',textColor:'#000',colorTextBackground:'#A6C9AB',icon:'icon-a-yijianfankuijibiji',size:'45',color:textColor},
    {id:4,name:'主题',colorText:'夜间',textColor:'#999',colorTextBackground:'#000',icon:'icon-zhuti',size:'45',color:textColor},
  ]
  useEffect(() => {
    let params = getCurrentInstance().router.params;
    getArticleContent()
    console.log(params);
  },[])
  // 请求远程数据的接口文章内容
  const getArticleContent = (() => {
     Taro.request({
        url:'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/programmer'
        // url:'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/material'
    }).then(res=>{
        // console.log(res.data)
        let data = res.data;
        setArticleContent(articleContent = data)
        setMainContent(mainContent = data.content)
        setMaterialList(materialList = data.materialList)
    })
  })
  const OpenToolbar = () => {
    setIsShow(isShow = !isShow);
  }
  const handleBackground = (value) => {
    setSelectedBackgroundId(selectedBackgroundId = value);
    if(value === 1){
      setBackground(background = '#F8F8F8')
      setTextColor(textColor = '#000');
      setActiveColor(activeColor = '#fd7109');
    }else if(value === 2){
      setBackground(background = '#E4DFCC');
      setTextColor(textColor = '#000');
      setActiveColor(activeColor = '#9B680D');
    }else if(value === 3){
       setBackground(background = '#A6C9AB')
       setTextColor(textColor = '#000');
       setActiveColor(activeColor = 'green');
    }else if(value === 4){
      setBackground(background = '#000');
      setTextColor(textColor = '#999');
      setActiveColor(activeColor = '#fd7109');
    }
  }
  const handleBackgroundSet = (value) => {
    setSelectedBarId(selectedBarId = value);
    if(value === 4){
      setShowBackgroundSet(showBackgroundSet = !showBackgroundSet);
    }else if(value === 1){
      setShowBackgroundSet(showBackgroundSet = false);
      Taro.showShareMenu({
        withShareTicket: true,
      })
    }else if(value === 3){
      setOpenWrite(openWrite = !openWrite);
      setShowBackgroundSet(showBackgroundSet = false);
    }else if(value === 2){
      Taro.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })
      setShowBackgroundSet(showBackgroundSet = false);
    }
  }
  // 图片预览
  const previewImage = (current) => {
     const urls = [
       'https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=Mzg4NzU5NzY4MQ==&mid=2247485673&idx=1&sn=6843d375f1317f9caaa03509ba65dac8&send_time=',
       'https://img.jspang.com/ArticleImages/20220323_Nuxt003.png', 
     'https://img.jspang.com/ArticleImages/20220323_Nuxt004.png',
    ];
    Taro.previewImage({ urls, current });
  }
  // 关闭写笔记对话框
  const closeWrite = () => {
    setOpenWrite(openWrite = false)
  }
  return (
  <View className={className} style={{height:windowHeight,backgroundColor:background,color:textColor}}>
    <TopBarNavigator title='无忧校园' backgroundColor={background} color={textColor} deltas={1} />
     {/* 底部工具栏部分 */}
      <PageContainer
        show={isShow}
        overlay={false}
        overlayStyle='true'
        customStyle='true'
      >
        <View className={`${className}__tool`} style={{backgroundColor:background,color:textColor}}>
          {showBackgroundSet?
          (
            <View className={`${className}__tool-background`} style={{backgroundColor:background}}>
              {
                   toolBarContent.map(item => {
                     return (
                       <View key={item.id} 
                         style={{backgroundColor:item.colorTextBackground,
                              color:item.textColor,
                              border:selectedBackgroundId == item.id ?`2px solid ${activeColor}`:`0px`}}
                         className={`${className}__tool-background-text`} 
                         onclick={() => handleBackground(item.id)}
                       >
                         {item.colorText}
                       </View>
                     )
                   })
              }
          </View>
          ):(
            <View style={{display:'none'}}></View>
          )  
        }
        <View className={`${className}__tool-bar`} style={{backgroundColor:background}}>
          {
            toolBarContent.map(item => {
              return (
                <View key={item.id} 
                  className={`${className}__tool-bar-list`} 
                  onclick={() => handleBackgroundSet(item.id)}
                >
                  <IconFont name={item.icon} size={item.size} color={selectedBarId == item.id?activeColor:item.color} />
                  <Text style={{color:selectedBarId == item.id?activeColor:item.color}}>{item.name}</Text>
                </View>
              )
            })
          }
        </View>
        </View>
      </PageContainer>
      <AtFloatLayout isOpened={openWrite}>
        <View className={`${className}__write`} style={{backgroundColor:background,color:textColor}}>
        <View className={`${className}__write-top`}>
          <View onClick={closeWrite}>
            <IconFont name='icon-cuowu' size={40} />
          </View>
          <View className={`${className}__write-top-text`}>写笔记</View>
          <View className={`${className}__write-top-public`}>发布</View>
        </View>
        <View className={`${className}__write-middle`}>
          <Textarea 
            placeholder='研究表明，哪怕每次只输入一个符号，也能大幅提高学习效果。'
            maxlength={-1}
            autoFocus='true'
            cursorSpacing={250}
            showConfirmBar
            adjustPosition='true'
            className={`${className}__write-middle-input`}
          />
        </View>
        <View className={`${className}__write-bottom`}>
          {isPublic?
            (
            <View className={`${className}__write-bottom-public`} onClick={() => setIsPublic(isPublic = !isPublic)}>
                 <IconFont name='icon-yanjing' size={25} color='#fd7109' />&nbsp;
                  <Text style={{color:'#fd7109'}}>公开</Text>
            </View>
            ):(
            <View className={`${className}__write-bottom-public`} onClick={() => setIsPublic(isPublic = !isPublic)}>
              <IconFont name='icon-simi' size={30} color='#999' />
              <Text style={{color:'#999'}}>私密</Text>
            </View>
              
            )
          }
          </View>
          </View>
      </AtFloatLayout>
       {/* 底部工具栏部分 */}
       {/* 文章内容部分 */}
          <View onClick={OpenToolbar} className={`${className}__content`}>
            <ScrollView scrollY enableFlex className={`${className}__content-scroll`} style={{height:'90vh'}}>
              <View className={`${className}__content-scroll-title`}>
                <Text userSelect>{articleContent.title}</Text>
              </View>
              <View className={`${className}__content-scroll-three`}>
                        <Text userSelect>{articleContent.pubTime}</Text>
                        <Text userSelect>{articleContent.articleType}</Text>
                        <Text userSelect>{articleContent.readCount}人读过</Text>
              </View>
              <View className={`${className}__content-scroll-author`}>以下文章来源于{articleContent.platform}，作者{articleContent.author}</View>
              <View className={`${className}__content-scroll-platform`} onClick={() => previewImage('https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=Mzg4NzU5NzY4MQ==&mid=2247485673&idx=1&sn=6843d375f1317f9caaa03509ba65dac8&send_time=')}>
                  <View className={`${className}__content-scroll-platform-left`}>
                    <Image src={articleContent.avatar} className={`${className}__content-scroll-platform-left-img`} />
                  </View>
                  <View className={`${className}__content-scroll-platform-text`}>
                    <Text>{articleContent.platformName}</Text>
                    <Text className={`${className}__content-scroll-platform-text-desc`}>{articleContent.platformCall}</Text>
                  </View>
                  <View className={`${className}__content-scroll-platform-right`}>
                    <IconFont name='icon-youjiantou' size='45' color='#999' />
                  </View>
              </View>
              {/* 文章正文部分 */}
              <View className={`${className}__content-scroll-markdown`}>
                      {
                        mainContent.map(item1 => {
                          return (
                            <View key={item1.id} className={`${className}__content-scroll-markdown-container`}>
                              {/* 标题模块 */}
                              {item1.title?
                                (
                                   <View className={`${className}__content-scroll-markdown-container-title`}>
                                  <Text userSelect className={`${className}__content-scroll-markdown-container-title-text`}>
                                      {item1.title}
                                  </Text>
                                </View> 
                                ):(
                                  <View style={{display:'none'}}></View>
                                )
                              }
                               
                              {/* 标题模块 */}
                              {/* 文本段落模块 */}
                                  {
                                    mainContent[item1.id-1].paraList.map(item11 => {
                                      return (
                                        <View key={item11.id} className='at-article__p' style={{color:textColor}}>
                                          <Text userSelect space='nbsp'>
                                              {item11.text}
                                            </Text>
                                        </View>
                                      )
                                    })
                                  }
                              {/* 文本段落模块 */}
                              {/* 代码块模块 */}
                                {mainContent[item1.id-1].codeList?
                                  (
                                    mainContent[item1.id-1].codeList.map(item12 => {
                                      return (
                                        <View className={`${className}__content-scroll-markdown-container-code`} key={item12.id}>
                                          <Text userSelect space='nbsp'>
                                            {item12.code}
                                            </Text>
                                        </View>
                                      )
                                    })
                                  ):(
                                    <View style={{display:'none'}}></View>
                                  )
                                }
                                  
                              {/* 代码块模块 */}
                              {/* 图片模块 */}
                                {mainContent[item1.id-1].imgList?
                                  (mainContent[item1.id-1].imgList.map(item13 => {
                                    return (
                                      <View key={item13.id} onClick={() => previewImage(item13.img)}>
                                          <Image 
                                            className='at-article__img' 
                                            src={item13.img} 
                                            mode='widthFix'
                                          />
                                      </View>
                                    )
                                  })):(
                                    <View style={{display:'none'}}></View>
                                  )
                                }
                            {/* 图片模块 */}
                            </View>
                          )
                        })
                      }
                      {/* 参考资料模块 */}
                  
              </View>
              {/* 文章正文部分 */}
              {/* 文章参考资料部分 */}
                    {materialList?
                      (<View className={`${className}__content-scroll-material`}>
                        <View className={`${className}__content-scroll-material-title`}>参考资料</View>
                          {  
                            materialList.map(item2 => {
                              return (
                                <View className={`${className}__content-scroll-material-text`} key={item2.id}>
                                  <Text userSelect space='nbsp' className={`${className}__content-scroll-material-text-left`}>[{item2.id}]&nbsp;&nbsp;&nbsp;&nbsp;{item2.name}:{item2.url}</Text>
                                </View>
                          )
                      })}
                      </View>
                      ):(
                        <View style={{display:'none'}}></View>
                      )
                    }
              {/* 文章参考资料部分 */}
            </ScrollView>
        </View>
       {/* 文章内容部分 */}
  </View>
  )
}
