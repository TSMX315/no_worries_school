/*
 * @Author: TSMX
 * @Date: 2022-03-30 18:09:19
 * @LastEditTime: 2022-04-05 16:06:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\Interview\Exercise\exercise.jsx
 */
import { View,Swiper,SwiperItem,Text, ScrollView} from '@tarojs/components'
import Taro,{getCurrentInstance,useReady} from '@tarojs/taro';
import { useState } from 'react';
import './testExplain.less'

export default function TestExplain(){
  const className = 'explain';
  let [current,setCurrent] = useState(0);
  const [selectArray,setSelectArray] = useState([]);
  const [testList,setTestList] = useState([]);
  const {windowHeight} = Taro.getSystemInfoSync();
  useReady(() => {  
    let params = getCurrentInstance().router.params;
    // console.log(params);
    setSelectArray(JSON.parse(params.selectArray));
     getTestList(params.testId);
    // console.log(typeof params.testId,params.testId);
  })
  // 请求题目相关信息
  const getTestList = ((id) => {
    // let id = Number(testId);
     Taro.request({// https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/testPaper/c++/2
        url:`https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/testPaper/c++/${id}`
    }).then(res=>{
      console.log(id);
        let data = res.data;
        setTestList(data)
    })
  })
 const switchTab = (e) => {
   let cur = e.target.current;
   setCurrent(cur);
  }
  const handleLastTopic = () => {
    if(current === 0){
      return false;
    }else{
      setCurrent(current - 1);
    }
  }
  const handleNextTopic = () => {
    if(current === testList.length-1){
        return false;
    }else{
      setCurrent(current + 1);
    }
  }
  return (
    <View className={className} style={{height:`${windowHeight}px`}}>
        
      <Swiper duration={100} style={{height:`${windowHeight*2}px`}} className={`${className}__swiper`} current={current} onChange={switchTab}>
        {
          testList.map((item) => {
            return (
              <SwiperItem key={item.id} className={`${className}__swiper-item`}>
                        <View className={`${className}__swiper-item-top`}>
                        <View className={`${className}__swiper-item-top-name`}>
                            <Text style={{color:'#fd7109'}}>{current+1}/{testList.length}&nbsp;({item.type})</Text>&nbsp;&nbsp;
                            <Text style={{color:'#333'}} userSelect space='nbsp'>{item.topicName}</Text>
                        </View>
                          {item.code?
                          (<ScrollView scrollX enableFlex className={`${className}__swiper-item-top-scroll`}>
                            <View className={`${className}__swiper-item-top-scroll-code`}>
                              <Text userSelect space='nbsp' className={`${className}__swiper-item-top-scroll-code-text`}>{item.code}</Text>
                            </View>
                            </ScrollView>
                          ):(
                            <View style={{display:'none'}}></View>
                          )
                        }
                      </View>
                      <View className={`${className}__swiper-item-middle`}>
                            {
                            testList[item.id-1].selection.map(item1 => {
                              return (
                                  <View  key={item1.id}
                                    className={`${className}__swiper-item-middle-select`}
                                    style={{
                                      backgroundColor:item1.value == selectArray[item.id-1].userValue?'#fd7109':'#eee',
                                      color:item1.value == selectArray[item.id-1].userValue? '#fff':'#333'
                                    }}
                                  >
                                      <Text className={`${className}__swiper-item-middle-select-index`}>{item1.value + '.'}</Text>
                                      <Text space='nbsp' className={`${className}__swiper-item-middle-select-text`}>{item1.text}</Text>
                                    </View>
                              )
                            })}
                      </View>         
                          <View className={`${className}__swiper-item-bottom`}>
                            <View className={`${className}__swiper-item-bottom-result`}>
                                <Text>正确答案：{item.correctAnswer}</Text>&nbsp;&nbsp;
                                <Text style={{color:item.correctAnswer == selectArray[item.id-1].userValue ? '#06C484':'#ff0000'}}>你的答案：{selectArray[item.id-1].userValue}</Text>
                            </View>
                            <View className={`${className}__swiper-item-bottom-title`}>
                                参考答案
                            </View>
                            <View className={`${className}__swiper-item-bottom-desc`}>
                              <Text userSelect space='nbsp'>{item.descAnswer}</Text>
                            </View>
                      </View>
                     
              </SwiperItem>
            )
          })
        }
        
      </Swiper>
        <View className={`${className}__bottom`}>
          <View className={`${className}__bottom-btn1 btn`} onClick={handleLastTopic} style={{ background:'#F8F8FF'}}>{current==0?'无':'上一题'}</View>
          <View className={`${className}__bottom-btn2 btn`} onClick={handleNextTopic} style={{ background:'#fd7109'}}>{current==9?'无':'下一题'}</View>
        </View>
    </View>
  )
}