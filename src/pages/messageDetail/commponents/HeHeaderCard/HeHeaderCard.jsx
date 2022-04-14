import { View, Image,Text } from '@tarojs/components';

import './card.less'

export default function HeHeaderCard({title='',logo=''}){

  return (
    <View className='card-container'>
      <Image src={logo} className='card-logo' />
      <View className='card-right'>
          <Text className='card-right-title'>{title}</Text>
          <View className='card-right-actions'>
               <View style={{ marginRight: '10px' }}>            
               <Text>申请换</Text> 
               </View>          
               <View>            
                 <Text>毛毛买</Text>          
                 </View>
            </View>
        </View>
    </View>
  )
}