/*
 * @Author: TSMX
 * @Date: 2022-03-20 21:23:59
 * @LastEditTime: 2022-04-09 11:05:50
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\components\BookScroll\bookScroll.jsx
 */
import {View,Text,Image,ScrollView} from '@tarojs/components'
import Taro from '@tarojs/taro';

import './bookScroll.less'

export default function BookScroll({bookList,title}){
  const className = 'BookScroll';
  const goShowList = () => {
    Taro.navigateTo({url:'/pages/home/ShowList/showList?listType=book'})
  }
  const goBookIntro = () => {
    Taro.navigateTo({url:'/pages/home/BookDesc/bookDesc'})
  }
  return (
       <View className={`${className}__watch-container`}>
           <View className={`${className}__watch-container-title`}>
             <Text>{title}</Text>
             <Text className={`${className}__watch-container-title-right`} onClick={goShowList}>查看全部&nbsp;&gt;</Text>
           </View>
           <ScrollView scrollX='true' enableFlex='true' 
             scrollWithAnimation='true'
             className={`${className}__watch-container-content`}
           >
            {
              bookList.map(item => {
                return (
                  <View key={item.id}  className={`${className}__watch-container-content-wrapper`} onClick={goBookIntro}>
                   <View className={`${className}__watch-container-content-wrapper-video`}>
                    <Image src={item.img} className={`${className}__watch-container-content-wrapper-video-img`} />
                  </View>
                  <View className={`${className}__watch-container-content-wrapper-text`}>
                     {item.title}
                  </View>
                </View>
                )
              })
            }
           </ScrollView>
        </View>
  )
}