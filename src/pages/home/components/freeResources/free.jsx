/*
 * @action: TSMX
 * @Date: 2022-03-18 14:09:20
 * @LastEditTime: 2022-03-21 22:50:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\components\freeResources\free.jsx
 */
import { View,Text,Button} from '@tarojs/components'
import { useState } from 'react';
import { AtNoticebar,AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import OnlineList from './component/onlineList'
import './free.less'

export default function Free(){
  const className = 'free';
   const onlineList1 = [
    {id:1,action:'一键复制网址',src:'http://feijisu.com/',title:'飞极速',desc:'内容非常全，更新速度是我见过全网最快的网站，播放速度也很快，,清晰度差点，而且广告特别多，不建议手机端观看',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F37%2F49%2F5bdd26a361572.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650460270&t=8f0a7a9cb189f60f78dc8e44a18cea05'},
    {id:2,action:'一键复制网址',src:'https://www.zhenbuka3.com/',title:'真不卡影院',desc:'清晰度非常高，最高可达1080P,播放速度快,内容也非常全，广告少，更新速度还可以。不过该网站经常有进不去的时候，需要多试几次。',img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mop.com%2Fshouyou%2Fimgfile%2F202106%2F281345512ngi.jpg&refer=http%3A%2F%2Fwww.mop.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650462207&t=82a96e7a7c452ba7e2dd8cb73b8085a0'},
    {id:3,action:'一键复制网址',src:'http://549.tv/',title:'影视森林',desc:'如果上面两个网站还满足不了你的观影需求，去这个网站吧，这个网站几乎收集了所有的观影网站，还给出了对应的评价，总有一个适合你的网站。',img:'https://t9.baidu.com/it/u=226383327,2621723018&fm=218&app=126&f=JPEG?w=121&h=75&s=FAA1F04CAE5D5C57561D742D0300E010'},
  ]
  let [isOpened,setIsOpened] = useState(false)
  // 关闭通告栏事件
  const closeNoticeBar = () => {
    const id = document.getElementById('close')
    id.style.display = 'none';
  }
  // 了解详情事件
  const selectDetail = () => {
      setIsOpened(isOpened = true);
  }
  // 关闭模态框
  const closeModal = () => {
    setIsOpened(isOpened = false)
  }
  return (
    <View className={className}>
      {/* 通告栏 */}
      <View id='close'>
         <AtNoticebar marquee icon='volume-plus' single='true' showMore onGotoMore={selectDetail}>
          由于小程序的限制，小程序内暂不支持直接跳转到本地浏览器中打开网页，您可以点击复制按钮，复制网址自行去本地浏览器打开网页，敬请谅解！
        </AtNoticebar><Text className='close-btn' onClick={closeNoticeBar}>×</Text>
        <AtModal isOpened={isOpened}>
      <AtModalHeader>标题</AtModalHeader>
      <AtModalContent>
        由于小程序的限制，小程序内暂不支持直接跳转到本地浏览器中打开网页，您可以点击复制按钮，复制网址自行去本地浏览器打开网页，敬请谅解！
      </AtModalContent>
      <AtModalAction><Button type='primary' onClick={closeModal}>我已了解，体谅你了</Button> </AtModalAction>
    </AtModal>
      </View>
      {/* 通告栏 */}
       <OnlineList title='在线影视站' onlineList={onlineList1} />
    </View>
  )
}