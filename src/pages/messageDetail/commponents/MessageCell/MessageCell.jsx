import { View, Text, Image } from '@tarojs/components';

import './cell.less'

export default function MessageCell({type='from',text,avatar=''}){
   const className = 'messsage-cell';  
   const typedClass = `${className}-${type}`;
  return (
    <View className={`${className} ${typedClass}`}>
      <Image className={`${className}__avatar`} src={avatar} />
      <View className={`${typedClass}__message-wrapper`}
        style={type === 'from' ? {marginRight:'100px'}:{marginLeft:'100px'}}
      >
        <View className='arrow'></View>
        <Text className={`${className}__message ${typedClass}__message`}>{text}</Text>
      </View>
    </View>
  )
}