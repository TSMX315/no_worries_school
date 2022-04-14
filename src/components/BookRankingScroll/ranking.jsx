/*
 * @Author: TSMX
 * @Date: 2022-03-21 14:08:27
 * @LastEditTime: 2022-04-09 11:05:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\components\BookRankingScroll\ranking.jsx
 */
import {View,Text,Image,ScrollView} from '@tarojs/components'
import Taro from '@tarojs/taro';

import './rankingScroll.less'

export default function BookScroll({typeList,title,contentList}){
  const className = 'ranking';
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
              typeList.map(item1 => {
                return (
                  <View key={item1.id}  className={`${className}__watch-container-content-wrapper`} style={{backgroundColor:item1.background}}>
                    <View className={`${className}__watch-container-content-wrapper-title`} onClick={goShowList}>
                    <Text className={`${className}__watch-container-content-wrapper-title-text`}>{item1.title}</Text>
                    <Text className={`${className}__watch-container-content-wrapper-title-right`}>&gt;</Text>
                  </View>
                  <View className={`${className}__watch-container-content-wrapper-content`}>
                  {
                    contentList.map(item2 => {
                      return (
                     <View className={`${className}__watch-container-content-wrapper-content-list`} key={item2.id} onClick={goBookIntro}>
                        <Text>{item2.id}</Text>
                        <Image src={item2.img} className={`${className}__watch-container-content-wrapper-content-list-img`} />
                           {item2.desc?
                              (<View className={`${className}__watch-container-content-wrapper-content-list-text`}>
                                <View className={`${className}__watch-container-content-wrapper-content-list-text-title`}>{item2.title}</View>
                                 <View className={`${className}__watch-container-content-wrapper-content-list-text-desc`}>{item2.desc}</View>
                              </View>):(
                                <View className={`${className}__watch-container-content-wrapper-content-list-text`}>
                                  <View className={`${className}__watch-container-content-wrapper-content-list-text-title`}>{item2.title}</View>
                                </View>
                              )  
                        }
                        <Text className={`${className}__watch-container-content-wrapper-content-list-right`}>&gt;</Text>
                    </View>
                      )
                    })
                  }
                  </View>
                </View>
                )
              })
            }
           </ScrollView>
        </View>
  )
}