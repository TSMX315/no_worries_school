import { View, ScrollView,Input } from '@tarojs/components'
import Taro,{getCurrentInstance,useReady} from '@tarojs/taro'
import HeHeaderCard from './commponents/HeHeaderCard/HeHeaderCard'
import MessageCell from './commponents/MessageCell/MessageCell'
import goodImg from '../../static/logo/youmoyu.png'
import toAvatar from '../../static/logo/wuyou.png'
import './detail.less'

export default function MessageDetail(){
  const className = 'message'
  const {screenHeight,safeArea} = Taro.getSystemInfoSync()
  useReady(() => {
    let params = getCurrentInstance().router.params;
    console.log(params);
  })
  return (
    <View className={className}>
      <View className={`${className}__header`}>
      <HeHeaderCard title='商品详情' logo={goodImg}></HeHeaderCard>
      </View>
      <ScrollView className={`${className}__content`} 
        style={{ height: ((safeArea ?safeArea.height : screenHeight)-195)+ 'px' }} scrollY enableFlex
      >
        <View className={`${className}__content-list`}>          
        <MessageCell avatar={goodImg} type='from' text='这件商品很不错，想跟你换' />          
        <MessageCell avatar={toAvatar} type='to' text='可以呀，你拿什么换' /> 
         <MessageCell avatar={goodImg} type='from' text='我想想，你喜欢看汉服吗？' />          
         <MessageCell avatar={toAvatar} type='to' text='喜欢' />          
         <MessageCell avatar={goodImg} type='from' text='我这里有几件闲置汉服' />          
         <MessageCell avatar={toAvatar} type='to' text='好的，你申请换，我看看' />          
         <MessageCell avatar={goodImg} type='from' text='嗯嗯' />          
         <MessageCell avatar={toAvatar} type='to' text='如果看上喜欢的，就跟你换' />          
         <MessageCell avatar={goodImg} type='from' text='好的哦' />          
         <MessageCell avatar={toAvatar} type='to' text='发了吗？' />       
        </View>
      </ScrollView>
      <View  className={`${className}__chat-wrapper`}>
        <View className={`${className}__chat`}>
          <Input 
            className={`${className}__chat-input`}
            placeholderClass={`${className}__chat-placeholder`}
            placeholder='聊聊...'
          />
        </View>
        <View className={`${className}__chat-btn`}>发送</View>
      </View>
    </View>
  )
}
