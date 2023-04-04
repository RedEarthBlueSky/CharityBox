import { View, Text } from 'react-native'
import React from 'react'

import { mStyles } from '../../Styles'
import { IconButton } from '../atoms'
import { IconDataProps } from '../../Props/Molecules'

const IconContainer:React.FC<IconDataProps> = ({iconArray, width}) => {
  return (
    <View style={[
      mStyles.iconContainer, {width: `${width}%`
      }]}
    >
      {
        iconArray.map((icon:any, index:number) => (
          <IconButton 
            label={icon.label}
            iconName={icon.iconName}
            size={icon.size}
            color={icon.color}
            badge={icon.badge}
            unread={icon.unread}
            onPress={icon.onPress}
            // Key is not a prop
            key={index}
          />
        ))
      }
    </View>
  )
}

export { IconContainer }