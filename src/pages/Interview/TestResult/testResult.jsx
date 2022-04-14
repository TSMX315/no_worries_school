/*
 * @Author: TSMX
 * @Date: 2022-04-02 15:14:20
 * @LastEditTime: 2022-04-05 16:06:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\Interview\TestResult\testResult.jsx
 */
import { View,Text} from '@tarojs/components'
import Taro,{getCurrentInstance} from '@tarojs/taro';
import {useEffect, useState } from 'react';
import TopBarNavigator from '../../../components/topNavigator/index.weapp'
import './result.less';

export default function TestResult(){
  const className = 'result';
  const [totalPoint,setTotalPoint] = useState(0);
  const [selectArray,setSelectArray] = useState([]);
  const [testName,setTestName] = useState('');
  const [testId,setTestId] = useState('');
  const {windowHeight} = Taro.getSystemInfoSync(); // style={{height:`${windowHeight}px`}}
  const sheetType = [
    {id:1,text:'正确',backgroundColor:'#06C484'},
    {id:2,text:'错误',backgroundColor:'#ff0000'},
  ]
  const showExplain = () => {
    Taro.navigateTo({url:`/pages/Interview/ShowExplain/testExplain?testId=${testId}&selectArray=${JSON.stringify(selectArray)}`})
  }
  const nextTesting = () => {
    Taro.navigateTo(
      {url:`/pages/Interview/Exercise/exercise?testId=2&testName=${testName}`}
      );
    
  }
  // 接收从上个页面传过来的参数
  useEffect(() => {
    let params = getCurrentInstance().router.params;
    // console.log(params);
    setTestName(params.testName);
    setTotalPoint(params.totalPoint);
    setTestId(params.testId);    
    // console.log(typeof params.testId,params.testId);
    setSelectArray(JSON.parse(params.selectArray));
  },[])
  return (
    <View className={className} style={{height:`${windowHeight}px`}}>
      <TopBarNavigator title='测试结果' deltas={2} backgroundColor='#fff' />
      <View className={`${className}__top`}>
         <View className={`${className}__top-name`}>
           <Text className={`${className}__top-name-text`}>试卷名称</Text>
           <Text>{testName+testId}专项练习</Text>
         </View>
         <View className={`${className}__top-circle`}>
           <View className={`${className}__top-circle-point`}>
             <Text>{totalPoint}</Text>
             <Text className={`${className}__top-circle-point-text`}>分</Text>
            </View>
           <View className={`${className}__top-circle-line`}></View>
           <View className={`${className}__top-circle-line line2`}></View>
         </View>
      </View>
      <View className={`${className}__sheet`}>
          <View className={`${className}__sheet-top`}>
            <View className={`${className}__sheet-top-text`}>答题卡</View>
            <View className={`${className}__sheet-top-type`}>
              {sheetType.map(item => {
                return (
                <View key={item.id} className={`${className}__sheet-top-type-wrapper`}>
                    <View className={`${className}__sheet-top-type-wrapper-item`} style={{backgroundColor:item.backgroundColor}}></View>
                    <View className={`${className}__sheet-top-type-wrapper-text`}>{item.text}</View>
              </View>
                )
              })}
            </View>
          </View>
          <View className={`${className}__sheet-bottom`}>
              {
                selectArray.map(item => {
                  return (
                    <View key={item.id} 
                      className={`${className}__sheet-bottom-item`}
                      style={{backgroundColor:item.userValue === item.correctValue? '#06C484':'#ff0000'}}
                    >
                        {item.id}
                    </View>
                  )
                })
                }
          </View>
      </View>
        <View className={`${className}__bottom`}>
            <View className={`${className}__bottom-btn3 btn`} onClick={nextTesting}>继续练习</View>
            <View className={`${className}__bottom-btn4 btn`} onClick={showExplain}>查看解析</View>
        </View>
    </View>
  )
}