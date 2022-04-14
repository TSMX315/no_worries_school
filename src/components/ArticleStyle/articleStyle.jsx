/*
 * @Author: TSMX
 * @Date: 2022-03-22 12:42:26
 * @LastEditTime: 2022-03-22 15:39:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\components\programmer\component\articlesCard.jsx
 */
import {View,Text,ScrollView} from '@tarojs/components'
import Taro from '@tarojs/taro';

import './articleStyle.less'

export default function ArticleStyle({articlesList,title}){
  const className = 'articles';
  const toArticle = () => {
    Taro.navigateTo({url:'/pages/article/article?id=tsmx315'})
  }
  return (
    <View className={className}>
      {title? 
      (
        <View className={`${className}__read-container`}>
            <View className={`${className}__read-container-title`}>
              {title}
           </View>
             <ScrollView scrollX='true' enableFlex='true' 
               scrollWithAnimation='true'
               className={`${className}__read-container-content`}
             >
             {
               articlesList.map(item => {
                 return (
                    <View className={`${className}__read-container-content-wrapper`} key={item.id} onClick={toArticle}>
                      <View className={`${className}__read-container-content-wrapper-title`}>{item.title}</View>
                       <View className={`${className}__read-container-content-wrapper-sub`}>
                        <Text>{item.pubTime}</Text>
                        <Text>{item.articleType}</Text>
                        <Text>{item.readCount}人读过</Text>
                      </View>
                       <View className={`${className}__read-container-content-wrapper-desc`}>{item.desc}</View>
                       <View className={`${className}__read-container-content-wrapper-author`}>{item.author}</View>
                     
                </View>
                 )
               })
             }
           </ScrollView>
        </View>
      ):(
        <View>
            {
            articlesList.map(item => {
              return (
              <View className={`${className}__card-container`} key={item.id}>
              <View className={`${className}__card-container-type`}>
                  {item.typeTitle}
              </View>
                <View className={`${className}__card-container-content`}>
                      <View className={`${className}__card-container-content-title`}>{item.title}</View>
                      <View className={`${className}__card-container-content-sub`}>
                        <Text>{item.pubTime}</Text>
                        <Text>{item.articleType}</Text>
                        <Text>{item.readCount}人读过</Text>
                      </View>
                      <View className={`${className}__card-container-content-desc`}>{item.desc}</View>
                      <View className={`${className}__card-container-content-author`}>{item.author}</View>
                </View>
            </View>
              )
            })
          }
        </View>
      )
    }
    </View>
  )
}
