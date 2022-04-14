/*
 * @Author: TSMX
 * @Date: 2022-04-12 13:04:24
 * @LastEditTime: 2022-04-14 09:33:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \noWorriesFree\src\pages\share\WritePubForm\publishForm.jsx
 */
import { View,Form,Picker,Text,Button} from '@tarojs/components'
import Taro,{ useReady } from '@tarojs/taro';
import { useState } from 'react';
import { AtInput,AtTextarea,AtImagePicker,AtList,AtListItem }  from 'taro-ui'
import {getBottom} from '../../../utils/safeLocate/sefeLocate';
import './publishForm.less';

export default function PublishForm(){
  const className = 'publish';
  const date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  const [pubType,setPubType] = useState([]);
  const [selected,setSelected] = useState('闲置物品');
  const [goodsInfo,setGoodsInfo] = useState({});
  const [activityInfo,setActivityInfo] = useState({activityDate:date,activityTime:'12:00'});
  const [timeSel,setTimeSel] = useState('12:00');
  const [dateSel,setDateSel] = useState(date);
  const {windowHeight} = Taro.getSystemInfoSync();
  useReady(() => {
    getData();
  });
  // 处理日期选择改变的函数
  const handleDateChange = (e) => {
    setActivityInfo({...activityInfo,activityDate:e.detail.value})
    setDateSel(e.detail.value);
  }
  // 校验是否是手机号码
  const judgeIsPhone = (value) => {
    // 判断value值是否是手机号码或者是QQ号码
    if(/^1[3456789]\d{9}$/.test(value) || /^[1-9][0-9]{4,14}$/.test(value)){
      return true;
    }else{
      Taro.showToast({
        title: '请输入正确的手机号码,微信号或者QQ号码',
        icon: 'none',
        duration: 2000,
        success: () => {
          // 将输入框的值清空
          selected === '闲置物品' ? setGoodsInfo({...goodsInfo,sellerContact:''}) : setActivityInfo({...activityInfo,publisherContact:''});
        }
      })
      return false;
    }
  }
  // 处理时间选择改变的函数
  const handleTimeChange = (e) => {
    setActivityInfo({...activityInfo,activityTime:e.detail.value})
    setTimeSel(e.detail.value);
  }
  // 处理商品表单信息输入框的值
  const handleGoodsInfo = (value,e) => {
    // console.log(value,e);
    setGoodsInfo({...goodsInfo,[e.target.id]:value});
  }
   // 处理活动表单信息输入框的值
  const handleActivityInfo = (value,e) => {
    // console.log(value,e);
    setActivityInfo({...activityInfo,[e.target.id]:value});
  }
  // 请求远程数据
  const getData = () => {
    Taro.request({
      url: 'https://www.fastmock.site/mock/1ab9cc5ef0791a178220b5cbaa7402f5/tsmx/publish',
      success: (res) => {
        setPubType(res.data.publishType);
      }
    })
  }
   const formSubmit = (e) => {
     if(selected === '闲置物品'){
       // 判断各个表单信息是否有值
      if(goodsInfo.goodName  && goodsInfo.goodPrice  && goodsInfo.priceDesc && goodsInfo.sellerContact  && goodsInfo.goodDesc  && goodsInfo.goodImg ){
          Taro.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 2000,
            success: () => {
              console.log(e);
              console.log(goodsInfo);
            }
          })
        }else{
          Taro.showToast({
            title: '必填项不能为空',
            icon: 'none',
            duration: 2000,
          })
          return false;
        }
     }else{
        // 判断各个表单信息是否为空
        if(activityInfo.activityName && activityInfo.activityAddress  && activityInfo.activityDesc  && activityInfo.selfNumber  && activityInfo.oppositeNumber  && activityInfo.publisherContact ){
             Taro.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 2000,
            success: () => {
              console.log(e);
              console.log(activityInfo);
            }
          })
          }else{
            Taro.showToast({
            title: '必填项不能为空',
            icon: 'none',
            duration: 2000,
          })
          return false;
          }
     } 
  }
  const PickerChange = (e) => {
    // console.log(e);
    setSelected(pubType[e.detail.value].type);
    // console.log(pubType[e.detail.value].type);
  }
  return (
    <View className={className} style={{height:`${windowHeight}px`}}>
      <Form onSubmit={formSubmit}>
      <View className={`${className}__select`}>
        <View style={{position:'absolute',top:'17px',left:'16px',zIndex:'99',color:'red',fontSize:'14px'}}>*</View>
          <Picker mode='selector' range={pubType} rangeKey='type' value={selected} onChange={PickerChange}>
                  <AtList>
                    <AtListItem hasBorder={false} title='请选择发布类型' extraText={selected} arrow='right' />
                  </AtList>
            </Picker>
        </View>
      {selected === '闲置物品' ?
        (
      <View className={`${className}__goods`} style={{height:`${windowHeight}px`}}>
        <View>
           <AtInput
             required
             value={goodsInfo.goodName}
             onChange={handleGoodsInfo}
             name='goodName'
             title='商品名称'
             type='text'
             placeholder='请输入商品名称'
           />
        </View>
        <View>
           <AtInput
             required
             value={goodsInfo.goodPrice}
             onChange={handleGoodsInfo}
             name='goodPrice'
             title='商品价格'
             type='digit'
             placeholder='请输入商品价格/元'
           />
        </View>
        <View>
           <AtInput
             required
             value={goodsInfo.priceDesc}
             onChange={handleGoodsInfo}
             name='priceDesc'
             title='价格描述'
             type='text'
             placeholder='价格是否可谈，或者可拿什么东西换'
           />
        </View>
         <View>
           <AtInput
             required
             value={goodsInfo.sellerContact}
             onChange={handleGoodsInfo}
             onBlur={judgeIsPhone}
             name='sellerContact'
             title='联系方式'
             type='number'
             placeholder='请输入手机号,微信号,或者QQ号'
           />
        </View>
        <View className={`${className}__goods-multiple`}>
          <View className={`${className}__goods-multiple-text`}>
            <Text style={{color:'red',fontSize:'14px'}}>*&nbsp;</Text>
            <Text>商品详情描述</Text>
            </View>
          <AtTextarea
            value={goodsInfo.goodDesc}
            onChange={value => setGoodsInfo({...goodsInfo,goodDesc:value})}
            maxLength={200}
            placeholder='质量如何，几成新,,,,'
          />
        </View>
        <View className={`${className}__goods-multiple`}>
          <View className={`${className}__goods-multiple-text`}>
            <Text style={{color:'red',fontSize:'14px'}}>*&nbsp;</Text>
            <Text>请上传商品图片</Text>
            </View>
          <AtImagePicker
            count={5}
            files={goodsInfo.goodImg}
            onChange={value => setGoodsInfo({...goodsInfo,goodImg:value})}
          />
        </View>
      </View>
        ):(
      <View className={`${className}__activity`} style={{height:`${windowHeight}px`}}>
        <View>
           <AtInput
             required
             value={activityInfo.activityName}
             onChange={handleActivityInfo}
             name='activityName'
             title='活动名称'
             type='text'
             placeholder='吃饭，玩耍，拼车，聚会，游戏···'
           />
        </View>
         <View className={`${className}__select`}>
          <View style={{position:'absolute',top:'17px',left:'16px',zIndex:'99',color:'red',fontSize:'14px'}}>*</View>
          <Picker mode='date' name='activityDate' onChange={handleDateChange}>
            <AtList>
              <AtListItem hasBorder='false' title='请选择活动日期' extraText={dateSel} arrow='right' />
            </AtList>
          </Picker>
        </View>
        <View className={`${className}__select`}>
          <View style={{position:'absolute',top:'17px',left:'16px',zIndex:'99',color:'red',fontSize:'14px'}}>*</View>
          <Picker mode='time' name='activityTime' onChange={handleTimeChange}>
            <AtList>
              <AtListItem hasBorder='false' title='请选择活动开始时间' extraText={timeSel} arrow='right' />
            </AtList>
          </Picker>
        </View>
        <View>
           <AtInput
             required
             value={activityInfo.activityAddress}
             onChange={handleActivityInfo}
             name='activityAddress'
             title='活动地点'
             type='text'
             placeholder='请输入活动地点'
           />
        </View>
        <View>
           <AtInput
             required
             value={activityInfo.selfNumber}
             onChange={handleActivityInfo}
             name='selfNumber'
             title='我方参与人数'
             type='text'
             placeholder='请输入我方参与人数'
           />
        </View>
        <View>
           <AtInput
             required
             value={activityInfo.oppositeNumber}
             onChange={handleActivityInfo}
             name='oppositeNumber'
             title='希望对方参与人数'
             type='text'
             placeholder='请输入希望对方参与人数'
           />
        </View>
         <View>
           <AtInput
             required
             value={activityInfo.publisherContact}
             onChange={handleActivityInfo}
             onBlur={judgeIsPhone}
             name='publisherContact'
             title='联系方式'
             type='number'
             placeholder='请输入手机号,微信号,或者QQ号'
           />
        </View>
        <View className={`${className}__activity-multiple`}>
          <View className={`${className}__activity-multiple-text`}>
            <Text style={{color:'red',fontSize:'14px'}}>*&nbsp;</Text>
            <Text>活动详情描述</Text>
          </View>
          <AtTextarea
            value={activityInfo.activityDesc}
            onChange={value => setActivityInfo({...activityInfo,activityDesc:value})}
            maxLength={200}
            placeholder='如：我方全是小姐姐，希望对方全是小哥哥，，，'
          />
        </View>
      </View>
        ) 
     }
  <View className={`${className}__submit`} style={{ bottom: (getBottom() +10)+'px' }}>
      <Button formType='submit' className={`${className}__submit-btn`}>
        发&nbsp;布
    </Button>
  </View>
     </Form>
    </View>
  )
}