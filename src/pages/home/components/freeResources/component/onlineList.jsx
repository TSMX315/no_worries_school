/*
 * @Author:  TSMX
 * @Date: 2022-03-21 22:39:10
 * @LastEditTime: 2022-03-21 22:50:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\components\freeResources\component\onlineList.jsx
 */
import { View,Image,Text} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './onlineList.less'

export default function OnlineList({title,onlineList}){
  const className = 'online';
    const copyUrl = (url) => {
      Taro.setClipboardData({
        data: url,
   /*  success: function (res) {
          console.log(res.data) // data
    } */
})
  }
  return (
     <View className={`${className}__container`}>
          <View className={`${className}__container-title`}>
              {title}
          </View>
          <View className={`${className}__container-content`}>
          {
            onlineList.map(item => {
              return (
              <View key={item.id} className={`${className}__container-content-wrapper`}>
                <View className={`${className}__container-content-wrapper-img`}>
                  <Image src={item.img}  className={`${className}__container-content-wrapper-img-picture`} />
                </View>
                <View className={`${className}__container-content-wrapper-text`}>
                    <View className={`${className}__container-content-wrapper-text-top`}>
                      <Text>{item.title}</Text>
                      <Text onClick={() => {copyUrl(item.src)}} className={`${className}__container-content-wrapper-text-top-action`}>{item.action}</Text>
                    </View>
                  <View className={`${className}__container-content-wrapper-text-desc`}>{item.desc}</View>
                </View>
              </View>
              )
            })
          }
          </View>
      </View>
  )
}