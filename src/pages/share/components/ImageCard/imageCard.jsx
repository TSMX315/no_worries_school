/*
 * @Author: TSMX
 * @Date: 2022-03-01 20:15:09
 * @LastEditTime: 2022-04-11 22:24:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\share\components\ImageCard\imageCard.jsx
 */
import { View, Text,Image} from '@tarojs/components'
import Taro from '@tarojs/taro';

import './imageCard.less'

export default function ImageCard({goodsList}) {
  const className = 'img_card';
  const goGoodsDetail = (id) => {
    Taro.navigateTo({url:`/pages/goodsDetails/goodsDetail?id=${id}`})
  }
  return (
    <View className={className}>
      {
        goodsList.map(item => {
          return (
            <View key={item.id} className={`${className}__container`} onClick={() => goGoodsDetail(item.id)}>
              <View className={`${className}__container-img`}>
                  <Image
                    className={`${className}__container-img-pic`}        
                    mode='widthFix'     
                    src={item.goodsImg}
                  />
                </View>
                <View className={`${className}__container-text`}>
                  <View className={`${className}__container-text-name`}>{item.goodsName}</View>
                  <View className={`${className}__container-text-middle`}>
                    <View className={`${className}__container-text-middle-price`}>
                      <Text className={`${className}__container-text-middle-price-unit`}>￥</Text>
                      <Text>{item.price}</Text>
                    </View>
                    <View className={`${className}__container-text-middle-other`}>{item.goodsDesc}</View>
                  </View>
                  <View className={`${className}__container-text-seller`}>
                      <Image src={item.sellerAvatar} className={`${className}__container-text-seller-avatar`} />
                      <Text className={`${className}__container-text-seller-name`}>{item.sellerName}</Text>
                  </View>
              </View>
            </View>
          )
        })
        } 
    </View>
  )
}