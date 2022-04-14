/*
 * @Author: TSMX
 * @Date: 2022-03-22 16:18:47
 * @LastEditTime: 2022-03-24 23:04:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\videoDetail\videoDetail.jsx
 */
import { View, Text,Video,ScrollView, Image} from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtFloatLayout } from "taro-ui"
import {useState} from 'react'
import IconFont from '../../components/Iconfont'
import './videoDetail.less';

export default function VideoDetail(){
  const className = 'videos';
  const videoSrc = 'https://v3.bdxiguavod.com/cbe8b79a369d946a18557a41cabf39fd/6247bcf7/video/tos/cn/tos-cn-v-3506/de0326c7c5eb4775aad4232df4f44639/?a=32&br=653&bt=653&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=2&ds=2&er=0&ft=.culxIIL7ThWJEBsEXWvLo&l=2022040209553801021219804603221D42&lr=unwatermarked&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajVvbGU6Zjp0PDMzNDVnM0ApZ2U1aDU3O2VkNzw6aGRpOGdpZi0xcjRnbDBgLS1kXy9zczY0XzEwNi0vLmE2Ni8yLzQ6Yw%3D%3D&vl=&vr='
  let [isShow,setIsShow] = useState(false);
  let [isTitle,setIsTitle] = useState(true);
  let [selectedId,setSelectedId] = useState(1);
  const {windowHeight} = Taro.getSystemInfoSync();
  const swiperHeight = windowHeight / 3.4;
  const episodeList = [
    {id:1,episode:'第一讲',title:'Spring高级49讲导学'},
    {id:2,episode:'第一讲',title:'BeanFactory与ApplicationContext_1'},
    {id:3,episode:'第一讲',title:'Spring高级49讲导学'},
    {id:4,episode:'第一讲',title:'Spring高级49讲导学'},
    {id:5,episode:'第一讲',title:'Spring高级49讲导学'},
    {id:6,episode:'第一讲',title:'Spring高级49讲导学'},
    {id:7,episode:'第一讲',title:'Spring高级49讲导学'},
    {id:8,episode:'第一讲',title:'Spring高级49讲导学'},
    {id:9,episode:'第一讲',title:'Spring高级49讲导学'},
    {id:10,episode:'第一讲',title:'Spring高级49讲导学'},
  ];
  const introduceVideoList = [
    {id:1,title:'学Java还是C++，这事很简单！',time:'05:15',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0706%252F32ee8831j00qvsvnp001qc000go00dcc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650612106&t=3e62d1a1ac9c7ba3cfdd19f855baa0ff',platform:'bilibili',up:'程序员鱼皮',watchCount:'9.9万',likeCount:'999'},
    {id:2,title:'学Java还是C++，这事很简单！',time:'05:15',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11567175723%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650612170&t=9d375bccac1c3e966f24d5adbbdbb701',platform:'bilibili',up:'程序员鱼皮',watchCount:'9.9万',likeCount:'999'},
    {id:3,title:'学Java还是C++，这事很简单！',time:'05:15',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.hoyoh.com%2Fuploads%2Fallimg%2F20191219%2Fb35a5c4skyt23473.jpg&refer=http%3A%2F%2Fwww.hoyoh.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650612170&t=f280ff58e54377248f1e7afab99fa3d3',platform:'bilibili',up:'程序员鱼皮',watchCount:'9.9万',likeCount:'999'},
    {id:4,title:'学Java还是C++，这事很简单！',time:'05:15',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F06%2F20171106211108_Y5had.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650612170&t=48cac4c80a267d7a62417c9c4931d04a',platform:'bilibili',up:'程序员鱼皮',watchCount:'9.9万',likeCount:'999'},
    {id:5,title:'学Java还是C++，这事很简单！',time:'05:15',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftu1.whhost.net%2Fuploads%2F20190302%2F13%2F1551506103-MtacXklrws.jpg&refer=http%3A%2F%2Ftu1.whhost.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650612229&t=2a54126ef639bb9c977eadbbf86dd50d',platform:'bilibili',up:'程序员鱼皮',watchCount:'9.9万',likeCount:'999'},
    {id:6,title:'学Java还是C++，这事很简单！',time:'05:15',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphotocdn.sohu.com%2F20150321%2Fmp7221365_1426871228942_1_th.jpeg&refer=http%3A%2F%2Fphotocdn.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650612314&t=57f46b12f69b8b43c2b53bdcbb10b82e',platform:'bilibili',up:'程序员鱼皮',watchCount:'9.9万',likeCount:'999'},
    {id:7,title:'学Java还是C++，这事很简单！',time:'05:15',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.pig66.com%2Fuploadfile%2F2017%2F1115%2F20171115120646974.png&refer=http%3A%2F%2Fupload.pig66.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650612422&t=cae99e95863c723440b36d3adeddac30',platform:'bilibili',up:'程序员鱼皮',watchCount:'9.9万',likeCount:'999'},
  ]
  const handleClose = () => {
    setIsShow(isShow = false);
  }
  const handleOpen = (value) => {
    setIsShow(isShow = true);
    if (value === 'title') {
      setIsTitle(isTitle = true);
    }else{
      setIsTitle(isTitle = false);
    }
  }
  const handleSelected = (value) => {
    console.log(value);
    setSelectedId(selectedId = value);
  }
  return (
    <View  className={className}>
      {/* 视频容器模块 */}
       <View style={{ height: swiperHeight, width:'100%'}} className={`${className}__play-container`}>
      <Video
        id='video'
        title='画江湖之轨夜行'
        src={videoSrc}
        initialTime='0'
        controls
        autoplay
        enablePlayGesture
        enableAutoRotation='true'
        showScreenLockButton='true'
        pictureInPictureMode={["push", "pop"]}
        showCastingButton
        direction={90}
        showCenterPlayBtn='true'
        playBtnPosition='center'
        pageGesture
        showMuteBtn
      />
       </View>
      {/* 视频容器模块 */}
      <View className={`${className}__info`}>
        <ScrollView scrollY='true' enableFlex='true' scrollTop={0} scrollWithAnimation className={`${className}__info-scroll`}>
          {/* 视频内容信息模块 */}
            <View className={`${className}__info-scroll-title`}>
              <View className={`${className}__info-scroll-title-top`}>
                <Text>画江湖之轨夜行</Text>
                <Text className={`${className}__info-scroll-title-top-right`} 
                  onClick={() => {handleOpen('title')}}
                >简介&nbsp;&nbsp;&gt;</Text>
              </View>
              <View className={`${className}__info-scroll-title-middle`}>
                <Text>bilibili&nbsp;</Text>
                <Text>·&nbsp;哈士奇&nbsp;</Text>
                <Text>·&nbsp;2022-1-24&nbsp;</Text>
                <Text>·&nbsp;32万次播放</Text>
              </View>
              <View className={`${className}__info-scroll-title-bottom`}>
                <View className={`${className}__info-scroll-title-bottom-left`}>
                  <IconFont name='icon-weixin1' size={50} color='green' />
                </View>
                <View>
                  <IconFont name='icon-shoucang' size={50} color='white' />
                </View>
              </View>
            </View>
            {/* 视频简介模块 */}
          <AtFloatLayout
            isOpened={isShow} 
            scrollY
            scrollWithAnimation	
            onClose={handleClose}
          >
              <View style={{width: '100%', height:`${windowHeight}px`,
              backgroundColor:'#262834',color:'#fff'}}
              >
                {isTitle?
                (
                  <View className={`${className}__info-scroll-abstract`}>
                    <View className={`${className}__info-scroll-abstract-top`}>
                      <Text className={`${className}__info-scroll-abstract-top-title`}>完美世界</Text>
                      <Text onClick={handleClose}>×</Text>
                    </View>
                     <View className={`${className}__info-scroll-abstract-middle`}>
                      <Text>bilibili&nbsp;</Text>
                      <Text>·&nbsp;哈士奇&nbsp;</Text>
                      <Text>·&nbsp;2022-1-24&nbsp;</Text>
                      <Text>·&nbsp;32万次播放</Text>
                    </View>
                    <View className={`${className}__info-scroll-abstract-middle`}>简介</View>
                  </View>
                ):(
                  <View className={`${className}__info-scroll-episode-detail`}>
                    <View className={`${className}__info-scroll-episode-detail-top`}>
                      <Text className={`${className}__info-scroll-episode-detail-top-title`}>分集(314)</Text>
                      <Text onClick={handleClose}>×</Text>
                    </View>
                    <ScrollView scrollY='true' 
                      enableFlex='true' scrollTop={windowHeight-swiperHeight} 
                      scrollWithAnimation className={`${className}__info-scroll-episode-detail-scroll`}
                    >
                      {
                        episodeList.map(item => {
                          return (
                             <View key={item.id}  
                               className={item.id === selectedId?
                                `${className}__info-scroll-episode-detail-scroll-content active`:
                                `${className}__info-scroll-episode-detail-scroll-content`
                              }
                               onClick={() => handleSelected(item.id)}
                             >
                                <Text className={`${className}__info-scroll-episode-detail-scroll-content-title`}>{item.episode}-{item.title}</Text>
                            </View>
                          )
                        })
                      }
                    </ScrollView>
                  </View>
                )  
              }
              </View>
          </AtFloatLayout>
           {/* 视频简介模块 */}
          {/* 视频内容信息模块 */}
          {/* 视频集数信息模块 */}
          <View className={`${className}__info-scroll-middle`}>
          <ScrollView scrollX='true' enableFlex='true' 
            scrollWithAnimation='true'
            className={`${className}__info-scroll-middle-episode`}
          >
            {
              episodeList.map(item => {
                return (
                  <View key={item.id}  
                    className={
                    item.id === selectedId? `${className}__info-scroll-middle-episode-container active`:
                    `${className}__info-scroll-middle-episode-container`
                   }
                    onClick={() => handleSelected(item.id)}
                  >
                    <Text className={`${className}__info-scroll-middle-episode-container-text`}>{item.episode}-{item.title}</Text>
                </View>
                )
              })
            }
           </ScrollView>
           <View className={`${className}__info-scroll-middle-more`} onClick={() => {handleOpen('')}}>
              <IconFont name='icon-xia' size={40} color='#999' />
            </View>
           </View>
          {/* 视频集数信息模块 */}
           {/* 相关视频推荐模块 */}
            <View className={`${className}__info-scroll-bottom`}>
              {
                introduceVideoList.map(item => {
                  return (
                      <View key={item.id} className={`${className}__info-scroll-bottom-list`}>
                      <View className={`${className}__info-scroll-bottom-list-left`}>
                        <Image src={item.img} className={`${className}__info-scroll-bottom-list-left-img`} mode='withFix' />
                        <View className={`${className}__info-scroll-bottom-list-left-time`}>{item.time}</View>
                      </View>
                      <View className={`${className}__info-scroll-bottom-list-right`}>
                        <View className={`${className}__info-scroll-bottom-list-right-title`}>{item.title}</View>
                        <View className={`${className}__info-scroll-bottom-list-right-desc`}>
                          <View className={`${className}__info-scroll-bottom-list-right-desc-from`}>{item.platform}&nbsp;·&nbsp;{item.up}</View>
                          <View className={`${className}__info-scroll-bottom-list-right-desc-count`}>
                            <View className={`${className}__info-scroll-bottom-list-right-desc-count-item`}>
                              <IconFont name='icon-shipin' size={25} color='#eee' />&nbsp;
                              <Text>{item.watchCount}</Text>
                            </View>
                            <View className={`${className}__info-scroll-bottom-list-right-desc-count-item`}>
                              <IconFont name='icon-shoucang' size={25} color='#eee' />&nbsp;
                              <Text>{item.likeCount}</Text>
                            </View>
                      </View>
                        </View>
                      </View>
                  </View>
                  )
                })
              }
            </View>
           {/* 相关视频推荐模块 */}
        </ScrollView>
      </View>
    </View>
  )
} 