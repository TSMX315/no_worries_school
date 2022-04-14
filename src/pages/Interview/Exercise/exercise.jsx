/*
 * @Author: TSMX
 * @Date: 2022-03-30 18:09:19
 * @LastEditTime: 2022-04-05 16:27:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\Interview\Exercise\exercise.jsx
 */
import { View,Swiper,SwiperItem,Progress,Text, ScrollView} from '@tarojs/components'
import Taro,{getCurrentInstance} from '@tarojs/taro';
import { useEffect, useState } from 'react';
import './exercise.less'

export default function Exercise(){
  const className = 'exercise';
  let [current,setCurrent] = useState(0);
  let [userSelectValue,setUserSelectValue] = useState([]);
  const [testId,setTestId] = useState('');
  const [testName,setTestName] = useState('');
  let [totalPoint,setTotalPoint] = useState(0);
  let [testList,setTestList] = useState([]);
  let [progress,setProgress] = useState(10);
  const {windowHeight} = Taro.getSystemInfoSync();
  useEffect(() => {  
    let params = getCurrentInstance().router.params;
    setTestName(params.testName);
    setTestId(params.testId)
    getTestList(params.testId);
    // console.log(typeof params.testId,params.testId);
  },[])
  // 请求题目相关信息
  const getTestList = ((id) => {
     Taro.request({// https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/testPaper/c++/2
        url:`https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/testPaper/c++/${id}`
    }).then(res=>{
        let data = res.data;
        setTestList(data)
    })
     Taro.request({
        url:'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/userSelectedArray'
    }).then(res=>{
        let data = res.data;
        setUserSelectValue(data)
    })
  })
 const switchTab = (e) => {
   let cur = e.target.current;
   setCurrent(cur);
   setProgress((cur+1)*10);
  }
  const handleLastTopic = () => {
    if(current === 0){
      return false;
    }else{
      setCurrent(current - 1);
      setProgress(((current+1)*10-10)); 
    }
  }
  const handleNextTopic = () => {
    if(current === testList.length-1){
        Taro.navigateTo(
          {
            url:`/pages/Interview/TestResult/testResult?testId=${testId}&testName=${testName}&totalPoint=${totalPoint}&selectArray=${JSON.stringify(userSelectValue)}`,
          })
    }else{
      setCurrent(current + 1);
      setProgress(((current+1)*10+10)); 
    }
  }
  const handleSelected = (item,index,correctAnswer) => {  
    if(current < testList.length-1){
      setCurrent(current + 1);
    }
    testList.forEach((ele, ind) => {
      if (index === ind) {
        ele.selection.forEach((ele1) => {
            ele1.checked = ele1.id === item.id? !ele1.checked : false;
            if(ele1.checked){
              setUserSelectValue(() => {
                userSelectValue[index].userValue = ele1.value;
                userSelectValue[index].checked = ele1.checked;
                userSelectValue[index].correctValue = correctAnswer;
              })
              if(ele1.value === correctAnswer){
                setTotalPoint(totalPoint += 10)
              }
            }
        });
      }
    });
    // console.log(totalPoint);
    setTestList([...testList]);
    setUserSelectValue([...userSelectValue]);
    // console.log(userSelectValue);
  }
  return (
    <View className={className} style={{height:`${windowHeight}px`}}>
        <View className={`${className}__progress`}>
              <Progress 
                percent={progress} 
                strokeWidth={10} 
                active 
                showInfo
                activeColor='#fd7109' 
                borderRadius={5} 
                activeMode='forwards'
              />
      </View>
      <Swiper duration={500} style={{height:`${windowHeight+250}px`}} className={`${className}__swiper`} current={current} onChange={switchTab}>
        {
          testList.map((item,index) => {
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
                                    onClick={() => handleSelected(item1,index,item.correctAnswer)}
                                    className={item1.checked?`${className}__swiper-item-middle-select checked`:`${className}__swiper-item-middle-select`}
                                  >
                                      <Text className={`${className}__swiper-item-middle-select-index`}>{item1.value + '.'}</Text>
                                      <Text space='nbsp' className={`${className}__swiper-item-middle-select-text`}>{item1.text}</Text>
                                    </View>
                              )
                            })}
                      </View>
              </SwiperItem>
            )
          })
        }
        
      </Swiper>
        <View className={`${className}__bottom`}>
          <View className={`${className}__bottom-btn1 btn`} onClick={handleLastTopic} style={{ background:'#F8F8FF'}}>{current==0?'无':'上一题'}</View>
          <View className={`${className}__bottom-btn2 btn`} onClick={handleNextTopic} style={{ background:'#fd7109'}}>{current==9?'交卷':'下一题'}</View>
        </View>
    </View>
  )
}