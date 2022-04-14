/*
 * @Author: TSMX
 * @Date: 2022-04-07 16:48:24
 * @LastEditTime: 2022-04-09 10:58:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\home\BookCateList\cateList.jsx
 */
import { View} from '@tarojs/components'
import Taro,{getCurrentInstance} from '@tarojs/taro';
import { useEffect, useState } from 'react';

import './cateList.less';

export default function BookCateList(){
    const className = 'cate';
    const [cateList,setCateList]  = useState([]);
    const [paramsData,setParamsData] = useState({})
     useEffect(() => {
       let params = getCurrentInstance().router.params;
      setParamsData(params)
       getCateData(params.cateType);
  },[]);
  const getCateData = (value) => {
     Taro.request(
          {
            url:`https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/cate/${value}`,
            success: function (res) {
              // console.log(res.data)
              setCateList(res.data)
            }
          }
          )
  }
  const goShowList = () => {
    Taro.navigateTo({url:`/pages/home/ShowList/showList?listType=${paramsData.listType}`})
  }
    return (
      <View className={className}>
        {
          cateList.map(item => {
            return (
              <View key={item.id} style={{backgroundColor:item.background}} className={`${className}__container`} onClick={goShowList}>
                <View className={`${className}__container-left`}>{item.cateType}</View>
                <View className={`${className}__container-right`}>
                  {
                    cateList[item.id-1].list.map(item1 => {
                      return (
                        <View key={item1.id} className={`${className}__container-right-list`}>
                          {item1.id}&nbsp;{item1.bookName}
                        </View>
                      )
                    })
                  }
                </View>
              </View>
            )
          })
          }
      </View>
    )
}